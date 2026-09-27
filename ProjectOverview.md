# PMS PORT - Project Overview

## Project Title

PMS Port: A Cloud-Based Ferry Booking Management System for Pinamalayan, Marinduque and Sibale Port with QR Boarding Pass Integration

## Project Description

PMS Port is a cloud-based ferry booking management system designed to help passengers book ferry tickets online and assist port staff in managing trips, reservations, and passenger information.

The system supports online reservations, GCash payment, QR boarding passes, cargo booking, and discounts for qualified passengers such as students and senior citizens.

## Core Modules

The two core modules implemented for the REST API are:

1. Reservations
2. Trips

### Reservations Module

The Reservations module manages passenger ferry reservations. It contains information such as:

- Passenger name
- Route
- Travel date
- Reservation status

REST endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/reservations` | Retrieve all reservations |
| POST | `/reservations` | Create a new reservation |

### Trips Module

The Trips module manages available ferry trips and their schedules.

It contains information such as:

- Route
- Departure time
- Arrival time
- Available seats

REST endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/trips` | Retrieve all trips |
| POST | `/trips` | Create a new trip |

## Integration Pattern & Rationale

The project uses a REST-based integration pattern between the client/application and the backend API.

REST was selected because it provides a simple and standardized way for different parts of the PMS Port system to communicate using HTTP requests.

The API uses JSON as the data format for requests and responses. HTTP methods are used according to the operation being performed:

- GET – retrieves data
- POST – creates new data

For this performance task, the API uses in-memory dummy data instead of a database. This allows the REST endpoints to be developed and tested before connecting the system to a permanent database.

## API Technology

The REST API was developed using:

- Node.js
- Express.js
- JSON
- Postman for API testing

## API Server

The API server runs locally using:

```text
http://localhost:3000