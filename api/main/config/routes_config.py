# pylint: disable=C0411
from app.main.routes.api import api_route
from flask import Flask


def configure_routes(app: Flask) -> None:
    app.register_blueprint(api_route, url_prefix="/api")
