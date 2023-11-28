import React from 'react';

const Despesa = ({ despesas, onDeleteDespesa }) => {
  // Calcula o valor total de todas as despesas
  const totalDespesas = despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor), 0);

  return (
    <div style={{ flex: '1' }}>
      {/* Título "Despesa" */}
      <h2 style={{ color: '#d32f2f', fontSize: '24px', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Despesa</h2>
      <p style={{ fontWeight: 'bold', marginTop: '20px', fontSize: '18px', background: '#ffcccb', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '4px' }}>Soma Total: {"R$" + totalDespesas}</p>
      
      {/* Container principal para a lista de despesas */}
      <div style={{ background: '#ffcccb', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        
        {/* Título "Lista" */}
        <h3 style={{ color: '#d32f2f', fontSize: '20px', marginBottom: '15px' }}>Lista</h3>
        
        {/* Mapeia cada despesa para um componente de card */}
        {despesas.map((despesa, index) => (
          <div key={index} style={{ background: '#ffd4d4', padding: '15px', marginBottom: '15px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            
            {/* Nome da despesa */}
            <h3 style={{ color: '#d32f2f', fontSize: '18px', marginBottom: '8px' }}>{despesa.nome}</h3>
            
            {/* Valor da despesa */}
            <p><strong>Valor:</strong> {"R$" + despesa.valor}</p>
            
            {/* Tipo da despesa */}
            <p><strong>Tipo:</strong> {despesa.tipo}</p>
            
            {/* Quem pagou pela despesa */}
            <p><strong>Pago por:</strong> {despesa.pagoPor}</p>
            
            {/* Botão para deletar a despesa */}
            <button style={{ background: '#d32f2f', color: '#fff', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => onDeleteDespesa(index)}>Deletar</button>
          </div>
        ))}
      </div>
      
      {/* Exibe o total das despesas */}
      
    </div>
  );
};

export default Despesa;