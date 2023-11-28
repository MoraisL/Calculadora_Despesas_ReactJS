import React from 'react';

const Receita = ({ receitas, onDeleteReceita }) => {
  // Calcula o valor total de todas as receitas
  const totalReceitas = receitas.reduce((acc, receita) => acc + parseFloat(receita.valor), 0);

  return (
    
    <div style={{ flex: '1', marginRight: '20px' }}>
    
      {/* Título "Receita" */}
      <h2 style={{ color: '#673ab7', fontSize: '24px', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Receita</h2>
      <p style={{ fontWeight: 'bold', marginTop: '20px', fontSize: '18px', background: '#e0c7ff', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '4px' }}>Soma Total: {"R$" + totalReceitas}</p>
      
      {/* Container principal para a lista de receitas */}
      <div style={{ background: '#e0c7ff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        
        {/* Título "Lista" */}
        <h3 style={{ color: '#512da8', fontSize: '20px', marginBottom: '15px' }}>Lista</h3>
        
        {/* Mapeia cada receita para um componente de card */}
        {receitas.map((receita, index) => (
          <div key={index} style={{ background: '#d4ffd4', padding: '15px', marginBottom: '15px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            
            {/* Nome da receita */}
            <h3 style={{ color: '#512da8', fontSize: '18px', marginBottom: '8px' }}>{receita.nome}</h3>
            
            {/* Valor da receita */}
            <p><strong>Valor:</strong> {"R$" + receita.valor}</p>
            
            {/* Tipo da receita */}
            <p><strong>Tipo:</strong> {receita.tipo}</p>
            
            {/* Quem pagou pela receita */}
            <p><strong>Pago por:</strong> {receita.pagoPor}</p>
            
            {/* Botão para deletar a receita */}
            <button style={{ background: '#512da8', color: '#fff', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => onDeleteReceita(index)}>Deletar</button>
          </div>
        ))}
      </div>
      
      {/* Exibe o total das receitas */}
      
    </div>
  );
};

export default Receita;
