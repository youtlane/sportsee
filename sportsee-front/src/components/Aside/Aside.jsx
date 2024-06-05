
import React from 'react';
import Nav from '../Nav/Nav';
import yogaIcon from '../../assets/icons/yoga.svg'; 
import natationIcon  from '../../assets/icons/natation.svg'; 
import bicycleIcon  from '../../assets/icons/bicycle.svg'; 
import muscuIcon  from '../../assets/icons/musculation.svg'; 

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
            <div className="aside-text">Copiryght, SportSee 2020</div>
        </aside>
    );
};

export default Aside;
