import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EventForm from '../components/Form/EventForm';

const UpdateEventPage = () => {
    // Extract the event ID from the URL parameters
    const { id } = useParams();
    // State to hold the event data
    const [event, setEvent] = useState(null);
    // Hook to programmatically navigate
    const navigate = useNavigate();

    // Fetch the event details when the component mounts or the event ID changes
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

    // Function to handle saving the updated event data
    const handleSave = async (updatedEvent) => {
        try {
            await axios.put(`http://localhost:8081/api/events/${id}`, updatedEvent);
            // Navigate back to the event list page after successful update
            navigate('/');
        } catch (error) {
            console.error('Error updating event', error);
        }
    };

    // Show a loading message while the event data is being fetched
    if (!event) return <p>Loading...</p>;

    return (
        <div>
            {/* Render the EventForm component with the current event data and handleSave callback */}
            <EventForm event={event} onSave={handleSave} />
        </div>
    );
};

export default UpdateEventPage;
