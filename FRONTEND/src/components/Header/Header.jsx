import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeDropdown = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">Event Manager</Link>
                {isMobile ? (
                    <button className="mobile-nav-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                ) : (
                    <nav className="nav-menu">
                        <Link to="/" className="nav-link" onClick={closeDropdown}>Home</Link>
                        <Link to="/add-event" className="nav-link" onClick={closeDropdown}>Add Event</Link>
                        <button className="nav-button" onClick={closeDropdown}>Log Out</button>
                    </nav>
                )}
            </div>
            {isMobile && isMenuOpen && (
                <div className="mobile-navigation-links show-links">
                    <Link to="/" className="mobile-navigation-link" onClick={closeDropdown}>Home</Link>
                    <Link to="/add-event" className="mobile-navigation-link" onClick={closeDropdown}>Add Event</Link>
                    <button className="mobile-navigation-button" onClick={closeDropdown}>Log Out</button>
                </div>
            )}
        </header>
    );
};

export default Header;
