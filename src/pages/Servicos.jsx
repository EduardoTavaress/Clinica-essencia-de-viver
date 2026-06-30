import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import "../styles/Servicos.css"; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../componentes/Footer";

export default function Servicos() {

  const navigate = useNavigate();

  const irParaPacote = (idDoPlano) => {
    // Redireciona para a página de pacotes levando o ID do plano no 'state'
    navigate('/pacotes', { state: { scrollToId: idDoPlano } });
  };

  return (
    <div className="servicos-container">

      {/* CABEÇALHO DA PÁGINA */}
      <section className="servicos-hero">
        <h2>Conheça os nossos serviços</h2>
        <p className="subtitulo-geral">Cuidados especializados com foco na reabilitação, conforto e autoestima.</p>
      </section>

      {/* SEÇÃO 1: SERVIÇOS MULTIPROFISSIONAIS */}
      <section className="secao-multiprofissional">
        <div className="card-multiprofissional">
          <h3>Serviços Multiprofissionais em Saúde</h3>
          <p className="contexto-multiprofissional">Atuação integrada com discussões de casos para condutas totalmente personalizadas:</p>
          <div className="tags-profissoes">
            <span>Enfermagem</span>
            <span>Psicologia</span>
            <span>Fisioterapia</span>
            <span>Terapia Ocupacional</span>
            <span>Educador Físico</span>
            <span>Medicina</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: SERVIÇOS INDIVIDUAIS */}
      <section className="secao-individuais">
        <h2 className="titulo-secao">Atendimentos Individuais</h2>
        <p className="subtitulo-secao-ajuste">Escolha o serviço que melhor atende às suas necessidades:</p>
        
        <div className="grid-servicios-tipos">

          {/* ESTÉTICA REPARADORA */}
          <div className="tipo-servico-card">
            <div>
              <div className="card-header-tipo reparadora">
                <h3>Estética Reparadora</h3>
              </div>
              <ul className="lista-servicos-itens">
                <li><strong>Tratamento de cicatrizes:</strong> Laserterapia</li>
                <li><strong>Tratamento de cicatrizes:</strong> Microagulhamento</li>
                <li><strong>Pós-mastectomia:</strong> Drenagem linfática especializada</li>
                <li><strong>Pele sensibilizada:</strong> Limpeza suave + hidratação profunda</li>
                <li><strong>Queda de cabelo:</strong> Crioterapia capilar direcionada</li>
              </ul>
            </div>

            <div className="card-footer-botao">
              <button 
                className="btn-escolher-plano" 
                onClick={() => irParaPacote('pacote-individuais')}
              >
                Adquirir Serviço
              </button>            
            </div>
          </div>

          {/* ESTÉTICA INTEGRATIVA */}
          <div className="tipo-servico-card">
            <div>
              <div className="card-header-tipo integrativa">
                <h3>Estética Integrativa</h3>
              </div>
              <ul className="lista-servicos-itens">
                <li><strong>Aromaterapia:</strong> Uso clínico de óleos essenciais</li>
                <li><strong>Aromaterapia:</strong> Escalda-pés terapêutico</li>
                <li><strong>Auriculoterapia:</strong> Alívio de pontos de tensão e ansiedade</li>
                <li><strong>Massagem relaxante:</strong> Toques suaves e humanizados</li>
                <li><strong>Massagem com pedras quentes:</strong> Termoterapia para relaxamento</li>
              </ul>
            </div>

            <div className="card-footer-botao">
              <button 
                className="btn-escolher-plano" 
                onClick={() => irParaPacote('pacote-individuais')}
              >
                Adquirir Serviço
              </button>
            </div>
          </div>

        </div>

        {/* OFICINAS DE AUTONOMIA (DESTAQUE SEM CUSTO) */}
        <div className="oficinas-container-destaque">
          <div className="oficinas-header">
            <h3>Oficinas de Autonomia</h3>
            <span className="badge-gratis">Iniciativa sem custo / Participação opcional</span>
          </div>
          <div className="oficinas-grid">
            <div className="oficina-item">Automaquiagem para pacientes oncológicos</div>
            <div className="oficina-item">Design de sobrancelhas e reconstrução com henna</div>
            <div className="oficina-item">Orientações práticas de autocuidado diário</div>
            <div className="oficina-item">Grupos terapêuticos (Aberto ao público externo)</div>
            <div className="oficina-item">Consultoria de imagem: uso de lenços, laços e perucas</div>
            <div className="oficina-item">Orientações para o crescimento saudável do cabelo pós-tratamento</div>
          </div>

         
        </div>
      </section>

      {/* SEÇÃO 3: PACOTES DE TRATAMENTO */}
      <section className="secao-pacotes">
        <h2 className="titulo-secao">Nossos Pacotes de Cuidado Integrativo</h2>
        <p className="subtitulo-secao">Planos estruturados para acompanhamento contínuo e evolução do bem-estar.</p>

        <div className="grid-pacotes">
          {/* PACOTE ESSENCIAL */}
          <div className="pacote-card">
            <div>
              <div className="pacote-badge">Foco Inicial</div>
              <h3>Pacote Essencial</h3>
              <p className="pacote-desc"><strong>Descrição:</strong> Acolhimento inicial, conforto físico e primeiros cuidados com a autoestima.</p>
              <p className="pacote-indicado"><strong>Indicado para:</strong> Pessoas em tratamento oncológico, em pós-operatório recente ou início de cuidados estéticos integrativos.</p>
              <div className="pacote-cronograma">
                <h4>Cronogramas Disponíveis:</h4>
                <ul>
                  <li><strong>1 Mês:</strong> 1 Drenagem + 1 Cuidado com Pele Sensibilizada + 1 Terapia Integrativa + 1 Consulta Multiprofissional.</li>
                  <li><strong>3 Meses:</strong> 3 Drenagens + 3 Cuidados com Pele Sensibilizada + 3 Terapias Integrativas + 2 Consultas Multiprofissionais.</li>
                  <li><strong>6 Meses:</strong> 6 Drenagens + 6 Cuidados com Pele Sensibilizada + 6 Terapias Integrativas + 3 Consultas Multiprofissionais.</li>
                  <li><strong>12 Meses:</strong> 12 Drenagens + 12 Cuidados com Pele Sensibilizada + 12 Terapias Integrativas + 6 Consultas Multiprofissionais.</li>
                </ul>
              </div>
            </div>
            <div className="pacote-footer-wrapper">
              <button 
                className="btn-escolher-pacote"
                onClick={() => irParaPacote('pacote-essencial')}
              >
                Escolher Plano
              </button>
            </div>
          </div>

          {/* PACOTE BEM-ESTAR */}
          <div className="pacote-card destaque-pacote">
            <div>
              <div className="pacote-badge premium">Mais Procurado</div>
              <h3>Pacote Bem-estar</h3>
              <p className="pacote-desc"><strong>Descrição:</strong> Recuperação da autoestima, bem-estar físico e equilíbrio emocional.</p>
              <p className="pacote-indicado"><strong>Indicado para:</strong> Fase de adaptação pós-tratamento, mulheres em processo de queda capilar e pacientes pós-mastectomia.</p>
              <div className="pacote-cronograma">
                <h4>Cronogramas Disponíveis:</h4>
                <ul>
                  <li><strong>1 Mês:</strong> 2 Drenagens + 1 Cuidado com Pele Sensibilizada + 1 Massagem + 1 Auriculoterapia + 1 Consulta Multiprofissional.</li>
                  <li><strong>3 Meses:</strong> 6 Drenagens + 3 Cuidados com Pele Sensibilizada + 3 Auriculoterapias + 1 Crioterapia + 3 Consultas Multiprofissionais.</li>
                  <li><strong>6 Meses:</strong> 10 Drenagens + 6 Cuidados com Pele Sensibilizada + 6 Massagens + 6 Auriculoterapias + 2 Crioterapias + 4 Consultas Multiprofissionais.</li>
                  <li><strong>12 Meses:</strong> 20 Drenagens + 12 Cuidados com Pele Sensibilizada + 12 Massagens + 12 Auriculoterapias + 4 Crioterapias + 6 Consultas Multiprofissionais.</li>
                </ul>
              </div>
            </div>
            <div className="pacote-footer-wrapper">
              <button 
                className="btn-escolher-pacote" 
                onClick={() => irParaPacote('pacote-bem-estar')}
              >
                Escolher Plano
              </button>
            </div>
          </div>

          {/* PACOTE RECOMEÇO */}
          <div className="pacote-card">
            <div>
              <div className="pacote-badge">Completo</div>
              <h3>Pacote Recomeço</h3>
              <p className="pacote-desc"><strong>Descrição:</strong> Reabilitação estética integrativa completa e reconstrução profunda da autoestima.</p>
              <p className="pacote-indicado"><strong>Indicado para:</strong> Fase de reconstrução pós-tratamento, necessitando de acompanhamento prolongado e especializado.</p>
              <div className="pacote-cronograma">
                <h4>Cronogramas Disponíveis:</h4>
                <ul>
                  <li><strong>1 Mês:</strong> 1 Procedimento Reparador + 1 Drenagem + 1 Massagem + 1 Cuidado com Pele Sensibilizada + 1 Terapia Integrativa + 1 Consulta Multiprofissional.</li>
                  <li><strong>3 Meses:</strong> 2 Procedimentos Reparadores + 3 Drenagens + 3 Massagens + 3 Cuidados com Pele Sensibilizada + 3 Terapias + 1 Crioterapia + 2 Consultas Multiprofissionais.</li>
                  <li><strong>6 Meses:</strong> 4 Procedimentos Reparadores + 6 Drenagens + 6 Massagens + 6 Cuidados com Pele Sensibilizada + 6 Terapias + 2 Crioterapias + 3 Consultas Multiprofissionais.</li>
                  <li><strong>12 Meses:</strong> 8 Procedimentos Reparadores + 12 Drenagens + 12 Massagens + 12 Cuidados com Pele Sensibilizada + 12 Terapias + 4 Crioterapias + 6 Consultas Multiprofissionais.</li>
                </ul>
              </div>
            </div>
            <div className="pacote-footer-wrapper">
              <button 
                className="btn-escolher-pacote" 
                onClick={() => irParaPacote('pacote-recomeco')}
              >
                Escolher Plano
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}