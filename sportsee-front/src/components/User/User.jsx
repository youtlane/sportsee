import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getUserData } from '../../service/DataService';


const User = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData(userId);
                setUser(data); // Utilisez simplement `data` ici
            } catch (err) {
                setError(err);
            }
        };

        fetchUserData();
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
        <span className="dashboard-container_name">
            {user.userInfos.firstName} 
        </span>
    );
};

export default User;
