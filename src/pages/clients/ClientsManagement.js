import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ClientForm from "../../components/forms/ClientForm";
import ClientList from "../../components/clients/ClientList";
import Win98Window from "../../components/common/Win98Window";
import "98.css";

/**
 * Classe responsável por implementar o componente de gerenciamento de clientes
 */
class ClientsManagement extends Component {

  /**
   * Método que renderiza o componente
   * @returns componente renderizado
   */
  render() {

    //obtém os clients encontrados na busca
    const { clientStore } = this.props;
    const { selectedClient } = clientStore;
    
    //renderiza o componente
    return (
      <React.Fragment>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Win98Window
            minimize
            maximize
            close
            title={'Cadastro de Clientes'}
            width={500}
            height={650}>
            <ClientForm
              mode={(selectedClient !== null) ? 'edit' : 'new'}/>
          </Win98Window>
          <Win98Window
            minimize
            maximize
            close
            title={'Clientes Cadastrados'}
            width={500}
            height={650}>
            <ClientList/>
          </Win98Window>
        </div>        
      </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
ClientsManagement.propTypes = {
  clientStore: PropTypes.any,
  searchClients: PropTypes.func,
  clients: PropTypes.any,
};

/**
 * Mapeia o estado dos clients da aplicação controlado pelo redux com a página
 * @param {*} state estado dos clients
 * @returns o estado dos clients
 */
const mapStateToProps = (state) => ({
  clientStore: state.clientStore
});

//conect o componente com o redux
export default connect(mapStateToProps)(ClientsManagement);
