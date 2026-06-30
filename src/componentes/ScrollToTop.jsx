import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // O hook useLocation nos avisa toda vez que a URL/página muda
  const { pathname } = useLocation();

  useEffect(() => {
    // Força o navegador a ir para as coordenadas X:0 e Y:0 (topo esquerdo da tela)
    window.scrollTo(0, 0);
  }, [pathname]); // Esse efeito roda sempre que o 'pathname' (caminho da página) mudar

  return null; // Ele não renderiza nada visualmente na tela
}