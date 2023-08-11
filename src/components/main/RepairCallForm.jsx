import React, { useState } from 'react';

const RepairCallForm = () => {
  const [formData, setFormData] = useState({
    cliente: '',
    sat: '',
    km: '',
    rodovia: '',
    numeroProposta: '',
    numeroSerie: '',
    laudoTecnico: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras ações
    console.log(formData);
  };

  return (
    <div className="service-call-form-container">
      <form className="service-call-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cliente</label>
          <input
            type="text"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>SAT</label>
          <input
            type="text"
            name="sat"
            value={formData.sat}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>KM</label>
          <input
            type="text"
            name="km"
            value={formData.km}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rodovia</label>
          <input
            type="text"
            name="rodovia"
            value={formData.rodovia}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Número da Proposta</label>
          <input
            type="text"
            name="numeroProposta"
            value={formData.numeroProposta}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Número de Série</label>
          <input
            type="text"
            name="numeroSerie"
            value={formData.numeroSerie}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Laudo Técnico</label>
          <textarea
            name="laudoTecnico"
            value={formData.laudoTecnico}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RepairCallForm;
