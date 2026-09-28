const { sendMessage } = require("./queue");

const bookings = [
    {
        passenger: "Juan Dela Cruz",
        amount: 1500,
        trip: "PMS-001"
    },
    {
        passenger: "Maria Santos",
        amount: 3000,
        trip: "PMS-002"
    },
    {
        passenger: "Pedro Reyes",
        amount: 5000,
        trip: "PMS-003"
    }
];

bookings.forEach((booking) => {
    sendMessage(booking);

    console.log(
        `Booking request submitted: {passenger: ${booking.passenger}, amount: ${booking.amount}, trip: ${booking.trip}}`
    );
});