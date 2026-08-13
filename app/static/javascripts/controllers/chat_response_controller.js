import { create_chat_message_from_html_string } from "/javascripts/factories/element_factory.js";
import { delete_element } from "/javascripts/animations/loading_animation.js";
import { 
    create_html_string_paragraph, 
    create_html_string_table,
    create_html_string_message
} 
from "/javascripts/factories/html_string_factory.js";

export function chat_response_controller(data) {
    delete_element("chat-loading-message");
    delete_element("chat-loading-message-spacer");

    var query = data.query;
    var query_result_rows = data.query_result;
    
    const html_string_query_header_paragraph = create_html_string_paragraph("Query:");
    const html_string_query_paragraph = create_html_string_paragraph(query);
    const html_string_query_result_header_paragraph = create_html_string_paragraph("Query Result:");
    const html_string_query_result_table = create_html_string_table(query_result_rows);

    const html_string_message_content = [
        html_string_query_header_paragraph, 
        html_string_query_paragraph,
        html_string_query_result_header_paragraph,
        html_string_query_result_table
    ].join("");

    const html_string_message = create_html_string_message("CostChat", html_string_message_content);

    create_chat_message_from_html_string(html_string_message);
}

export function error_response_controller(data) {
    delete_element("chat-loading-message-spacer");
    delete_element("chat-loading-message");

    var message = data.message;

    const html_string_error_message = create_html_string_message("CostChat", message);

    create_chat_message_from_html_string(html_string_error_message);
}