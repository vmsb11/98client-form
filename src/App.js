import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientsManagement from './pages/clients/ClientsManagement';
import MyModal from './components/modals/MyModal';
import {
  hideClientMessage
} from './store/actions';

/**
 * Classe principal por renderizar toda a aplicação
 */
class App extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Método que renderiza o componente
   * @returns componente renderizado
   */
  render() {

    //obtém as informações e actions de manipulação das interfaces gráficas
    const { interfaceStore, hideClientMessage } = this.props;
    const { clientPanel } = interfaceStore;
     
    //renderiza todos os componentes da aplicação
    return (
      <React.Fragment>
        <MyModal 
          isOpen={clientPanel.showPanel} 
          isFullScreen={false} 
          title={clientPanel.title}
          message={clientPanel.message} 
          toggle={hideClientMessage}>          
        </MyModal>
        <ClientsManagement/>
      </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
App.propTypes = {
  interfaceStore: PropTypes.object,
  hideClientMessage: PropTypes.func
};

/**
 * Mapeia o estado da aplicação controlado pelo redux com o componente
 * @param {*} state estado da aplicação
 * @returns o estado da aplicação
 */
const mapStateToProps = (state) => {
  return {
    interfaceStore: state.interfaceStore
  };
};

/**
 * Mapeia com o componente as actions necessárias para o componente
 */
const mapDispatchToProps = {
  hideClientMessage
}

//conect a página com o redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
