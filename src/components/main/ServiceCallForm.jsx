import React, { useState, useEffect } from 'react';
import './ServiceCallForm.css';
import ClientsData from "../json/companies.json"
import ServiceTypeData from "../json/serviceType.json"

const ServiceCallForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companies, setCompanies] = useState([]);
  const [selectedServiceType, SetSelectedServiceType] = useState('')
  const [serviceType, setServiceType] = useState(null);
  const [isProposal, setIsProposal] = useState(false);
  const [proposalNumber, setProposalNumber] = useState('');

  useEffect(() => {
    setCompanies(ClientsData.empresas)
    setServiceType(ServiceTypeData.type);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Título:', title);
    console.log('Descrição:', description);
    console.log('Empresa selecionada:', selectedCompany)
    console.log('Tipo de serviço', selectedServiceType)
    if (isProposal) {
        console.log('Número da proposta:', proposalNumber);
      }
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  }
  const handleServiceType = (e) => {
    SetSelectedServiceType(e.target.value);
    setIsProposal(e.target.value === "Proposta");
  }

  return (
    <div className="service-call-form-container">
      <h3>Chamado de Serviço Externo</h3>
      <form className="service-call-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="company">Cliente: </label>
            <select 
            id="company"
            value={selectedCompany}
            onChange={handleCompanyChange}
            >
            <option hidden value="">Selecionar Cliente</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
            </select>
        </div>
        <div className='form-group'>
            <label htmlFor="SAT">Número do SAT:</label>
            <input
                type="number"
                id="SAT"
                value={proposalNumber}
                onChange={(e) => setProposalNumber(e.target.value)}
                />
        </div>
        <div className='form-group'>
            <label htmlFor="KM">Kilometragem:</label>
            <input
                type="number"
                id="KM"
                value={proposalNumber}
                onChange={(e) => setProposalNumber(e.target.value)}
                />
        </div>
        <div className='form-group'>
            <label htmlFor="rodovia">Rodovia:</label>
            <input
                type="text"
                id="rodovia"
                value={proposalNumber}
                onChange={(e) => setProposalNumber(e.target.value)}
                />
        </div>
        <div className="form-group">
            <label htmlFor="serviceType">Tipo de serviço: </label>
            <select 
            id="serviceType"
            value={selectedServiceType}
            onChange={handleServiceType}
            >
            <option hidden value="">Selecionar tipo de serviço</option>
            {Array.isArray(serviceType) && serviceType.map((serviceType, index) => (
                <option key={index} value={serviceType}>
                    {serviceType}
                </option>
            ))};
            </select>
        </div>
        {isProposal && (
            <div className="form-group">
                <label htmlFor="proposalNumber">Número da Proposta: </label>
                <input
                type="text"
                id="proposalNumber"
                value={proposalNumber}
                onChange={(e) => setProposalNumber(e.target.value)}
                />
            </div>
        )}
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Abrir Chamado</button>
      </form>
    </div>
  );
};

export default ServiceCallForm;
