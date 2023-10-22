import json
import collections

collections.Iterable = collections.abc.Iterable

from flask import Blueprint, jsonify, request, make_response, redirect, current_app
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_jwt_extended.exceptions import NoAuthorizationError
from flask.wrappers import Response
from flask.globals import request, session

from app.utils import upload_photo_to_bucket
from app.firestore import get_credentials_from_flow, get_id_info, get_user_info, store_user_in_db, get_user_data_by_email
from app.services import flow, firestore_db, jwt_manager, logger

bp = Blueprint("user", __name__)


@bp.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    return jsonify({"message": "This is a protected route"})

# @bp.route('/current_user', methods=['GET'])
# @jwt_required()
# def get_current_user():
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user)


@bp.route("/api/user/<email>", methods=["GET"])
def get_user_data(email):
    user_ref = firestore_db.collection('users').document(email)
    user_data = user_ref.get()

    if user_data.exists:
        return jsonify(user_data.to_dict())
    else:
        return jsonify({"error": "User not found"}), 404
    
@bp.route("/api/people", methods=["GET"])
def get_all_users():
    print("getting all users")
    users = firestore_db.collection('users').stream()
    users_list = []
    for user in users:
        users_list.append(user.to_dict())
    print(jsonify(users_list))
    return jsonify(users_list)

@bp.route("/api/people/update", methods=["POST"])
def update_user_info():
    data = request.json
    users_ref = firestore_db.collection('users')

    user_document = users_ref.document(data.get('email'))
    user_document.update(data)

    return jsonify({"message": "User updated successfully"})

@bp.route("/api/current_user", methods=["GET"])
@jwt_required()
def current_user():
    print("request", request)
    print("cookies", request.cookies)
    current_user_email = get_jwt_identity()
    # print(current_user_email)
    user_data = get_user_data_by_email(current_user_email, firestore_db) 
    return jsonify(name=user_data['name'])

@bp.route("/api/user", methods=["GET"])
@jwt_required()
def get_user():
    current_user_email = get_jwt_identity()
    logger.debug("current_user_email", current_user_email)
    user_data = get_user_data_by_email(current_user_email, firestore_db) 
    return jsonify(user_data)

@jwt_manager.invalid_token_loader
def invalid_token_callback(error):
    logger.error(f"Invalid token: {error}")
    return jsonify({
        'message': 'Invalid token.',
        'error': str(error)
    }), 422