import React from 'react';
import './BidsDetail.css'; // CSS датотека

function BidsDetail({ bids }) { // Користење на пропси
    // Сортирај ги понудите според ID (или timestamp ако постои)
    const sortedBids = [...bids].sort((a, b) => b.id - a.id);

    return (
        <div className="bids-container">
            <h2 className="bids-title">Понуди</h2>
            {sortedBids.length > 0 ? (
                <ul className="bids-list">
                    {sortedBids.map(bid => (
                        <li key={bid.id}>
                            <strong>Износ:</strong> {bid.amount} MKD
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-bids">Во моментов нема понуди за оваа аукција.</p>
            )}
        </div>
    );
}

export default BidsDetail;
