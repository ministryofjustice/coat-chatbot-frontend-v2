# pylint: disable=C0411
from flask import Blueprint, current_app, request, redirect, session, url_for

from app.main.middleware.auth import requires_auth
from app.main.config.app_config import app_config
from app.main.services.api_service import api_service

api_route = Blueprint("api_routes", __name__)

api_service = api_service(
    app_config.api.api_id,
    app_config.api.api_key,
    app_config.flask.app_env
)


@api_route.route("/submit-query", methods=["POST"])
@requires_auth
def submit_query():
    payload = request.get_json(silent=True)

    query = payload.get("user_question")

    api_response = api_service.submit_query(query)

    return api_response