import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import "./Pacotes.css";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Pacotes() {
  // Link padrão do WhatsApp com mensagem personalizada para o botão final
  const linkWhatsapp = "https://wa.me/5596999999999?text=Olá! Gostaria de agendar um plano na Essência Viva.";

  const location = useLocation();

  useEffect(() => {
    // Verifica se existe um ID enviado pelo botão da outra página
    if (location.state && location.state.scrollToId) {
      const id = location.state.scrollToId;
      
      // Dá um mini tempo (100ms) para garantir que a página carregou 100%
      setTimeout(() => {
        const elemento = document.getElementById(id);
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="pacotes-container">

      {/* CABEÇALHO DA PÁGINA */}
      <section className="pacotes-hero">
        <h2>Planos & Opções Unitárias</h2>
        <p className="pacotes-subtitulo">Escolha a melhor opção para sua jornada de cuidado e reabilitação integrativa</p>
      </section>

      {/* SEÇÃO 1: OPÇÕES UNITÁRIAS */}
      <section id="pacote-individuais" className="secao-unitarios">
        <h3 className="titulo-bloco">Atendimentos Individuais</h3>
        <div className="tabelas-precos-grid">
          
          {/* Estética Reparadora */}
          <div className="tabela-precos-card">
            <h4>Estética Reparadora</h4>

            <div className="linha-preco">
              <span className="servico-nome">Crioterapia Capilar (Queda de cabelo)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 350</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>
            
            <div className="linha-preco">
              <span className="servico-nome">Laserterapia (Cicatrizes)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 200</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Microagulhamento (Cicatrizes)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 150</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Drenagem Linfática (Pós-mastectomia)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 120</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Pele Sensibilizada (Limpeza + Hidratação)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 80</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>
          </div>

          {/* Estética Integrativa */}
          <div className="tabela-precos-card">
            <h4>Estética Integrativa</h4>

            <div className="linha-preco">
              <span className="servico-nome">Massagem com Pedras Quentes</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 120</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Massagem Relaxante</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 100</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>
            
            <div className="linha-preco">
              <span className="servico-nome">Aromaterapia (Óleos Essenciais)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 80</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Auriculoterapia</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 80</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Aromaterapia (Escalda-pés)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 70</strong>
                <button className="btn-comprar-unitario">Adquirir</button>
              </div>
            </div>    
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: PLANOS MENSAIS E ANUAIS */}
      <section className="secao-planos-completos">
        
        {/* ---- PACOTE ESSENCIAL ---- */}
        <div id="pacote-essencial" className="bloco-pacote essencial">
          <div className="pacote-main-header">
            <h3>Pacote Essencial</h3>
            <p>Acolhimento inicial, conforto físico e primeiros cuidados com a autoestima.</p>
          </div>
          <div className="grid-meses-pacotes">
            <div className="card-mes-plano">
              <div>
                <h5>1 Mês de Tratamento</h5>
                <p>1 Drenagem linfática <br /> 1 Cuidado pele sensibilizada <br /> 1 Terapia integrativa <br /> 1 Consulta multiprofissional inicial</p>
              </div>
              <div>
                <div className="preco-plano">R$ 320,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>3 Meses de Tratamento</h5>
                <p>3 Drenagens linfáticas <br /> 3 Cuidados pele sensibilizada <br /> 3 Terapias integrativas <br /> 2 Consultas multiprofissionais</p>
              </div>
              <div>
                <div className="preco-plano">R$ 890,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>6 Meses de Tratamento</h5>
                <p>6 Drenagens linfáticas <br /> 6 Cuidados pele sensibilizada <br /> 6 Terapias integrativas <br /> 3 Consultas multiprofissionais</p>
              </div>
              <div>
                <div className="preco-plano">R$ 1.680,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>12 Meses de Tratamento</h5>
                <p>12 Drenagens linfáticas <br /> 12 Cuidados pele sensibilizada <br /> 12 Terapias integrativas <br /> 6 Consultas multiprofissionais</p>
              </div>
              <div>
                <div className="preco-plano">R$ 3.180,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
          </div>
        </div>

        {/* ---- PACOTE BEM-ESTAR ---- */}
        <div id="pacote-bem-estar" className="bloco-pacote bem-estar">
          <div className="pacote-main-header">
            <h3>Pacote Bem-estar</h3>
            <p>Recuperação da autoestima, bem-estar físico e equilíbrio emocional.</p>
          </div>
          <div className="grid-meses-pacotes">
            <div className="card-mes-plano">
              <div>
                <h5>1 Mês de Tratamento</h5>
                <p>2 Drenagens linfáticas <br /> 1 Cuidado pele sensibilizada <br /> 1 Massagem relaxante <br /> 1 Auriculoterapia <br /> 1 Consulta multiprofissional</p>
              </div>
              <div>
                <div className="preco-plano">R$ 590,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>3 Meses de Tratamento</h5>
                <p>6 Drenagens linfáticas <br /> 3 Cuidados pele sensibilizada <br /> 3 Auriculoterapias <br /> 1 Crioterapia capilar <br /> 3 Consultas multiprofissionais</p>
              </div>
              <div>
                <div className="preco-plano">R$ 1.650,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>6 Meses de Tratamento</h5>
                <p>10 Drenagens linfáticas <br /> 6 Cuidados pele <br /> 6 Massagens relaxantes <br /> 6 Auriculoterapias <br /> 2 Crioterapias <br /> 4 Consultas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 3.120,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>12 Meses de Tratamento</h5>
                <p>20 Drenagens linfáticas <br /> 12 Cuidados pele <br /> 12 Massagens relaxantes <br /> 12 Auriculoterapias <br /> 4 Crioterapias <br /> 6 Consultas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 5.980,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
          </div>
        </div>

        {/* ---- PACOTE RECOMEÇO ---- */}
        <div id="pacote-recomeco" className="bloco-pacote recomeco">
          <div className="pacote-main-header">
            <h3>Pacote Recomeço</h3>
            <p>Reabilitação estética integrativa completa e reconstrução profunda da autoestima.</p>
          </div>
          <div className="grid-meses-pacotes">
            <div className="card-mes-plano">
              <div>
                <h5>1 Mês de Tratamento</h5>
                <p>1 Procedimento reparador <br /> 1 Drenagem <br /> 1 Massagem terapêutica <br /> 1 Cuidado pele <br /> 1 Terapia integrativa <br /> 1 Consulta</p>
              </div>
              <div>
                <div className="preco-plano">R$ 890,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>3 Meses de Tratamento</h5>
                <p>2 Procedimentos reparadores <br /> 3 Drenagens <br /> 3 Massagens <br /> 3 Cuidados pele <br /> 3 Terapias <br /> 1 Crioterapia <br /> 2 Consultas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 2.590,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>6 Meses de Tratamento</h5>
                <p>4 Procedimentos reparadores <br /> 6 Drenagens <br /> 6 Massagens <br /> 6 Cuidados pele <br /> 6 Terapias <br /> 2 Crioterapias <br /> 3 Consultas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 4.990,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>12 Meses de Tratamento</h5>
                <p>8 Procedimentos reparadores <br /> 12 Drenagens <br /> 12 Massagens <br /> 12 Cuidados pele <br /> 12 Terapias <br /> 4 Crioterapias <br /> 6 Consultas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 8.990,00</div>
                <a href="#" className="btn-adquirir-card" onClick={(e) => e.preventDefault()}>Adquirir Plano</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SEÇÃO 3: FORMAS DE PAGAMENTO */}
      <section className="secao-pagamento">
        <h3>Formas de Pagamento & Condições</h3>
        <div className="pagamento-grid">
          
          <div className="pagamento-card destaque-pagamento">
            <h5>Cartão de Crédito</h5>
            <p>Parcelamento disponível com taxa administrativa acima de 3x:</p>
            <ul>
              <li><strong>1 mês:</strong> Sem parcelamento</li>
              <li><strong>3 meses:</strong> Até 3x sem Juros</li>
              <li><strong>6 meses:</strong> Até 6x sem Juros</li>
              <li><strong>12 meses:</strong> Até 12x sem Juros</li>
            </ul>
          </div>

          <div className="pagamento-card destaque-pagamento">
            <h5>À Vista & Boleto</h5>
            <div className="metodo-item">
              <strong>PIX e Débito: </strong>
              <span className="badge-Desconto">10% DE DESCONTO</span>
            </div>
            <hr />
            <div className="metodo-item">
              <strong>Boleto Parcelado:</strong>
              <p>Disponível para planos de 3, 6 e 12 meses. Entrada de 20% + parcelamento mensal em até 10x.</p>
            </div>
          </div>

        </div>

        {/* BOTÃO CENTRAL DE CONTRATAÇÃO */}
        <div className="container-botao-final">
          <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="btn-adquirir-plano">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="wpp-icon"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            Falar com Especialista & Adquirir Plano
          </a>
        </div>
      </section>

    </div>
  );
}