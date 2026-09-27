const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// ==========================
// PMS PORT - RESERVATIONS
// ==========================

let reservations = [
    {
        id: 1,
        passengerName: "Juan Dela Cruz",
        route: "Pinamalayan - Marinduque",
        travelDate: "2026-10-15",
        status: "Confirmed"
    },
    {
        id: 2,
        passengerName: "Maria Santos",
        route: "Marinduque - Sibale",
        travelDate: "2026-10-16",
        status: "Pending"
    }
];

// GET all reservations
app.get("/reservations", (req, res) => {
    res.status(200).json(reservations);
});

// POST a new reservation
app.post("/reservations", (req, res) => {
    const newReservation = {
        id: reservations.length + 1,
        passengerName: req.body.passengerName,
        route: req.body.route,
        travelDate: req.body.travelDate,
        status: req.body.status || "Pending"
    };

    reservations.push(newReservation);

    res.status(201).json(newReservation);
});


// ==========================
// PMS PORT - TRIPS
// ==========================

let trips = [
    {
        id: 1,
        route: "Pinamalayan - Marinduque",
        departureTime: "08:00 AM",
        arrivalTime: "10:00 AM",
        availableSeats: 50
    },
    {
        id: 2,
        route: "Marinduque - Sibale",
        departureTime: "01:00 PM",
        arrivalTime: "03:00 PM",
        availableSeats: 45
    }
];

// GET all trips
app.get("/trips", (req, res) => {
    res.status(200).json(trips);
});

// POST a new trip
app.post("/trips", (req, res) => {
    const newTrip = {
        id: trips.length + 1,
        route: req.body.route,
        departureTime: req.body.departureTime,
        arrivalTime: req.body.arrivalTime,
        availableSeats: req.body.availableSeats
    };

    trips.push(newTrip);

    res.status(201).json(newTrip);
});


// ==========================
// START SERVER
// ==========================

app.listen(PORT, () => {
    console.log(`PMS PORT REST API running at http://localhost:${PORT}`);
});