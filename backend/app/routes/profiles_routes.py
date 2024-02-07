import json
import collections

collections.Iterable = collections.abc.Iterable

from flask import Blueprint, jsonify, request

from app.services import firestore_db

bp = Blueprint("profiles", __name__)

@bp.route("/profile/<slug>", methods=["GET"])
def get_profile_by_name(slug):
    print(slug)
    user_data = firestore_db.get_profile_by_slug(slug)
    print("user_data:", user_data)
    if user_data:
        return jsonify(user_data)
    else:
        return jsonify({"error": "User not found"}), 404