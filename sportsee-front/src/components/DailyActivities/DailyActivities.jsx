// src/components/DailyActivities/DailyActivities.js
import React, { useEffect, useState } from 'react';
import { getUserActivity } from '../../service/DataService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DailyActivities = ({ userId }) => {
    const [activityData, setActivityData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const data = await getUserActivity(userId); // Récupérer les données d'activité quotidienne pour cet utilisateur
                setActivityData(data);
            } catch (err) {
                setError(err);
            }
        };

        fetchActivityData();
    }, [userId]);

    if (!activityData) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="chart-container">
            <h2 className="chart-container_title">Activités quotidiennes</h2>
            <BarChart
                width={800}
                height={400}
                data={activityData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
                <Bar dataKey="calories" fill="#FF0101" name="Calories brûlées" />
            </BarChart>
        </div>
    );
};

export default DailyActivities;
