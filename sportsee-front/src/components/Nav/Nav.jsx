import React from 'react';

const Nav = ({ items, isHeader }) => {
    return (
        <nav className={isHeader ? "nav-header" : "nav-aside"}>
            {items.map((item, index) => (
                <a key={index} className={isHeader ? "nav-header_item" : "nav-aside_item"} href={item.link}>
                    {isHeader ? item.text : <img src={item.icon} alt={item.alt} className="nav-icon" />}
                </a>
            ))}
        </nav>
    );
};

export default Nav;
