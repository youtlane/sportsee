import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserData, getUserActivity, getUserAverageSessions ,getUserPerformance } from '../../service/DataService';
import DailyActivities from '../../components/DailyActivities/DailyActivities';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import RadarPerformance from '../../components/RadarPerformance/RadarPerformance';
import Score from '../../components/Score/Score';



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
        const fetchUserData = async () => {
            try {
                const data = await getUserData(userId);
                setUser(data);
            } catch (err) {
                setError(err);
            }
        };

        const fetchActivityData = async () => {
            try {
                const data = await getUserActivity(userId);
                setActivityData(data);
            } catch (err) {
                setError(err);
            }
        };

        const fetchAverageSessionsData = async () => {
            try {
                const data = await getUserAverageSessions(userId);
                setAverageSessionsData(data);
            } catch (err) {
                setError(err);
            }
        };
        
        const fetchUserPerformanceData = async () => {
            try {
                const data = await getUserPerformance(userId);
                setUserPerformance(data);
            } catch (err) {
                setError(err);
            }
        };

        const fetchScore = async () => {
            try {
                const userData = await getUserData(userId);
                setScore(userData.todayScore || userData.score);
            
            } catch (error) {
                setError(error);
            
            }
        };

        fetchUserData();
        fetchActivityData();
        fetchAverageSessionsData();
        fetchUserPerformanceData();
        fetchScore();

    }, [userId]);

    useEffect(() => {
        if (error) {
            navigate('/error');
        }
    }, [error, navigate]);

    if (!user) {
        return <div>Chargement...</div>;
    }

    return (
        <main className="dashboard-container">
            <h1>
                Bonjour <span style={{ color: 'red' }}>{user.userInfos.firstName}</span>
            </h1>
            <p className="dashboard-container_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <DailyActivities userId={userId} activityData={activityData} />
            <AverageSessions averageSessionsData={averageSessionsData} />
            <RadarPerformance data={userPerformance} />
            <Score score={score} />
            
            


        </main>
    );
};

export default Dashboard;
