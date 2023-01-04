/**
 * Arquivo responsável por implementar as actions do reducer
 */
import {
  CREATE_OR_UPDATE_CLIENT,
  DELETE_CLIENT,
  SEARCH_CLIENTS,
  SELECT_CLIENT
} from './actionTypes';

/**
 * Action responsável por buscar os clientes
 * @param {*} parameter parametro de pesquisa
 */
export const searchClients = (parameter) => ({
  type: SEARCH_CLIENTS,
  payload: {
    parameter
  },
});

/**
 * Action responsável por selecionar um cliente
 * @param {*} client client a ser selecionado
 */
export const selectClient = (client) => ({
  type: SELECT_CLIENT,
  payload: client,
});

/**
 * Action responsável por criar um novo cliente
 * @param {*} client cliente a ser cadastrado
 */
export const createOrUpdateClient = (client) => ({
  type: CREATE_OR_UPDATE_CLIENT,
  payload: client,
});

/**
 * Action responsável por deletar um cliente
 * @param {*} client cliente a ser deletado
 */
export const deleteClient = (client) => ({
  type: DELETE_CLIENT,
  payload: client,
});