import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import "../styles/Cronograma.css";

export default function Cronograma() {
  return (
    <div className="cronograma-page">
      
      <main className="cronograma-main">
        <h2 className="cronograma-principal-titulo">Cronograma de Eventos Semanais</h2>

        {/* CONTAINER DO CALENDÁRIO ESTILO GRID */}
        <div className="calendario-grid">
          
          <div className="calendario-card">
            <div className="calendario-dia-header">
              <h3>Segunda-feira</h3>
              <span>Saúde mental e acolhimento</span>
            </div>
            <ul className="calendario-lista">
              <li>Consultas psicológicas</li>
              <li>Acolhimento de enfermagem</li>
              <li>Grupos terapêuticos</li>
              <li>Oficinas de autoestima</li>
            </ul>
          </div>

          <div className="calendario-card">
            <div className="calendario-dia-header">
              <h3>Terça-feira</h3>
              <span>Atendimento intensivo</span>
            </div>
            <ul className="calendario-lista">
              <li>Psicologia</li>
              <li>Fisioterapia</li>
              <li>Laserterapia</li>
              <li>Massoterapia</li>
              <li>Auriculoterapia</li>
            </ul>
          </div>

          <div className="calendario-card">
            <div className="calendario-dia-header">
              <h3>Quarta-feira</h3>
              <span>Reabilitação</span>
            </div>
            <ul className="calendario-lista">
              <li>Fisioterapia oncológica</li>
              <li>Drenagem linfática</li>
              <li>Terapia ocupacional</li>
              <li>Exercícios supervisionados</li>
            </ul>
          </div>

          <div className="calendario-card">
            <div className="calendario-dia-header">
              <h3>Quinta-feira</h3>
              <span>Estética reparadora</span>
            </div>
            <ul className="calendario-lista">
              <li>Laserterapia</li>
              <li>Microagulhamento</li>
              <li>Tratamento de cicatrizes</li>
              <li>Cuidados com pele sensibilizada</li>
            </ul>
          </div>

          <div className="calendario-card">
            <div className="calendario-dia-header">
              <h3>Sexta-feira</h3>
              <span>Autoestima e imagem</span>
            </div>
            <ul className="calendario-lista">
              <li>Consultoria de imagem</li>
              <li>Orientação sobre lenços e perucas</li>
              <li>Design de sobrancelhas</li>
              <li>Oficinas de autocuidado</li>
            </ul>
          </div>

          <div className="calendario-card">
            <div className="calendario-dia-header">
              <h3>Sábado</h3>
              <span>Estética integrativa</span>
            </div>
            <ul className="calendario-lista">
              <li>Aromaterapia</li>
              <li>Auriculoterapia</li>
              <li>Massoterapia relaxante</li>
              <li>Escalda-pés terapêutico</li>
            </ul>
          </div>

        </div>

        {/* SEÇÃO DO FLUXO MULTIPROFISSIONAL */}
        <section className="fluxo-section">
          <h2 className="fluxo-principal-titulo">Fluxo de Atendimento Multiprofissional</h2>

          <div className="fluxo-container">
            <div className="fluxo-card">
              <h4>1. Acolhimento inicial <small>- privativa ao enfermeiro</small></h4>
              <ul>
                <li>Avaliação clínica e emocional</li>
                <li>Histórico oncológico</li>
                <li>Condição da pele e cicatrizes</li>
                <li>Presença de linfedema</li>
                <li>Queda capilar</li>
                <li>Identificação de necessidades terapêuticas</li>
              </ul>
              <div className="fluxo-footer">Duração média: 60 minutos</div>
            </div>

            <div className="fluxo-card">
              <h4>2. Discussão multiprofissional <small>- em até 48–72 horas</small></h4>
              <ul className="fluxo-equipe-lista">
                <li>Enfermagem</li>
                <li>Psicologia</li>
                <li>Fisioterapia</li>
                <li>Medicina</li>
                <li>Terapia ocupacional</li>
                <li>Educação física</li>
              </ul>
              <div className="fluxo-footer-objetivo">
                <strong>Objetivo:</strong> Definição de metas, intervenções e plano terapêutico individualizado.
              </div>
            </div>

            <div className="fluxo-card">
              <h4>3. Retorno e início do plano</h4>
              <ul>
                <li>Plano terapêutico completo</li>
                <li>Cronograma de atendimento</li>
                <li>Profissionais envolvidos</li>
                <li>Início do acompanhamento</li>
              </ul>
            </div>
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
              Agende sua avaliação!
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}