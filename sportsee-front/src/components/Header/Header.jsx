import React from 'react';
import Nav from '../Nav/Nav';
import logo from '../../assets/big-logo.svg'


const Header = () => {
    const headerItems = [
        { text: 'Accueil' },
        { text: 'Profil' },
        { text: 'Réglages' },
        { text: 'Communauté' }
    ];
    
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            
            <Nav items={headerItems} isHeader={true} />
        </header>
    );
};
export default Header;
