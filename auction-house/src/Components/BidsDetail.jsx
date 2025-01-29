import React from 'react';
import './BidsDetail.css'; // CSS датотека

function BidsDetail({ bids }) { // Користење на пропси
    // Сортирај ги понудите според ID (или timestamp ако постои)
    const sortedBids = [...bids].sort((a, b) => b.id - a.id);
    // ... spread operator za da se sozdade nova niza kopija na bids -> sprecuva izmena na originalnata niza.
    // sortiranje na nizata, spored id od najgolem kon najmal, ako b.id - a.id -> ako b.id e pogolem od a.id, togas b ke bide pred a.
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
