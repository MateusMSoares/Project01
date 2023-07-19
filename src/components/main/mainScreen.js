import React from 'react';
import './mainScreen.css';
import OffButton from '../icons/off-button.svg';


const user = 'Admin';

const MainScreen = () => {
  return (
    <div className="main-screen-container">
      <aside className="sidebar">
        <div className="user-greeting">
            Olá {user}
        </div>
        <div className="summary">Resumo</div>
        <div className="service-call"> Chamado de serviço</div>
        <div className="service-history"> Histórico de chamados</div>
        <div className="reports"> Relatórios</div>
        <div className="logout-button" >
          <img src={OffButton} alt="Off Icon" className="logout-icon" />
          <span className="logout-text">Logout</span>
        </div>
      </aside>
      <div className="content">
        <main className="main-content">
          {/* Conteúdo principal */}
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
