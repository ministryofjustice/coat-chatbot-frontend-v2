export function create_chat_message_from_html_string(html_string_message) {
    const scroll_container = document.getElementById('moj-messages-container');

    const chat_container = document.getElementById('response-container');

    const chat_response_message = document.createElement('div');

    chat_response_message.innerHTML = html_string_message

    chat_container.appendChild(chat_response_message);

    scroll_container.scrollTop = scroll_container.scrollHeight;
}

export function clear_question_box() {
    const question_box = document.getElementById('user-question-text-area');

    question_box.value = "";
}