import React from 'react';
import { User, Settings, Bell, Award } from 'lucide-react';
import './Perfil.css';

export default function Perfil() {
    return (
        <div className="perfil-container fade-in">
            <header className="perfil-header">
                <h1 className="perfil-title">Meu Perfil</h1>
                <p className="perfil-subtitle">Veja suas informações e ajuste suas preferências.</p>
            </header>

            <div className="perfil-grid">
                {/* Cartão de Informações Pessoais */}
                <section className="perfil-card">
                    <div className="avatar-circulo">
                        <User size={56} color="#059669" />
                    </div>
                    <h2 className="usuario-nome">Natan</h2>
                    <p className="usuario-detalhe">natan@exemplo.com</p>
                    <p className="usuario-detalhe">Membro há 3 meses</p>

                    <button className="btn-editar">Editar Informações</button>
                </section>

                {/* Cartão de Configurações */}
                <section className="perfil-card">
                    <h3 className="sessao-titulo">Configurações do Aplicativo</h3>
                    <ul className="config-lista">
                        <li className="config-item">
                            <div className="config-info">
                                <Bell size={24} color="#4b5563" />
                                <span>Lembretes de Atividade</span>
                            </div>
                            <input type="checkbox" className="toggle-switch" defaultChecked />
                        </li>
                        <li className="config-item">
                            <div className="config-info">
                                <Settings size={24} color="#4b5563" />
                                <span>Letras Grandes</span>
                            </div>
                            <input type="checkbox" className="toggle-switch" defaultChecked />
                        </li>
                        <li className="config-item">
                            <div className="config-info">
                                <Award size={24} color="#4b5563" />
                                <span>Mostrar minhas conquistas</span>
                            </div>
                            <input type="checkbox" className="toggle-switch" defaultChecked />
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}