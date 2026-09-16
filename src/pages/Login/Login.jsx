import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Mail, Lock, LogIn } from 'lucide-react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false);
            navigate('/dashboard');
        }, 1000); // Reduzi o tempo para 1 segundo para ser mais rápido na prototipação
    };

    return (
        <div className="login-container">
            <div className="login-card fade-in">

                <div className="login-header">
                    <div className="logo-container justify-center">
                        <HeartPulse className="text-primary" size={48} strokeWidth={2.5} />
                    </div>
                    <h1 className="login-title">
                        Ativ <span className="text-primary">Idade</span>
                    </h1>
                    <p className="login-subtitle">Bem-vindo(a) ao seu espaço de saúde e movimento!</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label>Qual é o seu E-mail?</label>
                        <div className="input-with-icon">
                            <Mail size={22} className="input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemplo@email.com"
                                className="input-control"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Sua Senha</label>
                        <div className="input-with-icon">
                            <Lock size={22} className="input-icon" />
                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
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
                                <LogIn size={22} /> Entrar no sistema
                            </>
                        )}
                    </button>
                </form>

                <div className="toggle-mode">
                    <p>Ainda não tem uma conta?</p>
                    <button type="button" onClick={() => navigate('/cadastro')} className="btn-toggle">
                        Criar minha conta
                    </button>
                </div>

            </div>
        </div>
    );
}