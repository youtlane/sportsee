import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getUserData } from '../../service/Api';

const User = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
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

    // Redirigez en cas d'erreur ou si l'utilisateur n'est pas trouvé
    useEffect(() => {
        if (error) {
            navigate('/error');
        }
    }, [error, navigate]);

    if (!user) {
        return <div>Chargement...</div>; // Afficher un message de chargement pendant que les données sont récupérées
    }
    return (
        <span className="dashboard-container_name">
            {user.userInfos.firstName} 
        </span>
    );
};

export default User;