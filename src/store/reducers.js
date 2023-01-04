import { combineReducers } from 'redux';
import interfaceStore from './interfaces/reducer';
import clientStore from './clients/reducer';

/**
 * Método que combina todos os reducers utilizados na aplicação gerando um reducer "raiz"
 */
const rootReducer = combineReducers({
  interfaceStore,
  clientStore,
});

//exporta o reducer combinado
export default rootReducer;
