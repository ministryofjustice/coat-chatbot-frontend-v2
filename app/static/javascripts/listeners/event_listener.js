import { chat_request_controller } from "../controllers/chat_request_controller.js";

export function submit_user_question_button_event_listener() {
    const user_question_text_area = document.getElementById('user-question-text-area');

    const user_question = user_question_text_area.value.trim();

    if (user_question === "") return;

    chat_request_controller(user_question);
}