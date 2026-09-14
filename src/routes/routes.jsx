// src/routes/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Importação dos nossos componentes estruturais e páginas
import Layout from '../components/Layout/Layout';
import Formulario from '../pages/Formulario/Formulario';
import Login from '../pages/Login/Login';

// Criação do mapa de navegação do site
export const rotas = createBrowserRouter([
    {
        // 1. Rota Principal (Mãe)
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/formulario" replace />
            },
            {
                path: 'formulario',
                element: <Formulario />
            },
            {
                path: 'dashboard',
                element: <div><h1>Página de Dashboard em construção...</h1></div>
            }
        ]
    },
    {
        // 2. Rota de Login Isolada (sem Navbar lateral/superior)
        path: '/login',
        element: <Login />
    }
]);