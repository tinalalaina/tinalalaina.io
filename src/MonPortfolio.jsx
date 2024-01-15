import React from 'react';

const MonPortfolio = () => {
    return (
        <div>
            {/* ... autres contenus ... */}
            
            {/* Bouton pour voir le CV au format PDF */}
            <a href="/mon-cv.pdf" target="_blank" rel="noopener noreferrer">
                <button>Voir le CV en PDF</button>
            </a>
        </div>
    );
}

export default MonPortfolio;