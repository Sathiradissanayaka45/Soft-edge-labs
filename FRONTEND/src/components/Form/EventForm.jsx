import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './EventForm.scss';

const EventForm = ({ event = {}, onSave }) => {
    const [name, setName] = useState(event.name || '');
    const [description, setDescription] = useState(event.description || '');
    const [date, setDate] = useState(event.date ? new Date(event.date).toISOString().split('T')[0] : '');
    const [location, setLocation] = useState(event.location || '');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = { name, description, date, location };

        try {
            if (event.id) {
                // Update event
                await axios.put(`http://localhost:8081/api/events/${event.id}`, eventData);
            } else {
                // Add new event
                await axios.post('http://localhost:8081/api/events', eventData);
            }
            toast.success('Event saved successfully!'); // Show success toast
            // Reset form fields
            setName('');
            setDescription('');
            setDate('');
            setLocation('');
            onSave();
            navigate('/');
        } catch (error) {
            console.error('Error saving event', error);
        }
    };

    return (
        <div className="event-form-container">
            <h1>{event.id ? 'Update Event' : 'Add New Event'}</h1>
            <form className="event-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Event Name"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Event Description"
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        placeholder="Event Location"
                    />
                </div>
                <button type="submit" className="submit-button">Save Event</button>
            </form>
        </div>
    );
};

export default EventForm;
