import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';



export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Navigate to="/user/id" />} />
            <Route exact path="/user/:id" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

