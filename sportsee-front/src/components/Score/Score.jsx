import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const Score = ({ score }) => {
    const data = [
        {
            name: 'Score',
            value: score, // Utiliser la valeur calculée
            fill: '#FF0000' // Utiliser la couleur calculée
        }
    ];
    const endAngle = (score * 100 * 450) / 100;
    return (
        <div
            style={{
                width: '258px',
                height: '263px',
                borderRadius: '5px',
                background: '#FBFBFB',
                boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                border: '2px solid'
            }}
        >
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={180}
                    endAngle={endAngle}
                >
                    <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={false} dataKey="value" />
                </RadialBarChart>
            </ResponsiveContainer>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
                <p style={{ fontSize: '18px', margin: 0, color: '#000' }}>Score</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#000' }}>{`${score * 100}%`}</p>
                <p style={{ fontSize: '16px', margin: 0, color: '#000' }}>de votre objectif</p>
            </div>
        </div>
    );
};

export default Score;
