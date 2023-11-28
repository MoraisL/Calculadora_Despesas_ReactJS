import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import Receita from './components/Receita';
import Despesa from './components/Despesa';
import './App.css';

const App = () => {
  // Estados para armazenar receitas e despesas
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  // Função chamada quando o formulário de cadastro é enviado
  const handleCadastroSubmit = (dados) => {
    // Verifica se a entrada é uma receita ou despesa e atualiza o estado correspondente
    if (dados.tipo === 'Receita') {
      setReceitas([...receitas, dados]);
    } else if (dados.tipo === 'Despesa') {
      setDespesas([...despesas, dados]);
    }
  };

  // Função para deletar uma receita com base no índice
  const onDeleteReceita = (index) => {
    const updatedReceitas = [...receitas];
    updatedReceitas.splice(index, 1);
    setReceitas(updatedReceitas);
  };

  // Função para deletar uma despesa com base no índice
  const onDeleteDespesa = (index) => {
    const updatedDespesas = [...despesas];
    updatedDespesas.splice(index, 1);
    setDespesas(updatedDespesas);
  };

  // Renderiza os componentes Cadastro, Receita e Despesa
  return (
    <div className="app-container">
      {/* Componente de Cadastro */}
      <Cadastro onCadastroSubmit={handleCadastroSubmit} className="cadastro" />
      
      {/* Componente de Receita */}
      <Receita receitas={receitas} onDeleteReceita={onDeleteReceita} className="receita" />
      
      {/* Componente de Despesa */}
      <Despesa despesas={despesas} onDeleteDespesa={onDeleteDespesa} className="despesa" />
    </div>
  );
};

export default App;
