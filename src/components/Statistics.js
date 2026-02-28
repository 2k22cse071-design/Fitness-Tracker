import React from 'react';

const Statistics = ({ workouts }) => {
    const totalCreated = workouts.length;
    const totalCompleted = workouts.filter(w => w.completed).length;
    const totalMinutes = workouts.reduce((sum, w) => sum + parseInt(w.duration || 0), 0);

    // Weekly count
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay())).setHours(0, 0, 0, 0);
    const weeklyCount = workouts.filter(w => new Date(w.date) >= firstDayOfWeek).length;

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Your Fitness Insights</h2>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <span style={styles.cardLabel}>All-Time Sessions</span>
                    <strong style={styles.cardValue}>{totalCreated}</strong>
                </div>
                <div style={styles.card}>
                    <span style={styles.cardLabel}>Goal Completions</span>
                    <strong style={{ ...styles.cardValue, color: '#10b981' }}>{totalCompleted}</strong>
                </div>
                <div style={styles.card}>
                    <span style={styles.cardLabel}>Total Minutes</span>
                    <strong style={styles.cardValue}>{totalMinutes}</strong>
                </div>
                <div style={styles.card}>
                    <span style={styles.cardLabel}>This Week</span>
                    <strong style={{ ...styles.cardValue, color: '#4f46e5' }}>{weeklyCount}</strong>
                </div>
            </div>

            <div style={styles.summaryBox}>
                <h3 style={styles.summaryTitle}>Achievements</h3>
                {totalCompleted > 10 && <p>🏆 Double Digit Done: 10+ Completed Workouts!</p>}
                {totalMinutes > 500 && <p>🔥 Burn Master: 500+ Minutes Logged!</p>}
                {totalCreated === 0 && <p>Start your journey by adding a workout today!</p>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem',
    },
    header: {
        fontSize: '1.5rem',
        color: '#111827',
        marginBottom: '1.5rem',
        fontWeight: '600',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem',
    },
    card: {
        background: '#ffffff',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    },
    cardValue: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#111827',
    },
    cardLabel: {
        fontSize: '0.875rem',
        color: '#6b7280',
        fontWeight: '500',
    },
    summaryBox: {
        background: '#f9fafb',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        color: '#4b5563',
    },
    summaryTitle: {
        fontSize: '1rem',
        color: '#111827',
        marginBottom: '0.75rem',
        fontWeight: '600',
    }
};


export default Statistics;
