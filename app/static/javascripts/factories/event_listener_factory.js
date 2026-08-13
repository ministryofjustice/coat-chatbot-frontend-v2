import { submit_user_question_button_event_listener } from "/javascripts/listeners/event_listener.js";

export function add_submit_user_question_button_event_listener() {
    const submit_user_question_button = document.getElementById('submit-user-question-button');

    submit_user_question_button.addEventListener('click', submit_user_question_button_event_listener)
}