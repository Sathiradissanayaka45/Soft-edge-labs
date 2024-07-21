# Soft-edge-labs
# Event Management System

## Overview

The Event Management System is a web application that allows users to manage events and attendees. The application consists of a backend developed with Spring Boot (JDK 19) and a frontend developed with React.js.

## Features

- **Create Events**: Users can create new events.
- **Read Events**: Users can view details of events.
- **Add Attendees**: Users can add attendees to events.
- **Remove Attendees**: Users can remove attendees from events.
- **Update Events**: Users can update event details.
- **Delete Events**: Users can delete events.

## Backend Setup

### Prerequisites

- JDK 19
- MySQL Workbench

### Database Configuration

1. **Create Schema**:
   - Open MySQL Workbench and create a schema named `event_management`.

2. **Configure Application**:
   - Clone the repository and navigate to the backend directory.
   - Open `src/main/resources/application.yml`.
   - Configure the MySQL connection by replacing `your_username` and `your_password` with your actual MySQL credentials.

   ```yaml
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/event_management
       username: your_username
       password: your_password
     h2:
       console:
         enabled: true

## Run the Backend

To start the backend server:

1. Open a terminal.
2. Navigate to the `backend` directory.
3. Run the following command:

   ```bash
   ./mvnw spring-boot:run


### Create Tables

After starting the backend, tables will be created automatically in the `event_management` schema.

### Frontend Setup

#### Prerequisites

- Node.js
- npm

#### Install Dependencies

1. Open a terminal and navigate to the frontend directory.
2. Install the required packages by running:

    ```bash
    npm install
    ```

#### Run the Frontend

Start the frontend application with:

``bash
npm start

#### Access the Application

Open a web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.


### Usage

- **Create an Event**: Navigate to the "Add Event" page to create a new event.
- **View Events**: On the homepage, view the list of events.
- **Add Attendees**: Open an event to view details and use the form to add attendees.
- **Remove Attendees**: In the event details, you can remove attendees.
- **Update an Event**: Click "Update" on an event card to modify event details.
- **Delete an Event**: Click "Delete" on an event card to remove the event. A confirmation popup will appear to confirm the deletion.

### Troubleshooting

- **Backend Connection Issues**: Ensure MySQL is running and credentials in `application.yml` are correct.
- **Frontend Issues**: Check terminal output for errors and ensure all dependencies are installed.

### Additional Information

- The backend code is located in the `backend` directory.
- The frontend code is located in the `frontend` directory.

For further questions or support, please refer to the documentation or contact support.
