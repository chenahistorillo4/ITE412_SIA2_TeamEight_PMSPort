const { receiveMessage, getQueueLength } = require("./queue");

function processBookings() {
    if (getQueueLength() === 0) {
        console.log("No booking requests in the queue.");
        return;
    }

    const booking = receiveMessage();

    if (!booking) {
        console.log("No booking requests in the queue.");
        return;
    }

    const passengerName = booking.passengerName || booking.passenger || "Unknown passenger";
    const route = booking.route || booking.trip || "Unknown route";
    const travelDate = booking.travelDate || "N/A";

    setTimeout(() => {
        const status = booking.amount <= 5000 ? "Approved" : "Rejected";

        console.log(
            `Booking request for ${passengerName} on ${route} (${travelDate}) → ${status}`
        );

        processBookings();
    }, 1000);
}

console.log("Processing booking queue...\n");
processBookings();