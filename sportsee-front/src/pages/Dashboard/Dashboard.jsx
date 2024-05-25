import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../service/Api';

const Dashboard = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData(userId);
                setUser(data.data); // Accédez à la clé "data" dans la réponse
            } catch (err) {
                setError(err);
            }
        };

        fetchUserData();
    }, [userId]);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    }

    if (!user) {
        return <div>Chargement...</div>;
    }

    return (
        <main className="dashboard-container">
            <h1>Bonjour
                <span>
                    {user.userInfos.firstName} {user.userInfos.lastName}
                </span>
            </h1>
        </main>
    );
};

export default Dashboard;