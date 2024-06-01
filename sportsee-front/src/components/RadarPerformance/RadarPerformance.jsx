import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const RadarPerformance = ({ data }) => {
    // Vérifier si les données sont disponibles
    if (!data || data.length === 0) {
        return <div className="radar-container">Aucune donnée de performance disponible.</div>;
    }

    // Formater les données pour le graphique radar
    const radarData = data.map(item => ({
        kind: item.kind,
        value: item.value,
    }));

    // Créer un objet pour traduire les valeurs de kind en français
    const kindLabels = {
        1: 'Intensité',
        2: 'Vitesse',
        3: 'force',
        4: 'Endurance',
        5: 'Energie',
        6: 'Cardio',
    };

    return (
        <div className="radar-container" style={{ width: '258px', height: '263px', borderRadius: '5px', background: '#282D30', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RadarChart cx="50%" cy="50%" outerRadius="75%" width={258} height={263} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 12 }} tickFormatter={(value) => kindLabels[value]} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar name="Performance" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default RadarPerformance;
