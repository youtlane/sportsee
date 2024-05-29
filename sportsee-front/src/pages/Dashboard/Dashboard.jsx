// src/pages/dashboard/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DailyActivities from '../../components/DailyActivities/DailyActivities';
import { getUserData, getUserActivity } from '../../service/DataService';

const Dashboard = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activityData, setActivityData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData(userId);
                setUser(data);
            } catch (err) {
                setError(err);
            }
        };

        const fetchActivityData = async () => {
            try {
                const data = await getUserActivity(userId);
                setActivityData(data);
            } catch (err) {
                setError(err);
            }
        };

        fetchUserData();
        fetchActivityData();
    }, [userId]);

    useEffect(() => {
        if (error) {
            navigate('/error');
        }
    }, [error, navigate]);

    if (!user) {
        return <div>Chargement...</div>;
    }

    return (
        <main className="dashboard-container">
            <h1>
                Bonjour <span style={{ color: 'red' }}>{user.userInfos.firstName}</span>
            </h1>
            <p className="dashboard-container_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <DailyActivities userId={userId} activityData={activityData} />
        </main>
    );
};

export default Dashboard;

