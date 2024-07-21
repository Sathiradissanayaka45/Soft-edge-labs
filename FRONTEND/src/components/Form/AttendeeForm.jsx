import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
import './AttendeeForm.scss'; // Import component-specific styles

const AttendeeForm = ({ onRegister }) => {
    // State to hold the values of name and email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if both name and email fields are filled
        if (!name || !email) {
            toast.error('Please fill in both fields.'); // Show error toast if fields are empty
            return; // Exit the function if validation fails
        }

        // Call the onRegister callback with the attendee data
        onRegister({ name, email });

        // Reset form fields
        setName('');
        setEmail('');

        // Show success toast after successful registration
        toast.success('Attendee registered successfully!');
    };

    return (
        <form className="attendee-form" onSubmit={handleSubmit}>
            <h3>Register Attendee</h3>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default AttendeeForm;
