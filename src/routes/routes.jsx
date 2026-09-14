// src/routes/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Importação dos nossos componentes estruturais e páginas
import Layout from '../components/Layout/Layout';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Formulario from '../pages/Formulario/Formulario'; // Mantemos caso queira usar depois

// Criação do mapa de navegação do site
export const rotas = createBrowserRouter([
    {
        // Rota Raiz: Ao entrar no site ('/'), redireciona imediatamente para o Login
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        // Rota de Login Isolada
        path: '/login',
        element: <Login />
    },
    {
        // Rotas Internas: Agrupadas pelo Layout (com a Navbar)
        element: <Layout />,
        children: [
            {
                // Se a pessoa tentar acessar a raiz do Layout, joga para o dashboard
                index: true,
                element: <Navigate to="/dashboard" replace />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                // Deixei a rota do formulário ativa caso você queira adaptar ela para outra coisa no futuro
                path: '/formulario',
                element: <Formulario />
            }
        ]
    }
]);