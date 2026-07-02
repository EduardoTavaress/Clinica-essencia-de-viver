import React, { createContext, useState, useEffect, useContext } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  // Inicializa o carrinho com os dados salvos no navegador, se existirem
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem('essencia_viva_carrinho');
    return salvo ? JSON.parse(salvo) : [];
  });

  // Controla se a aba lateral do carrinho está aberta ou fechada
  const [isOpen, setIsOpen] = useState(false);

  // Toda vez que o carrinho mudar, salva a nova lista no localStorage
  useEffect(() => {
    localStorage.setItem('essencia_viva_carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  // Função para adicionar um plano ou serviço unitário
  const adicionarItem = (item) => {
    setCarrinho((prev) => {
      const existe = prev.find((i) => i.id === item.id);
      if (existe) {
       
        return prev.map((i) => i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i);
      }
     
      return [...prev, { ...item, quantidade: 1 }];
    });
    setIsOpen(true); 
  };

  // Função para remover um item completamente
  const removerItem = (id) => {
    setCarrinho((prev) => prev.filter((i) => i.id !== id));
  };

  // Função para mudar a quantidade direto pelos botões de + e -
  const alterarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerItem(id);
      return;
    }
    setCarrinho((prev) => prev.map((i) => i.id === id ? { ...i, quantidade: novaQuantidade } : i));
  };

  const limparCarrinho = () => setCarrinho([]);

  // Calcula a quantidade total de itens (somando as unidades de cada item)
  const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  // Calcula o valor total bruto do carrinho
  const totalCarrinho = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  // Monta o link do WhatsApp dinamicamente com a lista de itens
  const gerarLinkWhatsapp = () => {
    const numeroWhatsApp = "5596999999999";
    let mensagem = "Olá! Gostaria de agendar os seguintes planos/procedimentos na *Essência Viva*:\n\n";

    carrinho.forEach((item) => {
      mensagem += `• *${item.nome}* (${item.quantidade}x) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });

    mensagem += `\n📌 *Valor Total:* R$ ${totalCarrinho.toFixed(2)}`;
    mensagem += `\n\n_Aguardo o retorno para confirmar os horários de atendimento!_`;

    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <CarrinhoContext.Provider value={{ 
      carrinho, 
      isOpen, 
      setIsOpen, 
      adicionarItem, 
      removerItem, 
      alterarQuantidade, 
      limparCarrinho, 
      totalCarrinho, 
      quantidadeTotal, 
      gerarLinkWhatsapp 
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);