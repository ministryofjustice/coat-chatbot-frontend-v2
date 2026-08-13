export async function trigger_loading_animation() {
    const loading_element = document.getElementById("chat-loading-message");

    var dot_count = 0

    while (loading_element) {
        if (dot_count < 3) {
            loading_element.textContent += ".";

            dot_count += 1;
        } else {
            loading_element.textContent = "Loading";

            dot_count = 0;
        }

        await sleep(1000);
    }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export function delete_element(id) {
    const element = document.getElementById(id);

    element.remove();
}
