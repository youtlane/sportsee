import axios from 'axios';

const API_URL = 'http://localhost:3000/user/';

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getUserActivity = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}${userId}/activity`);
        const activityData = response.data;
        console.log('Données d\'activité quotidienne :', activityData);
        return activityData;
    } catch (error) {
        throw error;
    }
};


export const getUserAverageSessions = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}${userId}/average-sessions`);
        const averageSessionsData = response.data;
        console.log('Durée moyenne des sessions :', averageSessionsData);
        return averageSessionsData;
    } catch (error) {
        throw error;
    }
};



//User Story #8 - Complétion objectif didnt understand this one 



export const getUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}${userId}/performance`);
        const performanceData = response.data;
        console.log('Informations sur les types d\'activité :', performanceData);
        return performanceData;
    } catch (error) {
        throw error;
    }
};