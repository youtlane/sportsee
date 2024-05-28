const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../data/data');

export const getUserData = async (userId) => {
    try {
        const user = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

export const getUserActivity = async (userId) => {
    try {
        const userActivity = USER_ACTIVITY.find(activity => activity.userId === parseInt(userId));
        if (!userActivity) {
            throw new Error('User activity not found');
        }
        const activityData = userActivity.sessions;
        console.log('Données d\'activité quotidienne :', activityData);
        return activityData;
    } catch (error) {
        throw error;
    }
};

export const getUserAverageSessions = async (userId) => {
    try {
        const userAverageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId));
        if (!userAverageSessions) {
            throw new Error('User average sessions not found');
        }
        const averageSessionsData = userAverageSessions.sessions;
        console.log('Durée moyenne des sessions :', averageSessionsData);
        return averageSessionsData;
    } catch (error) {
        throw error;
    }
};

export const getUserPerformance = async (userId) => {
    try {
        const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId));
        if (!userPerformance) {
            throw new Error('User performance not found');
        }
        const performanceData = userPerformance.data;
        console.log('Informations sur les types d\'activité :', performanceData);
        return performanceData;
    } catch (error) {
        throw error;
    }
};
