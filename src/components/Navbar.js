import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <h1 style={styles.logo}>FitTrack</h1>
                <p style={styles.tagline}>Track your progress</p>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 0',
        marginBottom: '2rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#4f46e5',
    },
    tagline: {
        color: '#6b7280',
        fontSize: '0.875rem',
    }
};

export default Navbar;
