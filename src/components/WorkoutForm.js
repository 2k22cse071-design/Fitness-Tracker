import React, { useState, useEffect } from 'react';

const WorkoutForm = ({ addWorkout, editWorkout, editingWorkout, setEditingWorkout }) => {
    const [workout, setWorkout] = useState({
        name: '',
        duration: '',
        date: ''
    });

    useEffect(() => {
        if (editingWorkout) {
            setWorkout(editingWorkout);
        } else {
            setWorkout({ name: '', duration: '', date: '' });
        }
    }, [editingWorkout]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!workout.name.trim() || !workout.duration || !workout.date) {
            alert("Please fill in all fields correctly!");
            return;
        }

        if (editingWorkout) {
            editWorkout(workout);
        } else {
            addWorkout({ ...workout, id: Date.now() });
        }

        // Clear Form after submit
        setWorkout({ name: '', duration: '', date: '' });
    };

    const handleCancel = () => {
        setEditingWorkout(null);
        setWorkout({ name: '', duration: '', date: '' });
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{editingWorkout ? '📝 Edit Workout' : '🆕 Add New Workout'}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Workout Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Running, Yoga"
                        value={workout.name}
                        onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
                        className="input-field"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Duration (mins)</label>
                    <input
                        type="number"
                        placeholder="30"
                        value={workout.duration}
                        onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
                        className="input-field"
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Date</label>
                    <input
                        type="date"
                        value={workout.date}
                        onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
                        className="input-field"
                    />
                </div>
                <div style={styles.buttonGroup}>
                    <button type="submit" style={styles.submitBtn}>
                        {editingWorkout ? 'Update Workout' : 'Add Workout'}
                    </button>
                    {editingWorkout && (
                        <button type="button" onClick={handleCancel} style={styles.cancelBtn}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

const styles = {
    card: {
        background: '#ffffff',
        padding: '2rem',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        marginBottom: '2rem',
    },
    title: {
        marginBottom: '1.5rem',
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#111827',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#374151',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem',
    },
    submitBtn: {
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '0.625rem 1rem',
        flex: 1,
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem',
    },
    cancelBtn: {
        backgroundColor: '#ffffff',
        color: '#374151',
        padding: '0.625rem 1rem',
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.875rem',
    }
};



export default WorkoutForm;

