// src/services/dataService.js
import * as api from './Api';
import * as mockedData from './GetmockData';

const USE_MOCKED_DATA = true; // Définissez ce booléen pour utiliser les données simulées ou l'API

export const getUserData = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getUserData(userId);
    } else {
        return api.getUserData(userId);
    }
};

export const getUserActivity = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getUserActivity(userId);
    } else {
        return api.getUserActivity(userId);
    }
};

export const getUserAverageSessions = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getUserAverageSessions(userId);
    } else {
        return api.getUserAverageSessions(userId);
    }
};

export const getUserPerformance = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getUserPerformance(userId);
    } else {
        return api.getUserPerformance(userId);
    }
};
