# 🎉 Soft-edge-labs
## 🌟 Event Management System

### 📋 Overview

Welcome to the **Event Management System**! This comprehensive web application is designed to streamline the management of events and attendees. The system features a powerful backend built with **Spring Boot (JDK 19)** and a dynamic frontend developed using **React.js**.

### 🚀 Features

- **Create Events**: Easily create new events with detailed information.
- **Read Events**: View and manage detailed information about each event.
- **Add Attendees**: Effortlessly add attendees to specific events.
- **Remove Attendees**: Remove attendees from events as needed.
- **Update Events**: Modify event details with ease.
- **Delete Events**: Remove events with a confirmation prompt.

### ⚙️ Backend Setup

#### Prerequisites

- **JDK 19**: Ensure you have JDK 19 installed.
- **MySQL Workbench**: Required for database management.

#### Database Configuration

1. **Create Schema**:
   - Open MySQL Workbench and create a schema named `event_management`.

2. **Configure Application**:
   - Clone the repository and navigate to the `backend` directory.
   - Open `src/main/resources/application.yml`.
   - Update the MySQL connection details by replacing `your_username` and `your_password` with your MySQL credentials:

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
