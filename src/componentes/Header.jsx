import { Link } from "react-router-dom";
import logoImg from "../assets/logo.jpeg"

export default function Header () {
    return (
        <header className="header">

            <img src={logoImg} alt="Logo Essência Viva" width={100} />

            <nav className="header-nav">

                <Link className="header-link" to="/">Início</Link>
                <Link className="header-link" to="/Servicos">Serviços Ofertados</Link>
                <Link className="header-link" to="/Pacotes">Pacotes</Link>
                <Link className="header-link" to="/Cronograma">Cronograma Semanal</Link>
                <Link className="header-link" to="/Espaco">Nosso Espaço</Link>


            </nav>
            
        </header>
    );
}