import { send_request } from "../request/send_request.js";
import { clear_question_box, create_chat_message_from_html_string } from "../factories/element_factory.js";
import { trigger_loading_animation } from "../animations/loading_animation.js";
import { 
    create_html_string_message,
    create_html_string_loading_message
 } from '../factories/html_string_factory.js';

export function chat_request_controller(user_question) {
    const html_string_request_message = create_html_string_message("You", user_question, "sent");

    create_chat_message_from_html_string(html_string_request_message)

    clear_question_box();

    const html_string_loading_message = create_html_string_loading_message();

    create_chat_message_from_html_string(html_string_loading_message);
    
    trigger_loading_animation();

    send_request(user_question);
}