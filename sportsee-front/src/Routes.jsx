import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';

export default function AppRouter() {
    return (
        <Routes>
                <Route exact path="/user/:userId" element={<Dashboard />} />
                <Route path="*" element={<Error />} /> 
        </Routes>
    );
}