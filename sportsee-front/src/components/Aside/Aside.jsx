// src/components/Aside/Aside.jsx
import React from 'react';
import Nav from '../Nav/Nav';
import yogaIcon from '../../assets/icons/yoga.svg'; // Importation de l'icône
import natationIcon  from '../../assets/icons/natation.svg'; // Importation de l'icône
import bicycleIcon  from '../../assets/icons/bicycle.svg'; // Importation de l'icône
import muscuIcon  from '../../assets/icons/musculation.svg'; // Importation de l'icône

const Aside = () => {
    const asideItems = [
        { icon: yogaIcon, alt: 'Icon 1' },
        { icon: natationIcon, alt: 'Icon 2' },
        { icon: bicycleIcon, alt: 'Icon 3' },
        { icon: muscuIcon, alt: 'Icon 4' }
    ];

    return (
        <aside className="aside">
            <Nav items={asideItems} isHeader={false} />
            <span className="aside-text">Copiryght, SportSee 2020</span>
        </aside>
    );
};

export default Aside;
