import { 
  SHOW_CLIENT_MESSAGE,
  HIDE_CLIENT_MESSAGE
} from './actionTypes';

const INIT_STATE = {
  clientPanel: {
    title: '',
    message: '',
    showPanel: false,
  },
};

/**
 * Função que configura o estado da aplicação do módulo de gerenciamento das interfaces sempre que uma action é executada
 * @param {*} state estado atual da aplicação
 * @param {*} action action que foi executada
 * @returns o novo estado da aplicação
 */
const interfaceReducer = (state = INIT_STATE, action) => {

  //nas linhas abaixo o estado da aplicação é atualizado dependendo da action que foi executada
  
  switch (action.type) {
    case SHOW_CLIENT_MESSAGE:
      return {
        ...state,
        clientPanel: {
          title: action.payload.title,
          message: action.payload.message,
          showPanel: true,
        },
      };

    case HIDE_CLIENT_MESSAGE:
      return {
        ...state,
        clientPanel: {
          showPanel: false,
          title: '',
          message: '',
        },
      };
    
    default:
      return state;
  }
};

export default interfaceReducer;
