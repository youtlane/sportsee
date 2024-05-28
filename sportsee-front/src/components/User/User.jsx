// src/components/User/User.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../service/DataService'; // Assurez-vous que le chemin d'accès est correct

const User = ({ children }) => { // Utilisation de la prop children
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData(userId);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userId]);

    return (
        <div>
            {typeof children === 'function' && user && children(user.id, user.userInfos.firstName)} {/* Vérifiez si children est une fonction */}
        </div>
    );
};

export default User;








