import { api_key, api_id } from "/javascripts/config.js";
import { 
    chat_response_controller,
    error_response_controller
} from "/javascripts/controllers/chat_response_controller.js";

export function send_request(user_question) {
    const api_endpoint = `https://${api_id}.execute-api.eu-west-2.amazonaws.com/production/send-request`;

    const payload = {
        user_question: user_question
    };

    const headers = {
        "Content-Type": "application/json",
        "x-api-key": api_key
    }

    console.log(`Sending POST request to: ${api_endpoint}`);

    fetch(api_endpoint, {
        method: "POST",
        mode: 'cors',
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