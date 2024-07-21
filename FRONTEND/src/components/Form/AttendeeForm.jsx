import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './AttendeeForm.scss';

const AttendeeForm = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            toast.error('Please fill in both fields.'); 
            return;
        }
        onRegister({ name, email });
        setName('');
        setEmail('');
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
