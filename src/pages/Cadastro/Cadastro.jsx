import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HeartPulse, User, Mail, Lock, Phone,
    AlertCircle, Ruler, Activity, ArrowRight, ArrowLeft, CheckCircle2
} from 'lucide-react';
import './Cadastro.css';

export default function Cadastro() {
    const navigate = useNavigate();
    const [etapa, setEtapa] = useState(1);
    const [carregando, setCarregando] = useState(false);

    const [dados, setDados] = useState({
        nome: '', email: '', senha: '', celular: '',
        peso: '', altura: '',
        contatoEmergenciaNome: '', contatoEmergenciaTel: '',
        mobilidade: 'Caminho sem ajuda',
        dores: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados(prev => ({ ...prev, [name]: value }));
    };

    const avancar = () => setEtapa(prev => prev + 1);
    const voltar = () => setEtapa(prev => prev - 1);

    const finalizar = (e) => {
        e.preventDefault();
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="cadastro-container">
            <div className="cadastro-card fade-in">

                <div className="cadastro-header">
                    <HeartPulse className="text-primary mx-auto" size={40} strokeWidth={2.5} />
                    <h1 className="cadastro-title">Crie sua conta</h1>

                    <div className="progress-bar">
                        <div className={`progress-step ${etapa >= 1 ? 'active' : ''}`}>1</div>
                        <div className={`progress-line ${etapa >= 2 ? 'active' : ''}`}></div>
                        <div className={`progress-step ${etapa >= 2 ? 'active' : ''}`}>2</div>
                        <div className={`progress-line ${etapa >= 3 ? 'active' : ''}`}></div>
                        <div className={`progress-step ${etapa >= 3 ? 'active' : ''}`}>3</div>
                    </div>
                    <p className="step-subtitle">
                        {etapa === 1 && 'Passo 1: Seus dados básicos'}
                        {etapa === 2 && 'Passo 2: Medidas e Segurança'}
                        {etapa === 3 && 'Passo 3: Seu Perfil Físico'}
                    </p>
                </div>

                <form onSubmit={etapa === 3 ? finalizar : (e) => { e.preventDefault(); avancar(); }}>

                    {etapa === 1 && (
                        <div className="step-content fade-in">
                            <div className="input-group">
                                <label>Como prefere ser chamado?</label>
                                <div className="input-with-icon">
                                    <User size={22} className="input-icon" />
                                    <input type="text" name="nome" value={dados.nome} onChange={handleChange} placeholder="Seu nome" className="input-control" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Seu E-mail</label>
                                <div className="input-with-icon">
                                    <Mail size={22} className="input-icon" />
                                    <input type="email" name="email" value={dados.email} onChange={handleChange} placeholder="exemplo@email.com" className="input-control" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Seu Celular (WhatsApp)</label>
                                <div className="input-with-icon">
                                    <Phone size={22} className="input-icon" />
                                    <input type="tel" name="celular" value={dados.celular} onChange={handleChange} placeholder="(00) 00000-0000" className="input-control" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Crie uma Senha</label>
                                <div className="input-with-icon">
                                    <Lock size={22} className="input-icon" />
                                    <input type="password" name="senha" value={dados.senha} onChange={handleChange} placeholder="••••••••" className="input-control" />
                                </div>
                            </div>
                        </div>
                    )}

                    {etapa === 2 && (
                        <div className="step-content fade-in">
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Peso (kg)</label>
                                    <div className="input-with-icon">
                                        <Activity size={22} className="input-icon" />
                                        <input type="number" name="peso" value={dados.peso} onChange={handleChange} placeholder="Ex: 70" className="input-control" />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Altura (cm)</label>
                                    <div className="input-with-icon">
                                        <Ruler size={22} className="input-icon" />
                                        <input type="number" name="altura" value={dados.altura} onChange={handleChange} placeholder="Ex: 165" className="input-control" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="section-divider"><AlertCircle size={20} /> Contato de Emergência</h3>
                            <p className="help-text">Alguém de confiança para avisarmos se precisar.</p>

                            <div className="input-group">
                                <label>Nome do Contato</label>
                                <input type="text" name="contatoEmergenciaNome" value={dados.contatoEmergenciaNome} onChange={handleChange} placeholder="Ex: Maria (Filha)" className="input-control no-icon" />
                            </div>
                            <div className="input-group">
                                <label>Telefone do Contato</label>
                                <input type="tel" name="contatoEmergenciaTel" value={dados.contatoEmergenciaTel} onChange={handleChange} placeholder="(00) 00000-0000" className="input-control no-icon" />
                            </div>
                        </div>
                    )}

                    {etapa === 3 && (
                        <div className="step-content fade-in">
                            <div className="input-group">
                                <label>Como é a sua mobilidade atual?</label>
                                <select name="mobilidade" value={dados.mobilidade} onChange={handleChange} className="input-control no-icon">
                                    <option value="Caminho sem ajuda">Caminho bem, sem ajuda</option>
                                    <option value="Uso bengala">Uso bengala ou apoio leve</option>
                                    <option value="Uso andador">Uso andador</option>
                                    <option value="Prefiro exercícios sentados">Prefiro fazer exercícios sentado</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label>Sente dores frequentes? Onde?</label>
                                <textarea
                                    name="dores"
                                    value={dados.dores}
                                    onChange={handleChange}
                                    placeholder="Ex: Dor na lombar, problemas no joelho direito..."
                                    className="input-control no-icon text-area"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>
                    )}

                    <div className="form-actions-footer">
                        {etapa > 1 ? (
                            <button type="button" onClick={voltar} className="btn-secondary">
                                <ArrowLeft size={20} /> Voltar
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {etapa < 3 ? (
                            <button type="submit" className="btn-primary">
                                Próximo <ArrowRight size={20} />
                            </button>
                        ) : (
                            <button type="submit" className="btn-primary btn-success" disabled={carregando}>
                                {carregando ? 'Aguarde...' : <><CheckCircle2 size={20} /> Concluir</>}
                            </button>
                        )}
                    </div>
                </form>

                {etapa === 1 && (
                    <div className="toggle-mode fade-in">
                        <p>Já tem uma conta?</p>
                        <button type="button" onClick={() => navigate('/login')} className="btn-toggle">
                            Entrar na minha conta
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}