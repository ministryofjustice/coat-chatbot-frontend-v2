import { api_key, api_id } from "../config.js";
import { 
    chat_response_controller,
    error_response_controller
} from "../controllers/chat_response_controller.js";

export function send_request(user_question) {
    const api_endpoint = `${window.location.origin}/api/submit-query`;

    const payload = {
        user_question: user_question
    };

    const headers = {
        "Content-Type": "application/json"
    }

    console.log(`Sending POST request to: ${api_endpoint}`);

    fetch(api_endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response content:");

            console.log(data);

            if ("message" in data) {
                error_response_controller(data);
            } else {
                chat_response_controller(data);
            }
        })
        .catch(error => {
            error_response_controller(error);
        })
}