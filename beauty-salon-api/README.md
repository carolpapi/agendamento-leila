# Beauty Salon API

This project is a RESTful API for scheduling appointments at a beauty salon. It allows users to create, view, and manage appointments using a simple JSON interface.

## Technologies Used

- Node.js
- Express.js
- In-memory data storage
- JSON communication

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd beauty-salon-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the server, run the following command:
```
npm start
```
The server will run on `http://localhost:3000`.

## API Endpoints

### Create Appointment

- **Endpoint:** `POST /appointments`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "phone": "1234567890",
    "date": "2023-10-01",
    "time": "10:00",
    "service": "Haircut"
  }
  ```
- **Response:**
  - Success: `201 Created`
  - Error: `400 Bad Request`

### Get Appointments

- **Endpoint:** `GET /appointments`
- **Response:**
  - Success: `200 OK` with a list of appointments.

## Swagger Documentation

For API documentation, visit: `http://localhost:3000/api-docs` after starting the server.