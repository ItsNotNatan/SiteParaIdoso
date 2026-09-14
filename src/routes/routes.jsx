// src/routes/routes.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Importação dos nossos componentes estruturais e páginas
import Layout from '../components/Layout/Layout';
import Formulario from '../pages/Formulario/Formulario';
import Login from '../pages/Login/Login';

// Criação do mapa de navegação do site
export const rotas = createBrowserRouter([
    {
        // 1. Rota Raiz: Ao entrar no site ('/'), redireciona imediatamente para o Login
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        // 2. Rota de Login Isolada: Fora do Layout para não exibir a Navbar
        path: '/login',
        element: <Login />
    },
    {
        // 3. Rotas Internas: Agrupadas pelo Layout (estas terão a Navbar visível)
        element: <Layout />,
        children: [
            {
                path: '/formulario',
                element: <Formulario />
            },
            {
                path: '/dashboard',
                element: <div><h1>Página de Dashboard em construção...</h1></div>
            }
        ]
    }
]);