import {
  CREATE_OR_UPDATE_CLIENT,
  DELETE_CLIENT,
  SEARCH_CLIENTS,
  SELECT_CLIENT
} from './actionTypes';

const INIT_STATE = {
  clients: [],
  searchedClients: [],
  selectedClient: null,
  count: 0
};

/**
 * Função que configura o estado da aplicação do módulo de gerenciamento de clientes sempre que uma action é executada
 * @param {*} state estado atual da aplicação
 * @param {*} action action que foi executada
 * @returns o novo estado da aplicação
 */
const clientReducer = (state = INIT_STATE, action) => {

  //nas linhas abaixo o estado da aplicação é atualizado dependendo da action que foi executada
  switch (action.type) {
    case SEARCH_CLIENTS:
      let parameter = action.payload.parameter.toLowerCase();
      let searchedClients = [];
      
      if(parameter !== '') {
      
        searchedClients = state.clients.filter((client, index) => {
          return (
            (client.name.toLowerCase().includes(parameter)) ||
            (client.mail.toLowerCase().includes(parameter)) ||
            (client.sex.toLowerCase().includes(parameter)) ||
            (client.status.toLowerCase().includes(parameter)) ||
            (client.login.toLowerCase().includes(parameter)) ||
            (client.comments.toLowerCase().includes(parameter))
          );
        });
      }
      else {

        searchedClients = state.clients;
      }
      
      return {
        ...state,
        searchedClients: searchedClients
      };

    case CREATE_OR_UPDATE_CLIENT:
      
      const newClient = action.payload;
      const updatedClients = state.clients;
      const existsClient = state.clients.find((client, index) => {
        return newClient.clientId !== undefined && newClient.clientId === client.clientId;
      });

      if(existsClient === undefined) {
      
        newClient.clientId = state.count + 1;

        updatedClients.push(newClient);

        return {
          ...state,
          clients: updatedClients,
          searchedClients: updatedClients,
          selectedClient: null,
          count: state.count + 1,
        };
      }
      else {

        existsClient.name = newClient.name;
        existsClient.age = newClient.age;
        existsClient.sext = newClient.sex;
        existsClient.redColor = newClient.redColor;
        existsClient.greenColor = newClient.greenColor;
        existsClient.blueColor = newClient.blueColor;
        existsClient.mail = newClient.mail;
        existsClient.login = newClient.login;
        existsClient.password = newClient.password;
        existsClient.status = newClient.status;
        existsClient.comments = newClient.comments;
      }

      return {
        ...state
      };

    case DELETE_CLIENT:
      const clientDeleted = action.payload;
      const newClients = state.clients.filter((client, index) => {
        return client.clientId !== clientDeleted.clientId;
      });
      
      return {
        ...state,
        clients: newClients,
        searchedClients: newClients,
        selectedClient: action.payload,
        count: state.count - 1
      };

    case SELECT_CLIENT:
      return {
        ...state,
        selectedClient: action.payload
      };

    default:
      return state;
  }
};

export default clientReducer;
