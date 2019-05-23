import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

import { PLUS, MINUS, MULTI, DIVIDE, EQUAL, DOT } from '../config/const';

import { sum, subtract, multiply, divide, includes } from 'lodash';

import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();

    // Memorizza le cifre e la virgola in sequenza
    this.digits = [];

    // Memorizza primo e secondo operando
    this.operation = [];

    this.state = {
      display: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  updateDigits(digit) {
    console.log('digit', digit);
    // check se DOT è il primo digit senza ZERO
    if (this.digits.length === 0 && digit === DOT) this.digits.push('0');
    // check una sola DOT
    if (digit !== DOT || (digit === DOT && !includes(this.digits, DOT))) {
      // exit se a 0 segue un altro 0
      if (this.digits[0] === '0' && digit === '0') return false;
      // incremento digits e mostro a display tutti i digits uniti da join
      this.digits.push(digit);
      this.setState({ display: this.digits.join('') });
    }
  }

  setOperation(operation) {
    console.log('setOperation', operation);
    // imposta operatore in state
    this.setState({ operation });
    // trasforma digits in primo numero
    const num = this.state.display;
    // set primo numero
    this.operation.push(parseFloat(num));
    // reset digits
    this.digits = [];

    console.log('this.operation', this.operation, 'this.digits', this.digits);
  }

  doComputation() {
    let val = '0';

    // trasforma digits in primo numero
    const num = this.state.display;
    // set primo numero
    this.operation.push(parseFloat(num));

    console.log('this.operation', this.operation);

    // eseguo l'operazione
    switch (this.state.operation) {
      case PLUS:
        val = sum(this.operation); // check documentazione
        break;
      case MINUS:
        val = subtract(this.operation[0], this.operation[1]);
        break;
      case MULTI:
        val = multiply(this.operation[0], this.operation[1]);
        break;
      case DIVIDE:
        val = divide(this.operation[0], this.operation[1]);
        break;
    }

    // Salva risultato operazione come float
    const result = parseFloat(val);

    // reset dell'array digits
    this.digits = [];
    // reset operation
    this.operation = [];
    // output del risultato e reset operatore
    this.setState({ display: result, operation: '' });
  }

  handleClick(label) {
    // Gestore del click
    console.log('handleClick', label);

    switch (label) {
      case PLUS:
      case MINUS:
      case MULTI:
      case DIVIDE:
        this.setOperation(label);
        break;
      case EQUAL:
        this.doComputation();
        break;
      case DOT:
      default:
        this.updateDigits(label);
    }
  }

  render() {
    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div id="calculator">
          <Display value={this.state.display} />
          <Button label="7" click={this.handleClick} />
          <Button label="8" click={this.handleClick} />
          <Button label="9" click={this.handleClick} />
          <Button label={DIVIDE} click={this.handleClick} orange />
          <Button label="4" click={this.handleClick} />
          <Button label="5" click={this.handleClick} />
          <Button label="6" click={this.handleClick} />
          <Button label={MULTI} click={this.handleClick} orange />
          <Button label="1" click={this.handleClick} />
          <Button label="2" click={this.handleClick} />
          <Button label="3" click={this.handleClick} />
          <Button label={MINUS} click={this.handleClick} orange />
          <Button label="0" click={this.handleClick} />
          <Button label={DOT} click={this.handleClick} />
          <Button label={EQUAL} click={this.handleClick} orange />
          <Button label={PLUS} click={this.handleClick} orange />
        </div>
      </div>
    );
  }
}

export default App;
