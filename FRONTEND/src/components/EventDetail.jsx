import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AttendeeForm from './Form/AttendeeForm';
import './EventDetail.scss';

const EventDetail = () => {
    const { id } = useParams(); // Get event ID from route parameters
    const [event, setEvent] = useState(null); // State to store event data
    const [loading, setLoading] = useState(true); // State to handle loading state

    useEffect(() => {
        // Fetch event details when component mounts or ID changes
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/events/${id}`);
                setEvent(response.data); // Set event data
                setLoading(false); // Update loading state
            } catch (error) {
                console.error('Error fetching event', error); // Handle fetch error
            }
        };
        fetchEvent();
    }, [id]); // Dependency array to refetch if ID changes

    // Handle attendee registration
    const handleAttendeeRegister = async (attendee) => {
        try {
            await axios.post(`http://localhost:8081/api/events/${id}/attendees`, attendee);
            setEvent(prev => ({
                ...prev,
                attendees: [...prev.attendees, attendee] // Add new attendee
            }));
        } catch (error) {
            console.error('Error registering attendee', error); // Handle registration error
        }
    };

    // Handle attendee deletion
    const handleAttendeeDelete = async (attendeeId) => {
        const numericAttendeeId = Number(attendeeId); // Convert ID to number
        try {
            await axios.delete(`http://localhost:8081/api/events/${id}/attendees/${numericAttendeeId}`);
            setEvent(prev => ({
                ...prev,
                attendees: prev.attendees.filter(attendee => attendee.id !== numericAttendeeId) // Remove deleted attendee
            }));
        } catch (error) {
            console.error('Error deleting attendee', error); // Handle deletion error
        }
    };

    if (loading) return <p>Loading...</p>; // Display loading text while fetching data

    return (
        <div className="event-detail">
            <h1>{event.name}</h1>
            <div className="event-info">
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
                <p>{event.location}</p>
            </div>
            <div className="attendees-list">
                <h2>Attendees</h2>
                <ul>
                    {event.attendees.map(attendee => (
                        <li key={attendee.id}>
                            {attendee.name} ({attendee.email})
                            <button onClick={() => handleAttendeeDelete(attendee.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <div className="attendee-form-wrapper">
                    <AttendeeForm onRegister={handleAttendeeRegister} />
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
