import React from 'react';
import EventList from '../components/EventList';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <main>
                <EventList />
            </main>
        </div>
    );
};

export default HomePage;
