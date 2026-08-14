export function create_html_string_table(rows) {
    const columns = Object.keys(rows[0]);

    const html_string_columns = columns.map(column => `<th>${column.replace(/_/g, " ")}</th>`);

    const html_string_rows = rows.map(row => `
        <tr>
            ${columns.map(column => `<td>${row[column]}</td>`).join("")}
        </tr>
        `
    );

    let html_string_table = `
        <table>
            <thead>
                <tr>
                    ${html_string_columns.join("")}
                </tr>
            </thead>
            <tbody>
                ${html_string_rows.join("")}
            </tbody>
        </table>
    `;

    return html_string_table
}

export function create_html_string_paragraph(text) {
    return `<p>${text}</p>`
}

export function create_html_string_date() {
    const now = new Date();

    const formattedDate = now.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return `<time class="moj-message-list__date" datetime="${formattedDate}">${formattedDate}</time>`
}

export function create_html_string_message(user, text, request) {
    const now = new Date();

    const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).toLowerCase();

    const mode = request ? "sent" : "received";

    return `
        <time class="moj-message-list__date"></time>
        <div class="moj-message-item moj-message-item--${mode}">
            <div class="moj-message-item__text moj-message-item__text--${mode}">${text}</div>
            <div class="moj-message-item__meta">
                <span class="moj-message-item__meta--sender">${user}</span> at <time class="moj-message-item__meta--timestamp" datetime="${formattedTime}">${formattedTime}</time>
            </div>
        </div>
    `
}

export function create_html_string_loading_message() {
    return `
        <time class="moj-message-list__date" id="chat-loading-message-spacer"></time>
        <div class="chat-loading-message" id="chat-loading-message">Loading</div>
    `
}