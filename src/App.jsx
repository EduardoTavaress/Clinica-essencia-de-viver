import React from 'react';
import { CarrinhoProvider } from './context/CarrinhoContext'; // Ajuste o caminho do import
import { BrowserRouter as Router } from 'react-router-dom';
import CarrinhoSidebar from '../src/pages/CarrinhoSidebar'; // Vamos criar no Passo 3

import { RouterProvider } from "react-router-dom"
import router from "./router"

export default function App() {

  return (
   <div>
    <CarrinhoProvider>
      <RouterProvider router={router} />
      <CarrinhoSidebar />
    </CarrinhoProvider>
   </div>
  )
}

