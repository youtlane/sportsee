// src/components/Aside/Aside.jsx
import React from 'react';
import Nav from '../Nav/Nav';

const Aside = () => {
    const asideItems = [
        { icon: '/path/to/icon1.png', alt: 'Icon 1' },
        { icon: '/path/to/icon2.png', alt: 'Icon 2' },
        { icon: '/path/to/icon3.png', alt: 'Icon 3' }
    ];

    return (
        <aside className="aside">
            <Nav items={asideItems} isHeader={false} />
        </aside>
    );
};

export default Aside;
