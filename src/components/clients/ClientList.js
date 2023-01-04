import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClientItem from './ClientItem';
import { 
  showClientMessage, 
  searchClients
} from '../../store/actions';
import "98.css";

class ClientList extends Component {

  constructor(props) {

    super(props);

    this.state = {
      parameter: ''
    };

    this.searchClients = this.searchClients.bind(this);
  }

  /**
   * Método invocado quando o componente é montado
   */
  componentDidMount() {

    this.searchClients();
  }

  searchClients() {

    //obtém as informações do cliente
    const { parameter } = this.state;
    const { searchClients } = this.props;
    
    //invoca a action que busca os clients na memória
    searchClients(parameter);
  }

  renderClients() {

    const { searchedClients } = this.props.clientStore;

    if(searchedClients.length > 0) {

      const clientsList = searchedClients.map((client, key) => <ClientItem client={client} key={key}/>);

      return clientsList;
    }

    return (      
      <center>
        <p style={{fontSize: 18}}>Sem clientes para exibir</p>
      </center>       
    );
  }

  render() {

    const { parameter } = this.state;

    return (

    <React.Fragment>
      <div style={{position: 'relative'}} className="window-body">
        <center>
          <p style={{fontSize: 18}}><b>Listagem de Clientes</b></p>
          <p>Para editar um cliente clique em <b>Editar</b>, para excluir, clique em <b>Excluir</b></p>
          <p>Para pesquisar os clientes, informe um parâmetro de pesquisa e clique em <b>Pesquisar</b> para confirmar</p>
        
          <table border={"0"}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor={"parameter"} style={{verticalAlign: 'middle'}}>Parâmetro: </label>
                  <input
                    style={{verticalAlign: 'middle'}}
                    onChange={(e) => this.setState({ parameter: e.target.value })}
                    size={40}
                    type={"text"}
                    name={"name"}
                    id={"parameter"}
                    value={parameter}/>
                </td>
                <td>
                  <button 
                    onClick={() => this.searchClients()}
                    type="button">
                    Pesquisar
                  </button>         
                </td>
              </tr>
            </tbody>
          </table>
          <br/>
          <div
            style={{
              height: 450,
              overflowY: 'scroll'
            }}>
            {this.renderClients()}          
          </div>
        </center>        
      </div>     
    </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
ClientList.propTypes = {
  showClientMessage: PropTypes.func,
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

/**
 * Mapeia com o componente as actions necessárias para o cadastro e alteração
 */
const mapDispatchToProps = {
  showClientMessage,
  searchClients
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);