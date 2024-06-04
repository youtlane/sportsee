
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const CustomTooltip = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}kg`}</p>
				<p className="desc">{`${payload[1].value}Kcal`}</p>
			</div>
		)
	}

	return null
}

// Je crée une fonction qui va formatter les dates en fonction du format 
export const monthTickFormatter = (tick) => {
	const date = new Date(tick)
	return date.getDate()
}


function DailyActivities({ userId, activityData }) {
    return (
        <div className="chart-container">
            <h2 className="chart-container_title">Activités quotidiennes</h2>
            <ResponsiveContainer width="100%" height={270} className={'activityChart'}>
                <BarChart
                    width={500}
                    height={300}
                    data={activityData}
                    margin={{
                        top: 0,
                        right: 10,
                        left: 40,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#dedede" vertical={false} />
                    <XAxis dataKey="day" tickFormatter={monthTickFormatter} stroke="#9B9EAC" tickLine={false} dy={10} />
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        hide={true}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#9B9EAC"
                        domain={['dataMin - 1', 'dataMax']}
                        allowDecimals={false}
                        axisLine={false}
                        tickLine={false}
                        dx={15}
                        dy={-4}
                    />
                    <Tooltip allowEscapeViewBox={{ x: true, y: true }} content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        height={70}
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{
                            top: '-9%',
                            right: '2rem',
                            lineHeight: '40px',
                        }}
                        formatter={(value) => <span style={{ color: '#74798C' }}>{value}</span>}
                    />
                    <Bar
                        yAxisId="right"
                        name="Poids (kg)"
                        dataKey="kilogram"
                        fill="#282d30" //blue color
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar
                        yAxisId="left"
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        fill="#eb0000" //red color
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DailyActivities;

