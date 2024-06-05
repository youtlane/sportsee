import React from 'react';

const Cards = ({ iconSrc, title, text }) => {
    return (
        <div style={styles.container}>
            <img src={iconSrc} alt="icon" style={styles.icon} />
            <div style={styles.textContainer}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.text}>{text}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FBFBFB',
        width: '258px',
        height: '124px',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
        gap: '24px',
        justifyContent: 'center'
    },
    icon: {
        width: '50px',
        height: '50px',
        marginRight: '15px'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: '20px',
        margin: '0',
        color: '#282D30', 
        fontWeight: '700'
    },
    text: {
        fontSize: '14px',
        margin: '0',
        color: '#74798C'
    }
};

export default Cards;
