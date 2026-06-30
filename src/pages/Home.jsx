import "../styles/Home.css"; // Certifique-se de importar o arquivo CSS
import logoImg from "../assets/logo.jpeg";
import fundoImg from "../assets/fundo.jpeg";

export default function Home() {
  return (
    <div className="home-container">

      {/* SEÇÃO HERO COM IMAGEM DE FUNDO COMO TAG HTML REAL */}
      <section className="home-hero">
        {/* Nova tag de imagem controlada pelo CSS */}
        <img src={fundoImg} alt="Fundo Essência Viva" className="hero-bg-img" />

        {/* Camada escurecedora / suavizadora para dar leitura ao texto */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <img src={logoImg} alt="Logo Essência Viva Oficial" className="hero-logo-img" />
          </div>
          <div className="hero-badge">Estética Oncológica Humanizada</div>
          <h2>Essência Viva</h2>
          <p className="hero-subtitulo">Bem-estar oncológico e reabilitação integrativa</p>
        </div>
      </section>

      {/* SEÇÃO MISSÃO, VISÃO, VALORES */}
      <section className="home-mvs">
        <div className="mvs-card">
          <h3>Nossa Missão</h3>
          <p>Promover bem-estar e autoestima a pacientes oncológicos através de cuidados estéticos humanizados.</p>
        </div>
        <div className="mvs-card">
          <h3>Nossa Visão</h3>
          <p>Ser referência nacional em suporte e estética oncológica de forma integrada e humanizada.</p>
        </div>
        <div className="mvs-card">
          <h3>Nossos Valores</h3>
          <p>Empatia, ética, segurança rigorosa, humanização profunda e respeito absoluto à individualidade.</p>
        </div>
      </section>

      {/* SEÇÃO SOBRE A ESSÊNCIA VIVA */}
      <section className="home-sobre">
        <div className="sobre-grid">

          <div className="sobre-bloco destaque">
            <h3>Sobre a Essência Viva</h3>
            <p><strong>Estamos focados em:</strong></p>
            <ul className="foco-lista">
              <li>Recuperação da autoestima</li>
              <li>Bem-estar físico e emotional</li>
              <li>Humanização do cuidado</li>
              <li>Atendimento individualizado e sensível ao contexto oncológico</li>
            </ul>
          </div>

          <div className="sobre-bloco destaque">
            <h3>Sobre nosso Nome</h3>
            <p>
              O Nome <strong>“Essência Viva”</strong> representa a ideia de que, 
              independentemente das mudanças físicas, emocionais ou estéticas vividas durante o 
              processo de adoecimento, a essência e a força de cada pessoa continuam vivas e intocadas.
            </p>
          </div>
          
        </div>
      </section>

      {/* SEÇÃO CONTEXTO CIENTÍFICO / RELAÇÃO COM A CURA */}
      <section className="home-contexto">
        <div className="contexto-wrapper">
          <h3>O Cuidado Além do Tratamento</h3>
          <p>
            Embora os cuidados estéticos não atuem diretamente na cura do câncer, eles 
            contribuem diretamente para a reabilitação física e emocional do paciente oncológico. A melhora da 
            autoestima e do bem-estar psicológico favorecem a adesão ao 
            tratamento, reduzem sintomas emocionais como ansiedade e depressão, fortalecendo o 
            enfrentamento da doença e colaborando de forma integrativa para melhores resultados terapêuticos.
          </p>
        </div>
      </section>

      {/* SEÇÃO NOSSO DIFERENCIAL */}
      <section className="home-diferenciais">
        <h3>Nosso Diferencial</h3>
        <div className="diferenciais-grid">
          <div className="diferencial-item">
            <h4>Equipe Multiprofissional</h4>
            <p>Atendimento feito por profissionais altamente especializados em oncologia e estética. Discussões de caso semanais incluindo enfermeiros para condutas personalizadas.</p>
          </div>
          <div className="diferencial-item">
            <h4>Ambiente Seguro</h4>
            <p>Protocolos de biossegurança estritos validados para pacientes imunossuprimidos, inseridos em um ambiente acolhedor, calmo e totalmente não hospitalar.</p>
          </div>
          <div className="diferencial-item">
            <h4>Rede de Parcerias</h4>
            <p>Colaboração activa com hospitais, clínicas oncológicas, ONGs de apoio e salões de beleza, permitindo o acompanhamento seguro durante todas as fases do tratamento.</p>
          </div>
        </div>
      </section>

    </div>
  );
}