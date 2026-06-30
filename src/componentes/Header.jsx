import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext"; // <-- Importamos o nosso hook do carrinho
import logoImg from "../assets/logo.jpeg";
import "./Header.css";

export default function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Conectamos o Header com o estado global do carrinho
  const { setIsOpen, quantidadeTotal } = useCarrinho();

  // Função para fechar o menu ao clicar em algum link
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="header">
      {/* CLASSE ADICIONADA: header-logo para gerenciar a ordem no Desktop */}
      <Link to="/" className="header-logo" onClick={fecharMenu}>
        <img src={logoImg} alt="Logo Essência Viva" width={100} />
      </Link>

      {/* Container das ações da direita (No Desktop vai para o fim, no Mobile fica ao lado do logo) */}
      <div className="header-actions-mobile">
        <div className="menu-item-carrinho">
          {/* Atualizado: Agora ao clicar, ele previne o link cego e abre a aba lateral */}
          <a 
            href="#" 
            className="carrinho-link" 
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="carrinho-icon">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
            {/* Atualizado: Exibe a quantidade real de itens selecionados automaticamente */}
            <span className="carrinho-badge">{quantidadeTotal}</span>
          </a>
        </div>

        {/* Botão Hambúrguer */}
        <button 
          className={`btn-hamburger ${menuAberto ? 'aberto' : ''}`} 
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu de navegação"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu de links */}
      <nav className={`header-nav ${menuAberto ? 'ativo' : ''}`}>
        <Link className="header-link" to="/" onClick={fecharMenu}>Início</Link>
        <Link className="header-link" to="/Servicos" onClick={fecharMenu}>Serviços Ofertados</Link>
        <Link className="header-link" to="/Pacotes" onClick={fecharMenu}>Pacotes</Link>
        <Link className="header-link" to="/Cronograma" onClick={fecharMenu}>Cronograma Semanal</Link>
        <Link className="header-link" to="/Espaco" onClick={fecharMenu}>Nosso Espaço</Link>
      </nav>
    </header>
  );
}