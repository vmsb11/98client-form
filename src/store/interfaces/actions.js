/**
 * Arquivo responsável por implementar as actions do reducer
 */
import {
  SHOW_CLIENT_MESSAGE,
  HIDE_CLIENT_MESSAGE
} from './actionTypes';

/**
 * Action responsável por exibir o painel dos clientes
 * @param {*} title título da mensagem
 * @param {*} message mensagem a ser exibida
 */
export const showClientMessage = (title, message) => ({
  type: SHOW_CLIENT_MESSAGE,
  payload: { title, message }
});

/**
 * Action oculta o painel de clientes
 */
export const hideClientMessage = () => ({
  type: HIDE_CLIENT_MESSAGE,
});
