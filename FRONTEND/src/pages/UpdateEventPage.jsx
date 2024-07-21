import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EventForm from '../components/Form/EventForm';

const UpdateEventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event', error);
            }
        };
        fetchEvent();
    }, [id]);

    const handleSave = async (updatedEvent) => {
        try {
            await axios.put(`http://localhost:8081/api/events/${id}`, updatedEvent);
            navigate('/');
        } catch (error) {
            console.error('Error updating event', error);
        }
    };

    if (!event) return <p>Loading...</p>;

    return (
        <div>
            <EventForm event={event} onSave={handleSave} />
        </div>
    );
};

export default UpdateEventPage;
