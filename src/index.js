//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * Componente que renderiza toda a aplicação
 */
const app = (
  //configura o store do redux
  <Provider store={store}>
    {/** configura a persistência dos dados para que não sejam perdidos ao atualizar a página */}
    <PersistGate loading={null} persistor={persistor}>
      {/** renderiza a aplicação */}
      <App/>
    </PersistGate>
  </Provider>
);

//renderiza toda a aplicação dentro da div raiz criada por padrão em aplicações React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
