import React from 'react';
import { CarrinhoProvider } from './context/CarrinhoContext'; 
import { BrowserRouter as Router } from 'react-router-dom';
import CarrinhoSidebar from '../src/pages/CarrinhoSidebar';

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

