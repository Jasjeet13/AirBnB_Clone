import React, { useState } from 'react';
import "./CreditCardForm.css";

const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};

        if (!cardNumber) validationErrors.cardNumber = 'Card number is required';
        if (!cardName) validationErrors.cardName = 'Card name is required';
        if (!expiryDate) validationErrors.expiryDate = 'Expiry date is required';
        if (!cvc) validationErrors.cvc = 'CVC is required';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', { cardNumber, cardName, expiryDate, cvc });
        }
    };

    return (
        <div className="credit-card-form">
            <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Total : 12447284378</p>
            <form onSubmit={handleSubmit}>
                <div className='formdiv'>
                    <label>Card Number</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                    </div>
                </div>
                <div className='formdiv'>
                    <label>Card Name</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                        {errors.cardName && <span className="error">{errors.cardName}</span>}
                    </div>
                </div>
                <div className='formdiv'>
                    <label>Expiry Date</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                        {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                    </div>
                </div>
                <div className='formdiv'>
                    <label>CVC</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                        />
                        {errors.cvc && <span className="error">{errors.cvc}</span>}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreditCardForm;
