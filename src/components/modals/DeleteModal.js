import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "reactstrap";
import Win98Window from "../common/Win98Window";

/**
 * Classe responsável por exibir uma janela modal perguntando se o usuário deseja remover algo
 */
class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Método que faz a renderização da janela
   * @returns janela renderizada
   */
  render() {

    //recebe via props as informações sobre o modal como estado (se está ou não aberto, conteúdo da pergunta, evento a ser executado ao clicar em SIM)
    const { isOpen, toggle, question, onDeleteClick } = this.props;

    //faz a renderização da janela modal
    return (
      <React.Fragment>
        <Modal 
          isOpen={isOpen} 
          toggle={toggle} 
          centered={true}
          style={{
            width: 280
          }}>
          <Win98Window
            close
            onClickClose={toggle}
            title={"Remover Cliente"}
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
                <p style={{fontSize: 13}}>{question}</p>
                <p style={{fontSize: 13}}><b>Esta operação não pode ser revertida</b></p>
                <button
                  type="button"
                  onClick={onDeleteClick}>
                  Sim
                </button>
                <button
                  type="button"
                  onClick={toggle}>
                  Cancelar
                </button>
              </center>
            </div>
          </Win98Window>
        </Modal>
      </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
DeleteModal.propTypes = {
  toggle: PropTypes.func,
  onDeleteClick: PropTypes.func,
  isOpen: PropTypes.any,
  question: PropTypes.any
};

export default DeleteModal;
