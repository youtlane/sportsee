import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/DataService';
import DailyActivities from '../../components/DailyActivities/DailyActivities';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import RadarPerformance from '../../components/RadarPerformance/RadarPerformance';
import Score from '../../components/Score/Score';
import Cards from '../../components/Cards/Cards'; 
import { ICONS } from '../../Utiles/IconsCards';
import { LABELS } from '../../Utiles/IconsCards';


const Dashboard = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);
    const [score, setScore] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData(userId);
                setUser(userData);
                const activityData = await getUserActivity(userId);
                setActivityData(activityData);
                const averageSessionsData = await getUserAverageSessions(userId);
                setAverageSessionsData(averageSessionsData);
                const userPerformanceData = await getUserPerformance(userId);
                setUserPerformance(userPerformanceData);
                setScore(userData.todayScore || userData.score);
            } catch (error) {
                setError(error);
                navigate('/error');
            }
        };

        fetchData();
    }, [userId, navigate]);

    if (!user) {
        return <div>Chargement...</div>;
    }

    // Destructuration des données de l'utilisateur
    const { userInfos, keyData } = user;
    const keyDataEntries = Object.entries(keyData);

    return (
        <main className="dashboard-container">
            <div>
                <h1>
                    Bonjour <span className="name">{userInfos.firstName}</span>
                </h1>
                <p className="dashboard-container_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <DailyActivities userId={userId} activityData={activityData} />
                <div className="container-three-charts">
                    <AverageSessions averageSessionsData={averageSessionsData} />
                    <RadarPerformance data={userPerformance} />
                    <Score score={score} />
                </div>
            </div>
            <div className="cards-area">
                {keyDataEntries.map(([key, value]) => (
                    <Cards
                        key={key}
                        iconSrc={ICONS[key]}
                        title={`${value} ${key === 'calorieCount' ? 'kcal' : 'g'}`}
                        text={LABELS[key]}
                    />
                ))}
            </div>
        </main>
    );
};

export default Dashboard;
