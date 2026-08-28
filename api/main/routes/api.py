# pylint: disable=C0411
from flask import Blueprint, request, jsonify

from app.main.config.app_config import app_config
from app.main.services.api_service import ApiService
from app.main.validators.validate_query import validate_query

api_route = Blueprint("api_routes", __name__)

api_service = ApiService(
    app_config.api.api_id,
    app_config.api.api_key,
    app_config.flask.app_env
)


@api_route.route("/submit-query", methods=["POST"])
def submit_query():
    payload = request.get_json(silent=True)

    query = payload.get("user_question")

    valid_query = validate_query(query)

    if not valid_query:
        return jsonify({"message": f"Invalid input: {query}"}), 400

    api_response = api_service.submit_query(valid_query)

    print(f"API Response: {api_response}")

    return api_response
