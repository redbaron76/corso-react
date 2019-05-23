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
    this.operators = [];

    this.state = {
      display: 0,
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  updateDigits(digit) {
    console.log('digit:', digit);
    // check se DOT è il primo digit senza ZERO
    if (this.digits.length === 0 && digit === DOT) this.digits.push('0');
    if (digit !== DOT || (digit === DOT && !includes(this.digits, digit))) {
      // exit se a 0 segue un altro 0
      if (this.digits[0] === '0' && digit === '0') return false;
      this.digits.push(digit);
      this.setState({ display: this.digits.join('') });
    }
  }

  setOperation(operation) {
    // Non eseguire operazione se non ho almeno una cifra
    if (this.digits.length === 0) return false;

    console.log('operation:', operation);
    // salvo operatore
    this.setState({ operation });
    // salvo primo operando
    const firstNumber = this.state.display;
    // aggiungo primo operando
    this.operators.push(parseFloat(firstNumber));
    // reset del this.digits
    this.digits = [];

    console.log('this.operators', this.operators, 'this.digits', this.digits);
  }

  doComputation() {
    const secondNumber = this.state.display;
    this.operators.push(parseFloat(secondNumber));

    // Non eseguire computazione se non ho 2 operatori
    if (this.operators.length !== 2) return false;

    console.log(this.operators);

    let result = '';

    switch (this.state.operation) {
      case PLUS:
        result = sum(this.operators);
        break;
      case MINUS:
        result = subtract(this.operators[0], this.operators[1]);
        break;
      case MULTI:
        result = multiply(this.operators[0], this.operators[1]);
        break;
      case DIVIDE:
        result = divide(this.operators[0], this.operators[1]);
        break;
    }

    this.operators = [];
    this.digits = [];
    this.setState({ display: parseFloat(result), operation: '' });
  }

  handleClick(label) {
    // Gestore del click
    // console.log('label:', label);

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
    const buttons = [
      '7',
      '8',
      '9',
      DIVIDE,
      '4',
      '5',
      '6',
      MULTI,
      '1',
      '2',
      '3',
      MINUS,
      '0',
      DOT,
      EQUAL,
      PLUS,
    ];

    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div id="calculator">
          <Display value={this.state.display} />
          {buttons.map((label, index) => (
            <Button key={'button-' + index} label={label} click={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
