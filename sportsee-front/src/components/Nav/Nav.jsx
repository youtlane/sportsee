import React from 'react';


const Nav = ({ items, logo, isHeader }) => {
    return (
        <nav className={isHeader ? "nav-header" : "nav-aside"}>
            {logo && isHeader && <img src={logo} alt="Logo" className="nav-logo" />}
            <ul className={isHeader ? "nav-header_list" : "nav-aside_list"}>
                {items.map((item, index) => (
                    <a key={index} className="nav-item" href={item.link}>
                        {isHeader ? item.text : <img src={item.icon} alt={item.alt} className="nav-icon" />}
                    </a>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;


