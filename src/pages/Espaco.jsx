import React, { useState, useRef } from 'react';
import "../styles/PlantaLocal.css"; 
import imagemPlanta from '../assets/planta.jpeg'; 


import imagemAlmoxarifado from '../assets/Almoxarifado.jpeg';
import imagemRecepcao from '../assets/Recepcao-Espera.jpeg';
import imagemSalaColetiva from '../assets/Sala-coletiva.jpeg';
import imagemAtendimentoPsicologico from '../assets/atendimento-psicologico.jpeg';
import imagemEnfermangem from '../assets/enfermagem.jpeg';
import imagemConsultorioMedico from '../assets/Consultorio-medico.jpeg';
import imagemTerapiasIntegrativas from '../assets/terapias-integrativas.jpeg';
import imagemReabilitacao from '../assets/reabilitacao.jpeg';
import imagemEsterilizacao from '../assets/esterilizacao.jpeg';
import imagemCopa from '../assets/copa.jpeg';
import imagemProcedimentos from "../assets/procedimentos-esteticos.png";
import imagemBanheiros from "../assets/banheiros.png";


export default function PlantaLocal() {
  const cardDescricaoRef = useRef(null);

  // 2. ADICIONADO O CAMPO "imagem" EM CADA SALA
  const dadosSalas = {
    recepcao: {
      titulo: "Recepção e Sala de Espera",
      tamanho: "30,00 m²",
      descricao: "Acolhimento inicial, triagem de pacientes e uma área de espera confortável e humanizada.",
      detalhes: "Circulação ampla, acesso principal e banheiros acessíveis integrados.",
      imagem: imagemRecepcao
    },
    coletiva: {
      titulo: "Sala Coletiva (Consultorias e Oficinas)",
      tamanho: "30,00 m²",
      descricao: "Espaço modular voltado para reuniões de grupo, oficinas de saúde, consultorias coletivas e grupos terapêuticos.",
      detalhes: "Equipada com mesas e cadeiras confortáveis para dinâmicas.",
      imagem: imagemSalaColetiva
    },
    procedimentos: {
      titulo: "Sala de Procedimentos Clínicos / Estéticos",
      tamanho: "15,00 m²",
      descricao: "Ambiente preparado para tratamentos avançados de pele, aplicação de laserterapia, microagulhamento e crioterapia.",
      detalhes: "Maca clínica especializada, carrinho auxiliar e cuba para higienização.",
      imagem: imagemProcedimentos
    },
    psicologico: {
      titulo: "Sala de Atendimento Psicológico",
      tamanho: "12,00 m²",
      descricao: "Ambiente reservado e focado na privacidade para atendimentos individuais e suporte/acompanhamento emocional.",
      detalhes: "Poltronas confortáveis para criar uma atmosfera acolhedora e segura.",
      imagem: imagemAtendimentoPsicologico
    },
    enfermagem: {
      titulo: "Sala de Enfermagem",
      tamanho: "12,00 m²",
      descricao: "Espaço voltado para avaliação clínica inicial, aferição de sinais vitais e acompanhamento de rotina dos pacientes.",
      detalhes: "Mesa de atendimento, maca e arquivo para prontuários.",
      imagem: imagemEnfermangem
    },
    medico: {
      titulo: "Consultório Médico",
      tamanho: "12,00 m²",
      descricao: "Consultório dedicado a avaliações médicas aprofundadas, diagnósticos e suporte clínico contínuo.",
      detalhes: "Mesa de orientação e espaço otimizado para exames rápidos.",
      imagem: imagemConsultorioMedico
    },
    terapias: {
      titulo: "Sala de Terapias Integrativas e Massoterapia",
      tamanho: "20,00 m²",
      descricao: "Espaço de relaxamento focado em práticas como acupuntura, auriculoterapia, aromaterapia e massagens terapêuticas.",
      detalhes: "Espaço planejado para duas macas simultâneas de atendimento relaxante.",
      imagem: imagemTerapiasIntegrativas
    },
    reabilitacao: {
      titulo: "Sala de Reabilitação Física",
      tamanho: "25,00 m²",
      descricao: "Espaço dedicado a fisioterapia, exercícios terapêuticos, educação física funcional e terapia ocupacional.",
      detalhes: "Equipado com esteira, espaldar, bola suíça e barras de apoio.",
      imagem: imagemReabilitacao
    },
    almoxarifado: {
      titulo: "Almoxarifado",
      tamanho: "8,00 m²",
      descricao: "Área técnica restrita para o armazenamento seguro e controle de materiais, insumos e estoques da clínica.",
      detalhes: "Prateleiras organizadas e acesso controlado próximo à esterilização.",
      imagem: imagemAlmoxarifado
    },
    esterilizacao: {
      titulo: "Sala de Esterilização",
      tamanho: "8,00 m²",
      descricao: "Ambiente rigorosamente controlado para a lavagem, desinfecção e esterilização de todos os materiais utilizados.",
      detalhes: "Bancadas em aço inox, pia profunda e autoclave.",
      imagem: imagemEsterilizacao
    },
    copa: {
      titulo: "Copa",
      tamanho: "10,00 m²",
      descricao: "Área de apoio interna para a equipe realizar refeições rápidas, pausas e descanso entre os turnos.",
      detalhes: "Mesa de refeições, armários e equipamentos de cozinha essenciais.",
      imagem: imagemCopa
    },
    banheiros: {
      titulo: "Banheiros Acessíveis (Feminino e Masculino)",
      tamanho: "6,00 m² cada",
      descricao: "Sanitários divididos por gênero, projetados em total conformidade com as normas de acessibilidade.",
      detalhes: "Barras de apoio, portas amplas de 90cm e espaço para manobra de cadeiras de rodas.",
      imagem: imagemBanheiros
    }
  };

  const [salaAtiva, setSalaAtiva] = useState('recepcao');

  const selecionarSala = (chaveSala) => {
    setSalaAtiva(chaveSala);

    if (window.innerWidth <= 950 && cardDescricaoRef.current) {
      cardDescricaoRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="planta-secao">

      <h2>Conheça Nossa Estrutura Integrativa</h2>
      <p className="subtitulo">Explore a distribuição dos nossos 608 m² clicando nos setores abaixo.</p>

      <div className="planta-flex-container">
        
        {/* ESQUERDA: Mapa e Lista de Botões */}
        <div className="planta-visual">
          <div className="mapa-container">
            <img src={imagemPlanta} alt="Planta Baixa Clínica Integrativa" className="imagem-planta-base" />
          </div>

          <div className="botoes-salas-grid">
            <button className={salaAtiva === 'recepcao' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('recepcao')}>Recepção e Espera</button>
            <button className={salaAtiva === 'coletiva' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('coletiva')}>Sala Coletiva</button>
            <button className={salaAtiva === 'procedimentos' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('procedimentos')}>Procedimentos Estéticos</button>
            <button className={salaAtiva === 'psicologico' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('psicologico')}>Atendimento Psicológico</button>
            <button className={salaAtiva === 'enfermagem' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('enfermagem')}>Enfermagem</button>
            <button className={salaAtiva === 'medico' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('medico')}>Consultório Médico</button>
            <button className={salaAtiva === 'terapias' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('terapias')}>Terapias Integrativas</button>
            <button className={salaAtiva === 'reabilitacao' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('reabilitacao')}>Reabilitação Física</button>
            <button className={salaAtiva === 'almoxarifado' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('almoxarifado')}>Almoxarifado</button>
            <button className={salaAtiva === 'esterilizacao' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('esterilizacao')}>Esterilização</button>
            <button className={salaAtiva === 'copa' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('copa')}>Copa</button>
            <button className={salaAtiva === 'banheiros' ? 'btn-sala ativo' : 'btn-sala'} onClick={() => selecionarSala('banheiros')}>Banheiros PCD</button>
          </div>
        </div>

        {/* DIREITA: Card Informativo */}
        <div className="planta-descricao-card" ref={cardDescricaoRef}>
          <div className="card-header">
            <h3>{dadosSalas[salaAtiva].titulo}</h3>
            <span className="badge-tamanho">{dadosSalas[salaAtiva].tamanho}</span>
          </div>
          
          <hr />
          
          {/* 3. EXIBIÇÃO DA IMAGEM DO CÔMODO */}
          {dadosSalas[salaAtiva].imagem && (
            <div className="sala-imagem-container">
              <img 
                src={dadosSalas[salaAtiva].imagem} 
                alt={`Foto de ${dadosSalas[salaAtiva].titulo}`} 
                className="imagem-sala-detalhe" 
              />
            </div>
          )}

          <p className="texto-descricao"><strong>Objetivo:</strong> {dadosSalas[salaAtiva].descricao}</p>
          <p className="texto-detalhes"><strong>Estrutura:</strong> {dadosSalas[salaAtiva].detalhes}</p>
          
          <div className="observacoes-fixas">
            <h4>Padrão Técnico da Clínica:</h4>
            <ul>
              <li>Portas com vão livre de 90 cm.</li>
              <li>Circulação ampla e acessível (mín. 90 cm).</li>
              <li>Ambientes ventilados e iluminados naturalmente.</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}