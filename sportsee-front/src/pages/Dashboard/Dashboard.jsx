// src/pages/dashboard/Dashboard.js
import React from 'react';
import User from '../../components/User/User';
import DailyActivities from '../../components/DailyActivities/DailyActivities';

const Dashboard = () => {
    return (
        <main className="dashboard-container">
            <User>
                {(userId, userName) => (
                    <>
                        <h1>Bonjour <span className="dashboard-container_name">{userName}</span></h1>
                        <p className="dashboard-container_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        <DailyActivities userId={userId} />
                    </>
                )}
            </User>
        </main>
    );
};

export default Dashboard;
