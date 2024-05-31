import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle, YAxis } from 'recharts';

const AverageSessions = ({ averageSessionsData }) => {
    const dayFormatter = (tick) => {
        const dayAbbreviations = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return dayAbbreviations[tick - 1];
    };

    // Custom tooltip content
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p className="label-time">{`${data.sessionLength} min`}</p>
                </div>
            );
        }
        return null;
    };

    // Custom cursor
    const CustomizedCursor = ({ points }) => {
        return <Rectangle fill="#000000" opacity={0.1} x={points[0].x} width={258} height={263} />;
    };

    return (
        <div className="average-sessions-container">
            <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={averageSessionsData}
                    margin={{ top: 50, right: 0, left: 0, bottom: 29 }} // Adjusted bottom margin
                >
                    <defs>
                        <linearGradient
                            id="paint0_linear_2_122"
                            x1="309.906"
                            y1="-1.97779"
                            x2="-47.7754"
                            y2="-1.97779"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.810441" stopColor="white" stopOpacity="0.403191" />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        stroke="#ffffff81"
                        padding={{ left: 5, right: 5 }}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'white' }}
                        tickFormatter={dayFormatter}
                        interval={0}
                    />
                    <YAxis
                        hide
                        domain={['dataMin - 19', 'dataMax']} // Adjust the domain to shift the curve up
                    />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#paint0_linear_2_122)"
                        strokeWidth={2}
                        activeDot={{ stroke: '#ffffff33', strokeWidth: 12, r: 5 }}
                        dot={false}
                        animationEasing="ease-in-out"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSessions;
