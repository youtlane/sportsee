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
                border: '2px solid #E0E0E0'
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
                    startAngle={90}
                    endAngle={90 + endAngle}
                >
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="value"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div style={{ position: 'absolute', textAlign: 'center' , border:'2px solid ', width:'90px', display:'flex', alignItems:'center' , flexDirection:'column', gap:'20px'}}>
                
                <p style={{ fontSize: '26px', fontWeight: 'bold', margin: 0, color: '#282D30;' }}>{`${(score * 100)}%`}</p>
                <p style={{ fontSize: '16px', margin: 0, color: '#74798C' }}>de votre objectif</p>
            </div>
        </div>
    );
};

export default Score;
