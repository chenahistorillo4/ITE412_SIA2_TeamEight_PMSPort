const queue = [];

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
        amount: 6000,
        trip: "PMS-003"
    }
];

// PRODUCER
bookings.forEach((booking) => {
    queue.push(booking);

    console.log(
        `Booking request submitted: {passenger: ${booking.passenger}, amount: ${booking.amount}, trip: ${booking.trip}}`
    );
});

// CONSUMER
function processQueue() {
    if (queue.length === 0) {
        console.log("\nAll booking requests processed.");
        return;
    }

    const booking = queue.shift();

    setTimeout(() => {
        if (booking.amount <= 5000) {
            console.log(
                `Booking request for ${booking.passenger} → Approved`
            );
        } else {
            console.log(
                `Booking request for ${booking.passenger} → Rejected`
            );
        }

        processQueue();
    }, 1000);
}

console.log("\nProcessing booking queue...\n");

processQueue();