from flask import Blueprint, render_template
from app.main.middleware.auth import requires_auth

main = Blueprint("main", __name__)


@main.route("/")
@requires_auth
def index():
    return render_template("pages/main.html")
