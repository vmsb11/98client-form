import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal
} from "reactstrap";
import Win98Window from "../common/Win98Window";

/**
 * Classe responsável por exibir uma janela modal que exibe algum componente da aplicação, exemplo: formulário de cadastro de card
 */
class MyModal extends Component {
  
  /**
   * Método que faz a renderização da janela
   * @returns janela renderizada
   */
  render() {

    //recebe via props as informações sobre o modal como o ícone, título, tamanho, se está aberto e etc
    const { title, message, isFullScreen, isOpen, toggle } = this.props;
    
    //faz a renderização da janela modal
    return (
      
      <React.Fragment>        
        <Modal
          isOpen={isOpen}
          toggle={toggle}
          className={(isFullScreen) ? "modal-fullscreen" : ''}
          scrollable={false}
          centered={true}
          onEnter={() => this.setState({x: 1})}
          style={{
            width: 280
          }}>
          <Win98Window
            close
            onClickClose={toggle}
            title={title}
            width={280}
            height={150}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 140
              }}>
              <center>
                <p style={{fontSize: 13}}>{message}</p>
                <button 
                  onClick={toggle}
                  type="button">
                  OK
                </button>
              </center>
            </div>
          </Win98Window>            
        </Modal>    
      </React.Fragment>
    )
  }
}

/**
 * Valida as propriedades do componente
 */
MyModal.propTypes = {
  title: PropTypes.any,
  message: PropTypes.any,
  isFullScreen: PropTypes.any,
  isOpen: PropTypes.any,
  toggle: PropTypes.func
};

export default MyModal;