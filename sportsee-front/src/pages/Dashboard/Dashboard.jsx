
import React from 'react';
import User from '../../components/User/User';


export default function Dashboard() {
    return (
        <main className="dashboard-container">
            <h1> Bonjour
                <User/>
            </h1>
            <p className="dashboard-container_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </main>
    );
}

