// src/routes/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro'; // <-- IMPORTANTE IMPORTAR AQUI
import Dashboard from '../pages/Dashboard/Dashboard';
import Perfil from '../pages/Perfil/Perfil';

export const rotas = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        // Rota do Cadastro isolada (também sem o Menu superior)
        path: '/cadastro',
        element: <Cadastro />
    },
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'perfil',
                element: <Perfil />
            }
        ]
    }
]);