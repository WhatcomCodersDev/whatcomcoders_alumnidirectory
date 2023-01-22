import json
import requests
import google
import os
import pathlib

import collections

collections.Iterable = collections.abc.Iterable

from flask import Flask
from flask_cors import CORS
from flask.wrappers import Response
from flask.globals import request, session
from google.oauth2 import id_token

from dotenv import load_dotenv
from werkzeug.utils import redirect
from google_auth_oauthlib.flow import Flow

load_dotenv()

app = Flask(__name__)
CORS(app)
app.config['Access-Control-Allow-Origin'] = '*'
app.config["Access-Control-Allow-Headers"] = "Content-Type"

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
app.secret_key = os.getenv("SECRET_KEY")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
client_secrets_file = os.path.join(
    pathlib.Path(__file__).parent, "client_secret.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "openid",
    ],
    redirect_uri="http://localhost:4000/callback")


@app.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)
    credentials = flow.credentials
    request_session = requests.session()
    token_request = google.auth.transport.requests.Request(
        session=request_session)

    id_info = id_token.verify_oauth2_token(id_token=credentials._id_token,
                                           request=token_request,
                                           audience=GOOGLE_CLIENT_ID)
    session["google_id"] = id_info.get("sub")

    del id_info["aud"]
    return redirect('http://localhost:3000')


@app.route("/auth/google")
def login():
    print("attempt to login")
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return Response(response=json.dumps({'auth_url': authorization_url}),
                    status=200,
                    mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=True, port=4000, host="0.0.0.0")