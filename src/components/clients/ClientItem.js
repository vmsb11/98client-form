import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClientOptions from '../options/ClientOptions';
import "98.css";

/**
 * Classe que renderiza um client do painel kanban com todas as informações do mesmo
 */
class ClientItem extends Component {
  
  /**
   * Função que renderiza um client
   * @returns client renderizado
   */
  render() {
    
    //recebe o cliente a ser renderizado via props
    const { client } = this.props;
   
    /**
     * Renderiza o client utilizando a biblioteca reactstrap
     */
    return (
      <React.Fragment>
        <div className="window-body">
          <fieldset>
            <b>Nome:</b> {client.name}
            <br/>
            <b>Idade:</b> {client.age} anos
            <br/>
            <b>Sexo:</b> {client.sex}
            <br/>
            <b>Cores preferidas:</b>
            {(client.redColor) ? 'Vermelho ' : ''}
            {(client.greenColor) ? 'Verde ' : ''}
            {(client.blueColor) ? 'Azul ' : ''}
            <br/>
            <b>Email:</b> {client.mail}
            <br/>
            <b>Login:</b> {client.login}
            <br/>
            <b>Status:</b> {client.status}
            <br/>
            <b>Observações adicionais</b>
            <br/>
            {client.comments}
            <ClientOptions client={client}/>
            <hr/>
          </fieldset>
        </div>
      </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
ClientItem.propTypes = {
  client: PropTypes.any
};

export default ClientItem;