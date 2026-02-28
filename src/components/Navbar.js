import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <div style={styles.brand}>
                    <h1 style={styles.logoText}>FitTrack</h1>
                </div>
                <div style={styles.navLinks}>
                    {['home', 'planner', 'tracker', 'stats'].map((tab) => (
                        <button
                            key={tab}
                            style={{
                                ...styles.navBtn,
                                ...(activeTab === tab ? styles.activeBtn : {})
                            }}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
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
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
    },
    logoText: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#111827',
        margin: 0,
    },
    navLinks: {
        display: 'flex',
        gap: '0.5rem',
    },
    navBtn: {
        background: 'none',
        border: 'none',
        color: '#6b7280',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
    },
    activeBtn: {
        color: '#111827',
        backgroundColor: '#f3f4f6',
    }
};

export default Navbar;
