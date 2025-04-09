import React, { useState } from 'react';

export const BasicForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [emailError, setEmailError] = useState('');
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        if (name === 'email') {
            if (!value.includes('@')) {
                setEmailError('Email must include @');
            } else {
                setEmailError('');
            }
        }
    };

    const clearForm = () => {
        setFormState({
            firstName: '',
            lastName: '',
            email: '',
        });
        setEmailError('');
        setFormError('');
    };

    const handleSubmit = () => {
        const { firstName, lastName, email } = formState;

        if (!firstName || !lastName || !email || emailError) {
            setFormError('Form is invalid. Please check all fields.');
            return;
        }

        clearForm();
        setShowForm(false);
    };

    return (
        <div className="container">
            {!showForm && (
                <button onClick={() => setShowForm(true)} className="button">
                    Show Form
                </button>
            )}

            {showForm && (
                <div>
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                    />

                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                    />

                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />

                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    {formError && <p style={{ color: 'red' }}>{formError}</p>}

                    <button onClick={clearForm} className="button">
                        Clear
                    </button>
                    <button onClick={handleSubmit} className="button">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};
