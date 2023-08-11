import React, {useState, useEffect, useCallback} from "react";
import "./ServiceCallHistory.css"

const ServiceCallHistoryPage = () => {
  // Lista de chamados (exemplo)
  const [chamados, setChamados] = useState([
    {
      id: 1,
      cliente:'Ecovias',
      naturezaServico: 'Proposta',
      Numeroproposta: "123teste",
      titulo: 'Chamado 1',
      descricao: 'Descrição do Chamado 1',
      dataAbertura: '2023-07-01',
      status: 'Aberto',
    },
    {
      id: 2,
      cliente: 'SPMar',
      naturezaServico: 'Contratual',
      titulo: 'Chamado 2',
      descricao: 'Descrição do Chamado 2',
      dataAbertura: '2023-07-02',
      status: 'Fechado',
    },
    // Adicione mais chamados conforme necessário
  ]);

  // const checkNaturezaServico = useCallback(() => {
  //   if (chamados.some((chamado) => chamado.naturezaServico === 'Proposta')) {
  //     setIsProposal(true);
  //   } else {
  //     setIsProposal(false);
  //   }
  // }, [chamados]);
  
  // useEffect(() => {
  //   checkNaturezaServico();
  // }, [checkNaturezaServico]);

  const verDetalhes = (chamadoId) => {
    // Lógica para exibir mais detalhes do chamado com o ID específico
    console.log(`Detalhes do chamado ${chamadoId}`);
  };

  const editarChamado = (chamadoId) => {
    // Lógica para editar o chamado com o ID específico
    console.log(`Editar chamado ${chamadoId}`);
  };

  const excluirChamado = (chamadoId) => {
    // Lógica para excluir o chamado com o ID específico
    console.log(`Excluir chamado ${chamadoId}`);
  };

  const handleStatusChange = (event, chamadoId) => {
    const newStatus = event.target.value;
    setChamados((prevChamados) =>
      prevChamados.map((chamado) =>
        chamado.id === chamadoId ? { ...chamado, status: newStatus } : chamado
      )
    );
  };

  return (
    <div>
      <h3>Histórico de Chamados</h3>
      {chamados.map((chamado) => (
        <div key={chamado.id} className="chamado-item">
          <div className="chamado-info">
          <p><strong>Cliente:</strong> {chamado.cliente}</p>
          <p><strong>Natureza do serviço:</strong> {chamado.naturezaServico}</p>
          {chamado.naturezaServico === 'Proposta' && (
              <p><strong>Proposta:</strong> {chamado.Numeroproposta}</p>
            )}
            <p><strong>Técnico responsável:</strong> {chamado.tecnico}</p>
            <p><strong>Título:</strong> {chamado.titulo}</p>
            <p><strong>Status:</strong> {chamado.status}</p>
          </div>
          <div className="call-description">
            <p><strong>Descrição:</strong> {chamado.descricao}</p>
          </div>
          <div className="chamado-botoes">
            <button onClick={() => verDetalhes(chamado.id)}>Ver Mais</button>
            <button onClick={() => editarChamado(chamado.id)}>Editar</button>
            <button onClick={() => excluirChamado(chamado.id)}>Excluir</button>
          </div>
          <div className="chamado-status">
            <span className="chamado-status-label">Status:</span>
            <select
              className="chamado-status-select"
              value={chamado.status}
              onChange={(e) => handleStatusChange(e, chamado.id)}
            >
              <option value="aberto">Aberto</option>
              <option value="em_andamento">Em Andamento</option>
              <option value="fechado">Fechado</option>
            </select>
          </div>
        </div>
      ))}
    </div>
    );   
};   

export default ServiceCallHistoryPage;
