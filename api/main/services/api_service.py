import requests

# pylint: disable=R0903
class ApiService:
    def __init__(
        self, api_id: str, api_key: str, app_env: str
    ) -> None:
        self.api_id = api_id
        self.api_key = api_key
        self.app_env = app_env

    def submit_query(self, query):
        url = f"https://{self.api_id}.execute-api.eu-west-2.amazonaws.com/{self.app_env}/send-request"

        payload = {"user_question": query}

        headers = {
            "Content-Type": "application/json",
            "x-api-key": self.api_key
        }

        print(f"Sending POST request to: {url}")

        response = requests.post(url, headers=headers, json=payload)

        return response.json(), response.status_code
