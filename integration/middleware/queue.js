const queue = [];

function sendMessage(message) {
    if (!message || typeof message !== "object") {
        throw new Error("Message must be an object.");
    }

    queue.push(message);
    return message;
}

function receiveMessage() {
    return queue.shift() ?? null;
}

function getQueueLength() {
    return queue.length;
}

module.exports = {
    queue,
    sendMessage,
    receiveMessage,
    getQueueLength
};