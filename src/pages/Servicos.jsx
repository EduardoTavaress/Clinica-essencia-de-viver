import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import "./Servicos.css"; 
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
            <div className="oficina-item">Consultoria de imagem: uso de lenços, laces e perucas</div>
            <div className="oficina-item">Orientações para o crescimento saudável do cabelo pós-tratamento</div>
          </div>

          <div className="oficinas-footer-botao">
            <a 
              href="https://wa.me/5591999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-oficinas"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="wpp-svg-icone"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Clique aqui e agende o seu procedimento!
            </a>
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
                  <li><strong>1 Mês:</strong> 1 Drenagem + 1 Pele Sensibilizada + 1 Terapia Integrativa + 1 Consulta Inicial.</li>
                  <li><strong>3 Meses:</strong> 3 Drenagens + 3 Peles Sensibilizadas + 3 Terapias Integrativas + 2 Consultas.</li>
                  <li><strong>6 Meses:</strong> 6 Drenagens + 6 Peles Sensibilizadas + 6 Terapias Integrativas + 3 Consultas.</li>
                  <li><strong>12 Meses:</strong> 12 Drenagens + 12 Peles Sensibilizadas + 12 Terapias Integrativas + 6 Consultas.</li>
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
                  <li><strong>1 Mês:</strong> 2 Drenagens + 1 Pele Sensibilizada + 1 Massagem + 1 Auriculo + 1 Consulta.</li>
                  <li><strong>3 Meses:</strong> 6 Drenagens + 3 Peles Sensibilizadas + 3 Auriculos + 1 Crioterapia + 3 Consultas.</li>
                  <li><strong>6 Meses:</strong> 10 Drenagens + 6 Peles + 6 Massagens + 6 Auriculos + 2 Crioterapias + 4 Consultas.</li>
                  <li><strong>12 Meses:</strong> 20 Drenagens + 12 Peles + 12 Massagens + 12 Auriculos + 4 Crioterapias + 6 Consultas.</li>
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
                  <li><strong>1 Mês:</strong> 1 Proc. Reparador + 1 Drenagem + 1 Massagem + 1 Pele + 1 Terapia Integrativa + 1 Consulta.</li>
                  <li><strong>3 Meses:</strong> 2 Proc. Reparadores + 3 Drenagens + 3 Massagens + 3 Peles + 3 Terapias + 1 Crioterapia + 2 Consultas.</li>
                  <li><strong>6 Meses:</strong> 4 Proc. Reparadores + 6 Drenagens + 6 Massagens + 6 Peles + 6 Terapias + 2 Crioterapias + 3 Consultas.</li>
                  <li><strong>12 Meses:</strong> 8 Proc. Reparadores + 12 Drenagens + 12 Massagens + 12 Peles + 12 Terapias + 4 Crioterapias + 6 Consultas.</li>
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