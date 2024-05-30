import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageSessions = ({ averageSessionsData }) => {
    return (
        <div className="average-sessions-container">
            <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={averageSessionsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessions;

