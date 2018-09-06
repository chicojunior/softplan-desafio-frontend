import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Home extends Component {

  constructor(props) {
    super(props)
  }
  
  
  render() {
    const handleToUpdate = this.props.handleToUpdate
    return (
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
              <Input 
                onBlur={() => handleToUpdate('true')}
                placeholder="Pesquise por uma informação do processo" 
              />
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
    );
  }
}

export default Home;
