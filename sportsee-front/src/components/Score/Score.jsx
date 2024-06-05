import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';


const Score = ({ score }) => {
    const data = [
        {
            name: 'Score',
            value: score * 100,
            fill: '#FF0000'
        }
    ];
    const endAngle = score * 360;

    return (
        <div className="score-container">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"
                    outerRadius="80%"
                    barSize={20}
                    data={data}
                    startAngle={90}
                    endAngle={90 + endAngle}
                >
                    <RadialBar
                        minAngle={15}
                        background
                        dataKey="value"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="inner-circle" />
            <div className="text-center">
                <p className="percentage">{`${(score * 100)}%`}</p>
                <p className="goal">de votre objectif</p>
            </div>
        </div>
    );
};

export default Score;
