import React, { Component } from "react";
import PropTypes from "prop-types";
import "98.css";

/**
 * Classe responsável por implementar o componente de janela do windows 98
 */
class Win98Window extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Método que renderiza o componente
   * @returns componente renderizado
   */
  render() {

    //obtém as propriedades do componente
    const { title, width, height, minimize, maximize, close, onClickMinimize, onClickMaximize, onClickClose } = this.props;
    
    //renderiza o componente
    return (
        <React.Fragment>
            <div style={{ width: width, height: height, marginRight: 10 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                      {
                        (minimize) ? <button onClick={onClickMinimize} aria-label="Minimize" /> : <></>
                      }
                      {
                        (maximize) ? <button onClick={onClickMaximize} aria-label="Maximize" /> : <></>
                      }
                      {
                        (close) ? <button onClick={onClickClose} aria-label="Close" /> : <></>
                      }
                    </div>
                </div>
                {this.props.children}
            </div>
        </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
Win98Window.propTypes = {
  title: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  children: PropTypes.any,
  minimize: PropTypes.any, 
  maximize: PropTypes.any, 
  close: PropTypes.any,
  onClickMinimize: PropTypes.func, 
  onClickMaximize: PropTypes.func, 
  onClickClose: PropTypes.func
};

export default Win98Window;
