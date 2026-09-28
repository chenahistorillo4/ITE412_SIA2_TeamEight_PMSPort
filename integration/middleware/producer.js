const { sendMessage, getQueueLength } = require("./queue");

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
        amount: 5000,
        route: "Pinamalayan - Marinduque",
        travelDate: "2026-10-17",
        status: "Pending"
    }
];

console.log("Submitting booking requests to the queue...\n");

bookings.forEach((booking) => {
    sendMessage(booking);

    console.log(
        `Booking request submitted: {passengerName: ${booking.passengerName}, amount: ${booking.amount}, route: ${booking.route}, travelDate: ${booking.travelDate}, status: ${booking.status}}`
    );
});

console.log(`\nQueue size after submission: ${getQueueLength()}`);