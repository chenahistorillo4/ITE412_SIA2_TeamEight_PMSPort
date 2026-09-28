const { sendMessage, receiveMessage, getQueueLength } = require("./queue");

const bookings = [
    {
        passengerName: "Juan Dela Cruz",
        amount: 1500,
        route: "Pinamalayan - Marinduque",
        travelDate: "2026-10-15",
        status: "Pending"
    },
    {
        passengerName: "Maria Santos",
        amount: 3000,
        route: "Marinduque - Sibale",
        travelDate: "2026-10-16",
        status: "Pending"
    },
    {
        passengerName: "Pedro Reyes",
        amount: 6000,
        route: "Pinamalayan - Marinduque",
        travelDate: "2026-10-17",
        status: "Pending"
    }
];

console.log("\nProcessing booking queue...\n");

bookings.forEach((booking) => {
    sendMessage(booking);

    console.log(
        `Booking request submitted: {passengerName: ${booking.passengerName}, amount: ${booking.amount}, route: ${booking.route}, travelDate: ${booking.travelDate}, status: ${booking.status}}`
    );
});

function processQueue() {
    if (getQueueLength() === 0) {
        console.log("\nAll booking requests processed.");
        return;
    }

    const booking = receiveMessage();
    const passengerName = booking.passengerName || booking.passenger || "Unknown passenger";
    const route = booking.route || booking.trip || "Unknown route";
    const travelDate = booking.travelDate || "N/A";

    setTimeout(() => {
        const status = booking.amount <= 5000 ? "Approved" : "Rejected";

        console.log(
            `Booking request for ${passengerName} on ${route} (${travelDate}) → ${status}`
        );

        processQueue();
    }, 1000);
}

processQueue();