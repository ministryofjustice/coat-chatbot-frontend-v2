# pylint: disable=C0411
import logging

from flask import Flask

from api.main.config.app_config import app_config
from api.main.config.cors_config import configure_cors
from api.main.config.limiter_config import configure_limiter
from api.main.config.logging_config import configure_logging
from api.main.config.routes_config import configure_routes

logger = logging.getLogger(__name__)


def create_app(is_rate_limit_enabled=True) -> Flask:
    configure_logging(app_config.logging_level)

    logger.info("Starting app...")

    app = Flask(__name__, static_folder="static", static_url_path="/assets")

    app.secret_key = app_config.flask.app_secret_key

    configure_routes(app)
    configure_error_handlers(app)
    configure_sentry(app_config.sentry.dsn_key, app_config.sentry.environment)
    configure_limiter(app, is_rate_limit_enabled)
    configure_jinja(app)
    configure_cors(app)

    logger.info("Running app...")

    return app
