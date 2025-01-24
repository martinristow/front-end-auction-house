import React, { useState } from 'react';
import axios from 'axios';
import './CreateBid.css';

function CreateBid({ auctionId, updateBids }) {
    const [amount, setAmount] = useState('');  // Bid amount state
    const [message, setMessage] = useState(null);  // Success message
    const [error, setError] = useState(null);  // Error message
    const [isLoading, setIsLoading] = useState(false);  // Loading state

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate the amount
        if (isNaN(amount) || parseFloat(amount) <= 0) {
            setError('Bid amount must be a valid number greater than 0');
            setMessage(null);
            return;
        }

        const token = localStorage.getItem('token');  // Get JWT token

        setIsLoading(true);  // Show loading state
        setError(null);

        try {
            const response = await axios.post(
                'http://localhost:8000/bids',  // API endpoint
                { amount: parseFloat(amount), auction_id: auctionId },  // Data to send
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Handle success
            setMessage('Your bid has been successfully created!');
            setError(null);
            setAmount('');  // Clear the form

            // Call the passed function to update the bids list in the parent component
            updateBids(response.data);

        } catch (error) {
            // Handle error
            if (error.response && error.response.data && error.response.data.detail) {
                setError(error.response.data.detail);
            } else {
                setError('An error occurred. Please try again.');
            }
            setMessage(null);  // Clear success message
        } finally {
            setIsLoading(false);  // Hide loading state
        }
    };

    return (
        <div className="create-bid-container">
            <h2>Create a Bid</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Bid Amount (MKD):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        min="1"
                    />
                </div>
                <button type="submit" className="btn-primary" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Bid'}
                </button>
            </form>

            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{String(error)}</p>}
        </div>
    );
}

export default CreateBid;
