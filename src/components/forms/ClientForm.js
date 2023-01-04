import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createOrUpdateClient,
	showClientMessage,
  selectClient
} from '../../store/actions';
import { validateMail } from '../../helpers/general_helpers';
import "98.css";

/**
 * Classe responsável por renderizar o formulário de cadastro de clientes
 */
class ClientForm extends Component {
  
  constructor(props) {
    
    super(props);

    this.state = {

      name: '',
      age: 30,
      sex: 'Masculino',
      redColor: false,
      greenColor: false,
      blueColor: false,
      mail: '',
      login: '',
      password: '',
      status: 'Ativo',
      comments: ''
    };

    //faz o "bind" das funções
    this.createOrUpdateClient = this.createOrUpdateClient.bind(this);
		this.resetForm = this.resetForm.bind(this);
    this.updateFormValue = this.updateFormValue.bind(this);
  }

  componentDidMount() {

    const { selectClient } = this.props;

    selectClient(null);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.clientStore !== this.props.clientStore) {
      
      const { clientStore } = this.props;
      const { selectedClient } = clientStore;

      if(selectedClient !== null) {

        this.setState({

          name: selectedClient.name,
          age: selectedClient.age,
          sex: selectedClient.sex,
          redColor: selectedClient.redColor,
          greenColor: selectedClient.greenColor,
          blueColor: selectedClient.blueColor,
          mail: selectedClient.mail,
          login: selectedClient.login,
          password: selectedClient.password,
          status: selectedClient.status,
          comments: selectedClient.comments
        });
      }
    }
  }

  /**
   * Função que reseta o formulário
   */
  resetForm() {

    this.setState({

      name: '',
      age: 30,
      sex: 'Masculino',
      redColor: false,
      greenColor: false,
      blueColor: false,
      mail: '',
      login: '',
      password: '',
      status: 'Ativo',
      comments: ''
    });
  }

  /**
   * Função que atualiza o campo de um formulário
   * @param name nome do campo a ser atualizado
   * @param value valor do campo a ser atualizado
   */
  updateFormValue(name, value) {

    this.setState({[name]: value});
  }

  /**
   * Função que valida o formulário
   * @returns true se o formulário estiver validado ou caso contrário false
   */
  validadeForm() {

    //obtém os dados do cliente
    const { name, sex, mail, login, password } = this.state;    
    const { showClientMessage } = this.props;

    //nas linhas a seguir valida todos os campos conforme necessário
    if(name === '') {
      showClientMessage('Gerenciamento de Clientes', 'Informe o nome do cliente');
      return false;
    }
    else if(sex === '') {
      showClientMessage('Gerenciamento de Clientes', 'Informe o sexo do cliente');
      return false;
    }
    else if(mail === '') {
      showClientMessage('Gerenciamento de Clientes', 'Informe o email do cliente');
      return false;
    }
    //verifica se o email é válido
    else if(!validateMail(mail)) {

      showClientMessage('Gerenciamento de Clientes', 'Email no formato inválido');
      return false;
    }
    else if(login === '') {
      showClientMessage('Gerenciamento de Clientes', 'Informe o login do cliente');
      return false;
    }
    //verifica se o login é válido
    else if(login.length < 6 || login.length > 16) { 
      
      showClientMessage('Gerenciamento de Clientes', 'O login deve conter entre 6 e 16 caracteres');
      return false;
    }
    else if(password === '') {
      showClientMessage('Gerenciamento de Clientes', 'Informe a senha do cliente');
      return false;
    }
    //verifica se a senha é válida
    else if(password.length < 6 || password.length > 16) {
      
      showClientMessage('Gerenciamento de Clientes', 'A senha deve conter entre 6 e 16 caracteres');
      return false;
    }
    
    return true;
  }

   /**
   * Função que cadastra um cliente
   */
  createOrUpdateClient() {

    const { showClientMessage, clientStore } = this.props;
    const { selectedClient } = clientStore;
    //obtém os dados do cliente
    const { name, age, sex, redColor, greenColor, blueColor, mail, login, password, status, comments } = this.state;
    //cria um novo cliente
    let client = { name, age, sex, redColor, greenColor, blueColor, mail, login, password, status, comments };
    
    if(selectedClient !== null) {

      client.clientId = selectedClient.clientId;
    }

    //se o formulário foi validado com sucesso
    if(this.validadeForm()) {
    
      //invoca a action que realiza o cadastro ou atualização
      this.props.createOrUpdateClient(client);
      this.resetForm();
      showClientMessage('Gerenciamento de Clientes', 'Cliente salvo com sucesso');
    }
	}

  /**
   * Método que faz a renderização do formulário
   * @returns formulário renderizado
   */
	render() {
    
    //obtém as informações do cliente logado
    const { name, age, sex, redColor, greenColor, blueColor, mail, login, password, status, comments } = this.state;
    
    //renderiza o formulário de cadastro
    return (
      <React.Fragment>
        <div className="window-body">
          <center>
            <p style={{fontSize: 18}}><b>Cadastro de Clientes</b></p>
          </center>
          <center>
            <p>Informe os dados do cliente e clique em <b>Salvar</b> para confirmar!</p>
          </center>
          
          <center>
            <table border={"0"}>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor={"name"} style={{verticalAlign: 'middle'}}>Nome: </label>
                  </td>
                  <td>
                    <input
                      style={{verticalAlign: 'middle'}}
                      onChange={(e) => this.updateFormValue('name', e.target.value)}
                      size={40}
                      type={"text"}
                      id={"name"}
                      name={"name"}
                      value={name}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="ageLow">Idade: 0</label>
                  </td>
                  <td>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                      <input 
                        onChange={(e) => this.updateFormValue('age', e.target.value)}
                        type={"range"} 
                        min={"1"}
                        max={"100"}
                        name={"age"}
                        step={"1"} 
                        value={age} />
                      <label htmlFor="ageHigh">100</label>
                      &nbsp;
                      &nbsp;
                      <label htmlFor="age">{age} anos</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="sexMale">Sexo:</label>
                  </td>
                  <td>
                    <input 
                      checked={sex === 'Masculino'}
                      onChange={(e) => this.updateFormValue('sex', e.target.value)}
                      value={"Masculino"}
                      id={"sexMale"} 
                      type={"radio"} 
                      name={"sex"}/>
                    <label htmlFor="sexMale">Masculino</label>
                    &nbsp;
                    <input 
                      checked={sex === 'Feminino'}
                      onChange={(e) => this.updateFormValue('sex', e.target.value)}
                      value={"Feminino"}
                      id={"sexFemale"} 
                      type={"radio"} 
                      name={"sex"}/>
                    <label htmlFor="sexFemale">Feminino</label>
                    &nbsp;
                    <input 
                      checked={sex === 'Não Informado'}
                      onChange={(e) => this.updateFormValue('sex', e.target.value)}
                      value={"Não Informado"}
                      id={"sexNot"} 
                      type={"radio"} 
                      name={"sex"}/>
                    <label htmlFor="sexNot">Não Informado</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="redColor">Cores preferidas:</label>
                  </td>
                  <td>
                    <input 
                      checked={redColor}
                      onChange={(e) => this.updateFormValue('redColor', !redColor)}
                      value={redColor}
                      id={"redColor"} 
                      type={"checkbox"}/>
                    <label htmlFor="redColor">Vermelho</label>
                    &nbsp;
                    <input 
                      checked={greenColor}
                      onChange={(e) => this.updateFormValue('greenColor', !greenColor)}
                      value={greenColor}
                      id={"greenColor"} 
                      type={"checkbox"}/>
                    <label htmlFor="greenColor">Verde</label>
                    &nbsp;
                    <input 
                      checked={blueColor}
                      onChange={(e) => this.updateFormValue('blueColor', !blueColor)}
                      value={blueColor}
                      id={"blueColor"} 
                      type={"checkbox"}/>
                    <label htmlFor="blueColor">Azul</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor={"mail"} style={{verticalAlign: 'middle'}}>Email: </label>
                  </td>
                  <td>
                    <input  
                      style={{verticalAlign: 'middle'}}
                      onChange={(e) => this.updateFormValue('mail', e.target.value)}
                      size={40}
                      type={"text"}
                      name={"mail"}
                      id={"mail"}
                      value={mail}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor={"login"} style={{verticalAlign: 'middle'}}>Login: </label>
                  </td>
                  <td>
                    <input
                      style={{verticalAlign: 'middle'}}
                      onChange={(e) => this.updateFormValue('login', e.target.value)}
                      type={"text"}
                      name={"login"}
                      id={"login"}
                      value={login}/>
                    <label style={{marginLeft: 5}} htmlFor="login">entre 6 e 16 caracteres</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor={"password"} style={{verticalAlign: 'middle'}}>Senha: </label>  
                  </td>
                  <td>
                    <input
                      style={{verticalAlign: 'middle'}}
                      onChange={(e) => this.updateFormValue('password', e.target.value)}
                      type={"password"}
                      name={"password"}
                      id={"password"}
                      value={password}/>
                    <label style={{marginLeft: 5}} htmlFor="password">entre 6 e 16 caracteres</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor={"status"} style={{verticalAlign: 'middle'}}>{"Status:"}</label>
                  </td>
                  <td>
                    <select
                      onChange={(e) => this.updateFormValue('status', e.target.value)}
                      name={"status"}
                      id={"status"}
                      value={status}>
                      <option value={"Ativo"}>Ativo</option>
                      <option value={"Inativo"}>Inativo</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor={"comments"} style={{verticalAlign: 'middle'}}>{"Observações:"} </label>
                  </td>
                  <td>
                    <textarea 
                      style={{verticalAlign: 'middle'}}
                      onChange={(e) => this.updateFormValue('comments', e.target.value)}
                      name={"comments"}
                      id={"comments"}
                      value={comments}
                      rows={10}
                      cols={60}>
                      {comments}
                      </textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <br/>
            <button 
              onClick={() => {
                this.props.selectClient(null);
                this.resetForm();
              }}
              type="button">
              Novo
            </button>
            &nbsp;
            <button 
              onClick={() => this.resetForm()}
              type="button">
              Limpar
            </button>
            &nbsp;
            <button 
              onClick={() => {
                this.createOrUpdateClient();
              }}
              type="button">
              Salvar
            </button>            
          </center>
        </div>
      </React.Fragment>
    );
  }
}

/**
 * Valida as propriedades do componente
 */
ClientForm.propTypes = {
  clientStore: PropTypes.any,
  interfaceStore: PropTypes.any,
  createOrUpdateClient: PropTypes.func,
	showClientMessage: PropTypes.func,
  selectClient: PropTypes.func,
  className: PropTypes.any,
};

/**
 * Mapeia o estado da aplicação controlado pelo redux com o componente
 * @param {*} state estado da aplicação
 * @returns o estado da aplicação
 */
const mapStateToProps = (state) => ({
  clientStore: state.clientStore,
  interfaceStore: state.interfaceStore
});

/**
 * Mapeia com o componente as actions necessárias para o cadastro e alteração
 */
const mapDispatchToProps = {
  createOrUpdateClient,
	showClientMessage,
  selectClient
};

//conect o componente com o redux
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);