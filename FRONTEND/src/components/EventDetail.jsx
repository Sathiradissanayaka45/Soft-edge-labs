import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AttendeeForm from './Form/AttendeeForm';
import './EventDetail.scss';

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/events/${id}`);
                setEvent(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event', error);
            }
        };
        fetchEvent();
    }, [id]);

    const handleAttendeeRegister = async (attendee) => {
        try {
            await axios.post(`http://localhost:8081/api/events/${id}/attendees`, attendee);
            setEvent(prev => ({
                ...prev,
                attendees: [...prev.attendees, attendee]
            }));
        } catch (error) {
            console.error('Error registering attendee', error);
        }
    };

    const handleAttendeeDelete = async (attendeeId) => {
        const numericAttendeeId = Number(attendeeId);
        try {
            await axios.delete(`http://localhost:8081/api/events/${id}/attendees/${numericAttendeeId}`);
            setEvent(prev => ({
                ...prev,
                attendees: prev.attendees.filter(attendee => attendee.id !== numericAttendeeId)
            }));
        } catch (error) {
            console.error('Error deleting attendee', error);
        }
    };

    if (loading) return <p>Loading...</p>;

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
