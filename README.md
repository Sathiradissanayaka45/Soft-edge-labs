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

