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


## 🚀 Run the Backend

To start the backend server, follow these steps:

1. **Open a terminal** on your system.
2. **Navigate to the `backend` directory** where your backend code is located.
3. **Run the following command** to start the backend server:

   ```bash
   ./mvnw spring-boot:run

### 🗃️ Create Tables

Once the backend server is up and running, it will automatically generate the required tables in the `event_management` schema. You don't need to create them manually—everything is handled for you!

If the tables are not created, ensure the backend server is running correctly and check the logs for any errors.


### 🌐 Frontend Setup

#### 🛠️ Prerequisites

Before you start, make sure you have the following installed:

- **Node.js**: A JavaScript runtime for building scalable network applications. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: The Node.js package manager, included with Node.js. It helps you manage and install project dependencies.

Make sure these tools are properly set up to get the frontend running smoothly.

#### 📦 Install Dependencies

To set up the frontend, follow these steps:

1. **Open a Terminal**: Launch your terminal application.
2. **Navigate to the Frontend Directory**: Use the `cd` command to go to the directory where the frontend code is located.
   
   ```bash
   cd path/to/frontend


    ```bash
    npm install
    ```

#### 🚀 Run the Frontend

To launch the frontend application:

1. **Open a Terminal**: Ensure your terminal is open and you're in the frontend directory.
2. **Start the Application**: Run the following command to start the frontend server:

   ```bash
   npm start

#### 🌐 Access the Application

To view the application, follow these steps:

1. **Open a Web Browser**: Use your preferred web browser.
2. **Navigate to the Application**: Enter the following URL in the address bar:

   [http://localhost:3000](http://localhost:3000)

   This will load the Event Management System, where you can interact with all its features.


### 🛠️ Usage

Explore the main functionalities of the Event Management System:

- **Create an Event**: Navigate to the **"Add Event"** page to create new events with ease.
- **View Events**: On the homepage, browse through the list of events to find what you're looking for.
- **Add Attendees**: Open an event to view its details and use the provided form to add new attendees.
- **Remove Attendees**: Within the event details, you can remove attendees as needed.
- **Update an Event**: Click **"Update"** on an event card to modify the event details and keep information current.
- **Delete an Event**: Click **"Delete"** on an event card to remove it. A confirmation popup will ensure you’re making the right choice.

### 🔧 Troubleshooting

Encountering issues? Here are some tips:

- **Backend Connection Issues**: Ensure that MySQL is running and that the credentials in `application.yml` are correctly configured.
- **Frontend Issues**: Check the terminal output for any errors and ensure all dependencies are properly installed.

### 🌐 Access the Application

- **Frontend**: Open a web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.
- **Backend**: The backend server runs on [http://localhost:8081](http://localhost:8081).
- 
### ℹ️ Additional Information

- **Backend Code**: Located in the `BACKEND` directory.
- **Frontend Code**: Located in the `FRONTEND` directory.

For additional support or questions, please refer to the documentation or contact support for assistance.

