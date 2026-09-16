import React from 'react';
import { Sun, PlayCircle, Activity, Award, CheckCircle2 } from 'lucide-react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    // Inicializa o hook de navegação
    const navigate = useNavigate();

    return (
        <div className="dashboard-container fade-in">

            {/* Cabeçalho de Boas-vindas */}
            <header className="dash-header">
                <div>
                    <h1 className="dash-title">Olá, Natan! 👋</h1>
                    <p className="dash-subtitle">Que bom ver você. Pronto para o movimento de hoje?</p>
                </div>
            </header>

            {/* Resumo de Progresso */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon-bg">
                        <Award size={28} color="#059669" />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">3</span>
                        <span className="stat-label">Dias seguidos</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-bg">
                        <Activity size={28} color="#059669" />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">45</span>
                        <span className="stat-label">Min. na semana</span>
                    </div>
                </div>
            </div>

            {/* Destaque do Dia */}
            <section className="daily-highlight">
                <div className="daily-content">
                    <div className="daily-badge">
                        <Sun size={18} /> Sugestão de Hoje
                    </div>
                    <h2 className="daily-title">Alongamento Matinal Suave</h2>
                    <p className="daily-desc">10 minutos para soltar as articulações e começar bem o dia. Pode ser feito sentado.</p>

                    {/* AQUI ESTÁ O BOTÃO COM A NAVEGAÇÃO FUNCIONANDO */}
                    <button onClick={() => navigate('/exercicio')} className="btn-start">
                        <PlayCircle size={24} />
                        Começar Exercício
                    </button>
                </div>
                <div className="daily-image">
                    {/* Placeholder para uma imagem acolhedora de idosos se exercitando */}
                    <div className="image-placeholder">🧘‍♀️</div>
                </div>
            </section>

            {/* Categorias / Acesso Rápido */}
            <h3 className="section-title">O que vamos fazer hoje?</h3>
            <div className="categories-grid">
                <button className="category-card">
                    <div className="cat-icon flex-center">🧘‍♂️</div>
                    <span>Alongamento</span>
                </button>

                <button className="category-card">
                    <div className="cat-icon flex-center">🚶</div>
                    <span>Equilíbrio e Caminhada</span>
                </button>

                <button className="category-card">
                    <div className="cat-icon flex-center">💪</div>
                    <span>Fortalecimento Leve</span>
                </button>

                <button className="category-card">
                    <div className="cat-icon flex-center"><CheckCircle2 size={32} color="#059669" /></div>
                    <span>Meus Exercícios Salvos</span>
                </button>
            </div>

        </div>
    );
}