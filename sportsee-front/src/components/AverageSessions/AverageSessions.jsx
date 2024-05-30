import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dayAbbreviations = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const AverageSessions = ({ averageSessionsData }) => {
    // Fonction de formatage des jours de la semaine
    const dayFormatter = (tick) => {
        return dayAbbreviations[tick - 1];
    };

    // Personnalisation du contenu du tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${data.sessionLength} min`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="average-sessions-container">
            <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={averageSessionsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickFormatter={dayFormatter} domain={[1, 7]} />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="white" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessions;
