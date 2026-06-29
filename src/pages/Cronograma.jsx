import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import "./Cronograma.css"; // Certifique-se de importar o arquivo CSS

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
        </section>
      </main>

    </div>
  );
}