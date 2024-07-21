import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'; 
import EventForm from '../components/Form/EventForm';

const AddEventPage = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <EventForm />
            </main>
            <Footer />
        </div>
    );
};

export default AddEventPage;
