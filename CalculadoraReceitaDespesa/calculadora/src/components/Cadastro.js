import React, { useState } from 'react';

const Cadastro = ({ onCadastroSubmit }) => {
    // Estados para os campos do formulário
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('Receita');
    const [pagoPor, setPagoPor] = useState('');
  
    // Função chamada ao enviar o formulário
    const handleSubmit = (e) => {
      e.preventDefault();
      // Cria um objeto com os dados do cadastro
      const dadosCadastro = { nome, valor, tipo, pagoPor };
      // Chama a função de callback para submeter os dados
      onCadastroSubmit(dadosCadastro);
      // Limpa os campos do formulário
      setNome('');
      setValor('');
      setTipo('Receita');
      setPagoPor('');
    };
  
    return (
      <div style={{ flex: '1', marginRight: '20px', background: '#d4ffd4', borderRadius: '10px', padding: '20px' }}>
        {/* Título "Cadastro" */}
        <h2 style={{ color: '#0277bd', fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Cadastro</h2>
        
        {/* Formulário de cadastro */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Campo "Nome" */}
          <label style={{ fontSize: '18px', marginBottom: '8px', fontWeight: 'bold' }}>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} style={{ marginLeft: '5px', padding: '5px' }} />
          </label>
          
          {/* Campo "Valor" */}
          <label style={{ fontSize: '18px', marginBottom: '8px', fontWeight: 'bold' }}>
            Valor:
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} style={{ marginLeft: '5px', padding: '5px' }} />
          </label>
          
          {/* Campo "Tipo" */}
          <label style={{ fontSize: '18px', marginBottom: '8px', fontWeight: 'bold' }}>
            Tipo:
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ marginLeft: '5px', padding: '5px' }}>
              <option value="Receita">Receita</option>
              <option value="Despesa">Despesa</option>
            </select>
          </label>
          
          {/* Campo "Pago por" */}
          <label style={{ fontSize: '18px', marginBottom: '8px', fontWeight: 'bold' }}>
            Pago por:
            <input type="text" value={pagoPor} onChange={(e) => setPagoPor(e.target.value)} style={{ marginLeft: '5px', padding: '5px' }} />
          </label>
          
          {/* Botão para enviar o formulário */}
          <button type="submit" style={{ background: '#0277bd', color: '#fff', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Cadastrar</button>
        </form>
      </div>
    );
  };
  
  export default Cadastro;
