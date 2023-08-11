import React, { useState } from 'react';
import './ServiceCallReport.css';

const ServiceCallReportPage = () => {
  const [chamados, setChamados] = useState([
    {
      id: 1,
      cliente: 'Ecovias',
      naturezaServico: 'Proposta',
      Numeroproposta: '123teste',
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
    {
      id: 3,
      cliente: 'Empresa XYZ',
      naturezaServico: 'Contratual',
      titulo: 'Chamado 3',
      descricao: 'Descrição do Chamado 3',
      dataAbertura: '2023-07-03',
      status: 'Aberto',
    },
    // Adicione mais chamados conforme necessário
  ]);

  // Função para calcular a quantidade de chamados
  const getQuantidadeChamados = () => chamados.length;

  // Função para calcular a quantidade de chamados em aberto
  const getChamadosEmAberto = () =>
    chamados.filter((chamado) => chamado.status === 'Aberto').length;

  // Função para calcular a quantidade de chamados fechados
  const getChamadosFechados = () =>
    chamados.filter((chamado) => chamado.status === 'Fechado').length;

    const getCallServiceType = () => {
      const quantidadePorTipo = {};
  
      chamados.forEach((chamado) => {
        const tipo = chamado.naturezaServico;
        quantidadePorTipo[tipo] = (quantidadePorTipo[tipo] || 0) + 1;
      });
  
      return quantidadePorTipo;
    };

    const chamadosPorTipo = getCallServiceType();

  return (
    <div>
      <h3>Relatório de Chamados</h3>
      <div className="report-item">
        <strong>Quantidade de Chamados:</strong>
        <span>{chamados.length}</span>
      </div>
      <div className="report-item">
        <strong>Chamados em Aberto:</strong>
        <span>{chamados.filter((chamado) => chamado.status === 'Aberto').length}</span>
      </div>
      <div className="report-item">
        <strong>Chamados Fechados:</strong>
        <span>{chamados.filter((chamado) => chamado.status === 'Fechado').length}</span>
      </div>
      <div className="report-item">
        <strong>Natureza do Chamado:</strong>
        <ul>
          {Object.entries(chamadosPorTipo).map(([tipo, quantidade]) => (
            <li key={tipo}>
              {tipo}: {quantidade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCallReportPage;
