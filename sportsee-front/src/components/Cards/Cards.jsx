import React from 'react';


const Cards = ({ iconSrc, title, text }) => {
    return (
        <div className="container-cards">
            <img src={iconSrc} alt="icon" className="container-cards_icon" />
            <div className="container-cards_text">
                <h3 className="text-up">{title}</h3>
                <p className="text-down">{text}</p>
            </div>
        </div>
    );
};

export default Cards;
