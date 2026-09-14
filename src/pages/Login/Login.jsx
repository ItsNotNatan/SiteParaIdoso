import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Mail, Lock, LogIn } from 'lucide-react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    // Hook do React Router para redirecionar o utilizador após o login
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setCarregando(true);

        // Simulação de chamada à API de autenticação
        setTimeout(() => {
            setCarregando(false);
            // Após o login com sucesso, envia para o dashboard ou formulário
            navigate('/formulario');
        }, 1500);
    };

    return (
        <div className="login-container">
            <div className="login-card fade-in">

                <div className="login-header">
                    <div className="logo-container justify-center">
                        <Truck className="text-primary" size={40} />
                    </div>
                    <h1 className="login-title">
                        Nexus<span className="text-primary">Log</span>
                    </h1>
                    <p className="login-subtitle">Acesso ao sistema de gestão</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label>E-mail</label>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="seu@email.com"
                                className="input-control"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Palavra-passe</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="input-control"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={carregando}
                    >
                        {carregando ? 'A entrar...' : (
                            <>
                                <LogIn size={18} /> Entrar
                            </>
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
}