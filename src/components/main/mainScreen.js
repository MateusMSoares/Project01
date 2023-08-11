import React, { useState } from 'react';
import './mainScreen.css';
import SummaryComponent from './summary';
import ServiceCallFormComponent from './ServiceCallForm';
import RepairCallFormComponent from './RepairCallForm';
import ServiceCallHistoryComponent from './ServiceCallHistory'
import ServiceCallReportComponent from './ServiceCallReport'


const user = 'Admin';

const MainScreen = () => {

  const [CurrentPage, SetCurrentPage] = useState('Summary')
  const [showServiceOptions, setShowServiceOptions] = useState(false);

  const handlePageChange = (pageName) => {
    SetCurrentPage(pageName)
    setShowServiceOptions(false);
  }

  const toggleServiceOptions = () => {
    setShowServiceOptions(!showServiceOptions);
  };

return (
  <div className="main-screen-container">
    <aside className="sidebar">
      <div className="user-greeting">
        Olá {user}
      </div>
      <div className="nav-item" onClick={() => handlePageChange('Summary')}>Resumo</div>
      <div className="nav-item" onClick={toggleServiceOptions}>
      <span>Chamado de serviço</span>
      <div className='ArrowIcon'>{showServiceOptions ? '▼' : '▶'}</div>
      </div>
      {showServiceOptions && (
        <>
          <div className="service-option" onClick={() => handlePageChange('ServiceCallForm')}>
            Serviço Externo
          </div>
          <div className="service-option" onClick={() => handlePageChange('RepairCallForm')}>
            Reparo
          </div>
        </>
      )}
        <div className="nav-item" onClick={() => handlePageChange('ServiceCallHistory')}>Histórico de chamados</div>
        <div className="nav-item" onClick={() => handlePageChange('ServiceCallReport')}>Relatórios</div>
      </aside>
        <main className="content">
          {CurrentPage === 'Summary' && <SummaryComponent />}
          {CurrentPage === 'ServiceCallForm' && <ServiceCallFormComponent />}
          {CurrentPage === 'RepairCallForm' && <RepairCallFormComponent />}
          {CurrentPage === 'ServiceCallHistory' && <ServiceCallHistoryComponent />}
          {CurrentPage === 'ServiceCallReport' && <ServiceCallReportComponent />}
        </main>
    </div>
  );  
};

export default MainScreen;
