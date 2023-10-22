import json
import collections

collections.Iterable = collections.abc.Iterable

from flask import Blueprint, make_response, redirect, current_app
from flask_jwt_extended import create_access_token
from flask.wrappers import Response
from flask.globals import request, session

from app.utils import upload_photo_to_bucket
from app.firestore import get_credentials_from_flow, get_id_info, get_user_info, store_user_in_db, get_user_data_by_email
from app.services import flow, firestore_db

bp = Blueprint("auth", __name__)

@bp.route("/callback")
def callback():
    print("current_app.config", current_app.config)
    credentials = get_credentials_from_flow()
    id_info = get_id_info(credentials)
    user_info = get_user_info(credentials)
    
    if user_info.get("picture"):
        upload_photo_to_bucket(user_info.get("picture"), id_info.get("sub"))

    store_user_in_db(firestore_db, user_info)
    access_token = create_access_token(identity=user_info.get("email"))
    redirect_url = "http://localhost:3000"
    # redirect_url = f'{current_app.config["BASE_URL"]}'

    response = make_response(redirect(redirect_url))
    response.set_cookie('access_token_cookie', 
                        access_token, 
                        httponly=True, 
                        samesite='Lax', 
                        secure=True, 
                        domain='localhost', 
                        path='/')
    print(response)

    return response

@bp.route("/auth/google")
def login():
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return Response(response=json.dumps({'auth_url': authorization_url}),
                    status=200,
                    mimetype='application/json')