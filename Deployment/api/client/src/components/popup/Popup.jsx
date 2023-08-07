import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import useFetch from '../../hooks/useFetch';
import './popup.css';

const Popup = ({ setOpen, listingId }) => {
    const { data, loading, error } = useFetch(`/listing/find/${listingId}`);
    const [showConfirmation, setShowConfirmation] = useState(true);
    const [showUserInfoPopup, setShowUserInfoPopup] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');

    const handleNo = () => {
        setOpen(false);
    };

    const handleYes = () => {
        setShowConfirmation(false);
        setShowUserInfoPopup(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (firstName && lastName && phoneNumber && dateOfAppointment) {
            setShowUserInfoPopup(false);
            setShowSuccess(true);
        }
    };

    return (
        <div className="booking">
            <Helmet>
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                />
                <script
                    nomodule
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                />
            </Helmet>
            <div className="booking-container">
                <button className="booking-close" onClick={() => setOpen(false)}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                {showConfirmation && (
                    <div>
                        <p>
                            You are about to avail {data.name} by {data.provider} worth ₱{data.newPrice}. Proceed?
                        </p>
                        <div className="booking-confirmation">
                            <button onClick={handleYes}>Yes</button>
                            <button onClick={handleNo}>No</button>
                        </div>
                    </div>
                )}

                {showUserInfoPopup && (
                    <div className="user-info-popup">
                        <h2>Enter Your Information</h2>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Date of Appointment:</label>
                            <input
                                type="date"
                                value={dateOfAppointment}
                                onChange={(e) => setDateOfAppointment(e.target.value)}
                                required
                            />
                        </div>
                        <div className="booking-confirmation">
                            <button onClick={handleSubmit} className="submit-button">
                                Submit
                            </button>
                        </div>

                    </div>
                )}

                {showSuccess && (
                    <div>
                        <p>
                            Success! You have paid ₱{data.newPrice} to {data.provider}
                        </p>
                        <p>Thank you for using Localize</p>
                        <div className="booking-confirmation">
                            <button onClick={handleOk}>OK</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
