import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteModal from '../modals/DeleteModal';
import { 
  selectClient, 
  showClientMessage,
  deleteClient
} from '../../store/actions';
import "98.css";

/**
 * Função que renderiza um quadro com opções de gerenciamento de um cliente
 */
class ClientOptions extends Component {

  constructor(props) {

    super(props);

    this.state = {
      showDeleteModal: false
    };

    //faz o "bind" das funções
    this.editClient = this.editClient.bind(this);
    this.deleteClient = this.deleteClient.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }

  /**
   * Função que exibe/oculta o modal de confirmação de exclusão de cliente
   */
  toggleDeleteModal() {
    this.setState({showDeleteModal: !this.state.showDeleteModal});
  }

  /**
   * Função que edita o cadastro de um cliente
   */
  editClient() {
    //obtém as informações do cliente
    const { client, selectClient } = this.props;

    selectClient(client);
  };

  /**
   * Função que deleta o cadastro do cliente
   */
  deleteClient() {

    //obtém as informações do cliente
    const { client, deleteClient, showClientMessage } = this.props;
    
    //invoca a action que deleta o cadastro do cliente
    deleteClient(client);
    showClientMessage('Gerenciamento de Clientes', 'Cliente deletado com sucesso');
  };

  /**
   * Método que faz a renderização do formulário
   * @returns formulário renderizado
   */
  render() {

    const { showDeleteModal } = this.state;
    
    //renderiza o componente
    return (
      <React.Fragment>
        <div className="window-body">
          <center>
            <button 
              onClick={() => this.editClient()}
              type="button">
              Editar
            </button>
            &nbsp;
            <button 
              onClick={() => this.toggleDeleteModal()}
              type="button">
              Excluir
            </button>   
          </center>
        </div>
        <DeleteModal 
          isOpen={showDeleteModal}
          toggle={this.toggleDeleteModal}
          question={`Deseja remover o cliente selecionado ?`}
          onDeleteClick={this.deleteClient}/>
      </React.Fragment>
    )
  }
}

/**
 * Valida as propriedades do componente
 */
ClientOptions.propTypes = {
  clientStore: PropTypes.any,
  client: PropTypes.any,
  selectClient: PropTypes.func,
  showClientMessage: PropTypes.func,
  deleteClient: PropTypes.func
};

/**
 * Mapeia o estado da aplicação controlado pelo redux com o componente
 * @param {*} state estado da aplicação
 * @returns o estado da aplicação
 */
const mapStateToProps = (state) => ({
  clientStore: state.clientStore,
});

/**
 * Mapeia com o componente as actions necessárias para o cadastro e alteração
 */
const mapDispatchToProps = {
  selectClient,
  showClientMessage,
  deleteClient
};

//conect o componente com o redux
export default connect(mapStateToProps, mapDispatchToProps)(ClientOptions);