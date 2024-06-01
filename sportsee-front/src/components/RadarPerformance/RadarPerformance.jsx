import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const RadarPerformance = ({ data }) => {
    // Vérifier si les données sont disponibles
    if (!data || data.length === 0) {
        return <div>Aucune donnée de performance disponible.</div>;
    }

    // Formater les données pour le graphique radar
    const radarData = data.map(item => ({
        kind: item.kind,
        value: item.value,
    }));

    // Créer un objet pour traduire les valeurs de kind en français
    const kindLabels = {
        1: 'Cardio',
        2: 'Énergie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
    };

    return (
        <div className="radar-container">
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 12 }} tickFormatter={(value) => kindLabels[value]} />
                <PolarRadiusAxis />
                <Radar name="Performance" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default RadarPerformance;
