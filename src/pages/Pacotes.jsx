import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import "../styles/Pacotes.css";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext'; // Importação do nosso hook

export default function Pacotes() {
  const { adicionarItem } = useCarrinho(); // Conexão com o gerenciador do carrinho
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const id = location.state.scrollToId;
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

      <section className="pacotes-hero">
        <h2>Planos e Opções Unitárias</h2>
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
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'crio-capilar', nome: 'Crioterapia Capilar', preco: 350 })}>Adquirir</button>
              </div>
            </div>
            
            <div className="linha-preco">
              <span className="servico-nome">Laserterapia (Cicatrizes)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 200</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'laserterapia', nome: 'Laserterapia (Cicatrizes)', preco: 200 })}>Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Microagulhamento (Cicatrizes)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 150</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'microagulhamento', nome: 'Microagulhamento (Cicatrizes)', preco: 150 })}>Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Drenagem Linfática (Pós-mastectomia)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 120</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'drenagem-pos', nome: 'Drenagem Linfática (Pós-mastectomia)', preco: 120 })}>Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Cuidado com Pele Sensibilizada (Limpeza + Hidratação)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 80</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'pele-sensibilizada', nome: 'Pele Sensibilizada (Limpeza + Hidratação)', preco: 80 })}>Adquirir</button>
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
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'pedras-quentes', nome: 'Massagem com Pedras Quentes', preco: 120 })}>Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Massagem Relaxante</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 100</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'massagem-relaxante', nome: 'Massagem Relaxante', preco: 100 })}>Adquirir</button>
              </div>
            </div>
            
            <div className="linha-preco">
              <span className="servico-nome">Aromaterapia (Óleos Essenciais)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 80</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'aromaterapia-oleos', nome: 'Aromaterapia (Óleos Essenciais)', preco: 80 })}>Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Auriculoterapia</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 80</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'auriculoterapia', nome: 'Auriculoterapia', preco: 80 })}>Adquirir</button>
              </div>
            </div>

            <div className="linha-preco">
              <span className="servico-nome">Aromaterapia (Escalda-pés)</span>
              <div className="preco-botao-wrapper">
                <strong className="servico-valor">R$ 70</strong>
                <button className="btn-comprar-unitario" onClick={() => adicionarItem({ id: 'aromaterapia-escalda', nome: 'Aromaterapia (Escalda-pés)', preco: 70 })}>Adquirir</button>
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
                <p>1 Consulta multiprofissional <br /> 1 Cuidado com pele sensibilizada <br /> 1 Drenagem linfática <br /> 1 Terapia integrativa <br /> </p>
              </div>
              <div>
                <div className="preco-plano">R$ 320,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'essencial-1m', nome: 'Pacote Essencial - 1 Mês', preco: 320 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>3 Meses de Tratamento</h5>
                <p> 2 Consultas multiprofissionais <br /> 3 Cuidados com pele sensibilizada <br /> 3 Drenagens linfáticas <br /> 3 Terapias integrativas  </p>
              </div>
              <div>
                <div className="preco-plano">R$ 890,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'essencial-3m', nome: 'Pacote Essencial - 3 Meses', preco: 890 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>6 Meses de Tratamento</h5>
                <p>3 Consultas multiprofissionais <br /> 6 Cuidados com pele sensibilizada <br /> 6 Drenagens linfáticas <br /> 6 Terapias integrativas </p>
              </div>
              <div>
                <div className="preco-plano">R$ 1.680,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'essencial-6m', nome: 'Pacote Essencial - 6 Meses', preco: 1680 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>12 Meses de Tratamento</h5>
                <p>6 Consultas multiprofissionais <br /> 12 Cuidados pele sensibilizada <br /> 12 Drenagens linfáticas <br /> 12 Terapias integrativas </p>
              </div>
              <div>
                <div className="preco-plano">R$ 3.180,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'essencial-12m', nome: 'Pacote Essencial - 12 Meses', preco: 3180 })}>Adquirir Plano</button>
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
                <p>1 Auriculoterapia <br /> 1 Consulta multiprofissional <br /> 1 Cuidado com pele sensibilizada <br /> 1 Massagem relaxante <br /> 2 Drenagens linfáticas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 590,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'bem-estar-1m', nome: 'Pacote Bem-estar - 1 Mês', preco: 590 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>3 Meses de Tratamento</h5>
                <p> 1 Crioterapia capilar <br /> 3 Auriculoterapias  <br /> 3 Consultas multiprofissionais  <br /> 3 Cuidados com pele sensibilizada  <br /> 3 Drenagens linfáticas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 1.650,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'bem-estar-3m', nome: 'Pacote Bem-estar - 3 Meses', preco: 1650 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>6 Meses de Tratamento</h5>
                <p> 2 Crioterapias capilares <br /> 6 Auriculoterapias <br /> 6 Cuidados com pele sensibilizada  <br /> 6 Massagens relaxantes <br /> 10 Drenagens linfáticas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 3.120,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'bem-estar-6m', nome: 'Pacote Bem-estar - 6 Meses', preco: 3120 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>12 Meses de Tratamento</h5>
                <p>4 Crioterapias capilares<br /> 6 Consultas multiprofissionais<br /> 12 Auriculoterapias<br /> 12 Cuidados com pele sensibilizada <br /> 12 Massagens relaxantes <br /> 20 Drenagens linfáticas  </p>
              </div>
              <div>
                <div className="preco-plano">R$ 5.980,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'bem-estar-12m', nome: 'Pacote Bem-estar - 12 Meses', preco: 5980 })}>Adquirir Plano</button>
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
                <p>1 Consulta multiprofissional<br /> 1 Cuidado com pele sensibilizada<br /> 1 Drenagem linfática<br /> 1 Massagem terapêutica <br />1 Procedimento reparador<br /> 1 Terapia integrativa</p>
              </div>
              <div>
                <div className="preco-plano">R$ 890,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'recomeco-1m', nome: 'Pacote Recomeço - 1 Mês', preco: 890 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>3 Meses de Tratamento</h5>
                <p>1 Crioterapia capilar<br /> 2 Consultas multiprofissionais <br />2 Procedimentos reparadores<br /> 3 Cuidados com pele sensibilizada <br /> 3 Drenagens linfáticas <br /> 3 Massagens terapêuticas  <br /> 3 Terapias integrativas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 2.590,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'recomeco-3m', nome: 'Pacote Recomeço - 3 Meses', preco: 2590 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>6 Meses de Tratamento</h5>
                <p>2 Crioterapias capilares<br /> 3 Consultas multiprofissionais <br /> 4 Procedimentos reparadores<br /> 6 Cuidados com pele sensibilizada <br /> 6 Drenagens linfáticas <br /> 6 Massagens terapêuticas  <br /> 6 Terapias integrativas</p>
              </div>
              <div>
                <div className="preco-plano">R$ 4.990,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'recomeco-6m', nome: 'Pacote Recomeço - 6 Meses', preco: 4990 })}>Adquirir Plano</button>
              </div>
            </div>
            <div className="card-mes-plano">
              <div>
                <h5>12 Meses de Tratamento</h5>
                <p>4 Crioterapias capilares<br /> 6 Consultas multiprofissionais<br /> 12 Cuidados  pele sensibilizada  <br /> 12 Drenagens linfáticas <br /> 12 Massagens terapêuticas<br /> 12 Procedimentos reparadores  <br /> 12 Terapias integrativas </p>
              </div>
              <div>
                <div className="preco-plano">R$ 8.990,00</div>
                <button className="btn-adquirir-card" onClick={() => adicionarItem({ id: 'recomeco-12m', nome: 'Pacote Recomeço - 12 Meses', preco: 8900 })}>Adquirir Plano</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SEÇÃO 3: FORMAS DE PAGAMENTO */}
      <section className="secao-pagamento">
        <h3>Formas de Pagamento e Condições</h3>
        <div className="pagamento-grid">
          
          <div className="pagamento-card destaque-pagamento">
            <h5>Cartão de Crédito</h5>
            <p>Parcelamento disponível com taxa administrativa acima de 3x :</p>
            <ul>
              <li><strong>1 mês:</strong> Sem parcelamento</li>
              <li><strong>3 meses:</strong> Até 3x sem Juros</li>
              <li><strong>6 meses:</strong> Até 6x sem Juros</li>
              <li><strong>12 meses:</strong> Até 12x sem Juros</li>
            </ul>
          </div>

          <div className="pagamento-card destaque-pagamento">
            <h5>À Vista e Boleto</h5>
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
      </section>

    </div>
  );
}