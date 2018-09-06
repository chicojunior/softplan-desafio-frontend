import React, { Component } from 'react';
import './App.css';

import { InputGroup, Input } from 'reactstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './components/Test';


const Home = () => {
  return <h1>Home</h1>
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    
    <Router>
      <Route path="/" component={Home} />
    </Router>

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/test" render={() => <Test name="Testing" />} />
          </div>
          
        </Router>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Busca de Processos</h3>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <InputGroup className="input-busca text-center">
                <Input placeholder="Pesquise por uma informação do processo" />
              </InputGroup>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col">
              <span>Você pode criar um novo processo <a href="">clicando aqui</a>.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
