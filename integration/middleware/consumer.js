function processBookings() {
    if (queue.length === 0) {
        console.log("No booking requests in the queue.");
        return;
    }

    const booking = receiveMessage();

    setTimeout(() => {
        // Example approval rule
        if (booking.amount <= 5000) {
            console.log(
                `Booking request for ${booking.passenger} → Approved`
            );
        } else {
            console.log(
                `Booking request for ${booking.passenger} → Rejected`
            );
        }

        // Process the next message
        processBookings();
    }, 1000);
}

processBookings();