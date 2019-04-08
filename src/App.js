import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Apuestas from './component/app-content'
class App extends Component {

  state = ({partidos: [{}],
            apostando: false,
            apostandovalor: [{
              equipo: '',
              grupo: ''
            }]

          });

  componentDidMount() {
    axios.get('http://localhost:3001/apostas/desde/0')
            .then((resp) => {
                this.setState({partidos: resp.data});
                console.log('partidos', this.state.partidos);
            });
  }
 
  getGrupo = (tipo) => {

    const objApuesta = {
      id: tipo.currentTarget.id,
      equipo: tipo.currentTarget.name,
      grupo: tipo.currentTarget.value
    }
    console.log(this.state.apostando.equipo)
    this.setState({
      equipo: tipo.currentTarget.name,
      grupo: tipo.currentTarget.value
    })
    let retrievedObject = localStorage.getItem('5ca7908f104c09647296eddd');
      let a = JSON.parse(retrievedObject)
        console.log(a)
    
    localStorage.setItem(tipo.currentTarget.id, JSON.stringify({objApuesta}));


    this.setState({
      apostando: true
    })
  }

  

  render() {
    return (
     <Apuestas 
     partidos={this.state.partidos}
     equiposSubmitA={(e) => this.getGrupo(e)}
     equiposSubmitB={(e) => this.getGrupo(e)}
     apostando={this.state.apostando}
     />
    );
  }
}

export default App;
