import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Play, CheckCircle2, ThumbsUp, Smile, AlertTriangle, Award
} from 'lucide-react';
import './Exercicio.css';

export default function Exercicio() {
    const navigate = useNavigate();

    // Controla em qual fase do exercício estamos (0: Preparo, 1: Executando, 2: Feedback, 3: Fim)
    const [fase, setFase] = useState(0);

    const irParaInicio = () => {
        navigate('/dashboard');
    };

    return (
        <div className="exercicio-layout">

            {/* FASE 0: PREPARAÇÃO */}
            {fase === 0 && (
                <div className="exercicio-card fade-in">
                    <button onClick={irParaInicio} className="btn-voltar">
                        <ArrowLeft size={24} /> Voltar
                    </button>

                    <h1 className="exercicio-titulo">Alongamento Matinal Suave</h1>
                    <p className="exercicio-sub">Duração: ~10 minutos</p>

                    <div className="preparo-box">
                        <h3>Antes de começar:</h3>
                        <ul>
                            <li>Pegue uma cadeira firme para apoiar.</li>
                            <li>Deixe um copo de água por perto.</li>
                            <li>Vista roupas confortáveis.</li>
                        </ul>
                    </div>

                    <button onClick={() => setFase(1)} className="btn-gigante btn-verde">
                        <Play size={28} /> Estou Pronto! Começar
                    </button>
                </div>
            )}

            {/* FASE 1: EXECUÇÃO (O "Vídeo") */}
            {fase === 1 && (
                <div className="exercicio-card fade-in">
                    <h2 className="exercicio-titulo">Esticando os braços</h2>
                    <p className="exercicio-sub">Série 1 de 3 • 10 Repetições</p>

                    {/* Espaço onde ficaria o vídeo do instrutor */}
                    <div className="video-placeholder">
                        <span className="emoji-grande">🧘‍♀️</span>
                        <p>Simulação do Vídeo rolando...</p>
                    </div>

                    <div className="controles-exercicio">
                        <button onClick={() => setFase(2)} className="btn-gigante btn-verde">
                            <CheckCircle2 size={28} /> Concluir Exercício
                        </button>
                    </div>
                </div>
            )}

            {/* FASE 2: FEEDBACK DE ESFORÇO */}
            {fase === 2 && (
                <div className="exercicio-card fade-in text-center">
                    <h2 className="exercicio-titulo">Muito bem!</h2>
                    <p className="pergunta-feedback">Como você se sentiu fazendo este exercício?</p>

                    <div className="feedback-botoes">
                        <button onClick={() => setFase(3)} className="btn-feedback btn-facil">
                            <Smile size={32} />
                            <span>Foi Fácil</span>
                        </button>

                        <button onClick={() => setFase(3)} className="btn-feedback btn-bom">
                            <ThumbsUp size={32} />
                            <span>Cansou um pouco, mas foi bom</span>
                        </button>

                        <button onClick={() => setFase(3)} className="btn-feedback btn-dificil">
                            <AlertTriangle size={32} />
                            <span>Muito difícil / Senti dor</span>
                        </button>
                    </div>
                </div>
            )}

            {/* FASE 3: RECOMPENSA E FIM */}
            {fase === 3 && (
                <div className="exercicio-card fade-in text-center">
                    <div className="icone-sucesso">
                        <Award size={64} color="#059669" />
                    </div>
                    <h1 className="exercicio-titulo">Parabéns, Natan!</h1>
                    <p className="exercicio-sub" style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
                        Você completou sua atividade de hoje. Continuar se movimentando é o segredo para uma vida saudável!
                    </p>

                    <div className="stats-recompensa">
                        <p>🔥 <strong>4 Dias Seguidos!</strong></p>
                    </div>

                    <button onClick={irParaInicio} className="btn-gigante btn-verde" style={{ marginTop: '2rem' }}>
                        Voltar ao Início
                    </button>
                </div>
            )}

        </div>
    );
}