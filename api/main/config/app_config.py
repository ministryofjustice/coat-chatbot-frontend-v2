import os
from types import SimpleNamespace

def __get_bool_env_var(name: str) -> bool:
    return (os.getenv(name) or "").strip().lower() in ("1", "true", "yes", "on")


def __get_env_var(name: str) -> str | None:
    return os.getenv(name)


app_config = SimpleNamespace(
    flask=SimpleNamespace(
        app_secret_key=__get_env_var("APP_SECRET_KEY"),
        app_env=__get_env_var("APP_ENV")
    ),
    api=SimpleNamespace(
        api_key=__get_env_var("CHATBOT_API_KEY"),
        api_id=__get_env_var("CHATBOT_API_ID"),
    ),
    logging_level=__get_env_var("LOGGING_LEVEL"),
)
