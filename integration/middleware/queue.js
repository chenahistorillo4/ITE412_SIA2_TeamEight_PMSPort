const queue = [];

function sendMessage(message) {
    queue.push(message);
}

function receiveMessage() {
    return queue.shift();
}

module.exports = {
    queue,
    sendMessage,
    receiveMessage
};