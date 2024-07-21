import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EventList.scss';
import { FaTrash } from 'react-icons/fa';

const EventList = () => {
    // State for storing events data
    const [events, setEvents] = useState([]);
    // State for managing the ID of the event to be deleted
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    // Fetch events from the backend on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/events');
                // Check if response data is an array
                if (Array.isArray(response.data)) {
                    setEvents(response.data);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching events', error);
            }
        };
        fetchEvents();
    }, []); // Empty dependency array means this runs once on mount

    // Function to handle event deletion
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/events/${id}`);
            // Update state to remove the deleted event
            setEvents(events.filter(event => event.id !== id));
            toast.success('Event deleted successfully!'); // Show success toast
        } catch (error) {
            console.error('Error deleting event', error);
            toast.error('Error deleting event.'); // Show error toast
        }
        // Reset confirmation state
        setConfirmDeleteId(null);
    };

    // Set the ID of the event to be deleted for confirmation
    const confirmDelete = (id) => {
        setConfirmDeleteId(id);
    };

    // Cancel the deletion process
    const cancelDelete = () => {
        setConfirmDeleteId(null);
    };

    return (
        <div className="event-list">
            <h1>Events</h1>
            {/* Link to add a new event */}
            <Link to="/add-event" className="add-event-button">Add Event</Link>
            <div className="event-grid">
                {/* Map through events and display each one */}
                {events.map(event => (
                    <div className="event-card" key={event.id}>
                        <div className="card-header">
                            <h2>{event.name}</h2>
                        </div>
                        <div className="card-body">
                            <p>{event.description}</p>
                            <div className="event-details">
                                <span>Date: {new Date(event.date).toLocaleDateString()}</span>
                                <span>Location: {event.location}</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            {/* Links to view details and update event */}
                            <Link to={`/events/${event.id}`} className="details">View Details</Link>
                            <Link to={`/update-event/${event.id}`} className="update">Update</Link>
                            {/* Button to initiate deletion */}
                            <button 
                                className="delete"
                                onClick={() => confirmDelete(event.id)}
                            >
                                <FaTrash className="icon" /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Confirmation popup for delete action */}
            {confirmDeleteId && (
                <div className="confirmation-popup">
                    <p>Are you sure you want to delete this event?</p>
                    <button onClick={() => handleDelete(confirmDeleteId)}>Yes, Delete</button>
                    <button onClick={cancelDelete}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default EventList;
