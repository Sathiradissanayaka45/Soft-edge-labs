import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEventPage from './pages/AddEventPage';
import EventDetailPage from './pages/EventDetailPage';
import UpdateEventPage from './pages/UpdateEventPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header /> 
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/add-event" element={<AddEventPage />} />
                        <Route path="/events/:id" element={<EventDetailPage />} />
                        <Route path="/update-event/:id" element={<UpdateEventPage />} />
                    </Routes>
                </main>
                <Footer />
                <ToastContainer 
                    position="top-right" 
                    autoClose={5000} 
                    hideProgressBar={false} 
                    newestOnTop={false} 
                    closeOnClick 
                    rtl={false} 
                    pauseOnFocusLoss 
                    draggable 
                    pauseOnHover 
                />
            </div>
        </Router>
    );
};

export default App;
