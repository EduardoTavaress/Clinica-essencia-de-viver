// 1. ADICIONE O ScrollRestoration NO IMPORT ABAIXO:
import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer"; 

import Home from "./pages/Home";
import Servics from "./pages/Servicos";
import Pacotes from "./pages/Pacotes";
import Cronograma from "./pages/Cronograma";
import Espaco from "./pages/Espaco";

// 2. ATUALIZE O LAYOUT GLOBAL
function LayoutGlobal() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 🚀 ELE VAI AQUI, BEM NO TOPO DO LAYOUT: */}
      <ScrollRestoration />
      
      <Header />

      {/* O 'flex: 1' faz com que a página ocupe todo o espaço restante... */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutGlobal />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/Servicos", element: <Servics /> },
      { path: "/Pacotes", element: <Pacotes /> },
      { path: "/Cronograma", element: <Cronograma /> },
      { path: "/Espaco", element: <Espaco /> }
    ]
  }
]);

export default router;