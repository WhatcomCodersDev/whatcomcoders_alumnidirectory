import os
import google
import requests
import collections

collections.Iterable = collections.abc.Iterable

from flask.globals import request
from google.oauth2 import id_token
from googleapiclient.discovery import build
from app.services import flow

def get_credentials_from_flow():
    flow.fetch_token(authorization_response=request.url)
    credentials = flow.credentials
    return credentials

def get_id_info(credentials: google.oauth2.credentials.Credentials):
    request_session = requests.session()
    token_request = google.auth.transport.requests.Request(
        session=request_session)

    id_info = id_token.verify_oauth2_token(id_token=credentials._id_token,
                                           request=token_request,
                                           audience=os.getenv('GOOGLE_CLIENT_ID'))
    del id_info["aud"]
    return id_info

def get_user_info(credentials: google.oauth2.credentials.Credentials):
    service = build('people', 'v1', credentials=credentials)
    results = service.people().get(resourceName='people/me', 
                                   personFields='names,emailAddresses,photos').execute()
    
    user_info = {
        "name": results.get("names")[0].get("displayName") if results.get("names") else None,
        "email": results.get("emailAddresses")[0].get("value") if results.get("emailAddresses") else None,
        "picture": results.get("photos")[0].get("url") if results.get("photos") else None
    }

    return user_info

def store_user_in_db(db, user_info: dict) -> None:
    """Stores the user info in Firestore"""
    user_ref = db.collection('users').document(user_info.get('email'))
    user_ref.set(user_info)

def get_user_data_by_email(email: str, db) -> dict:
    """Retrieves user data from Firestore by email"""
    user_ref = db.collection('users').document(email)
    user_data = user_ref.get()

    if user_data.exists:
        return user_data.to_dict()
    else:
        return None    