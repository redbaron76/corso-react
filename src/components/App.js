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

    // Flag
    this.total = 0;

    // Memorizza primo e secondo operando
    this.operators = [];

    this.labels = [
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

    this.state = {
      display: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  updateDigits(digit) {
    console.log('digit:', digit);
    if (this.digits.length >= 1 && this.digits[0] === '0' && this.digits[1] !== DOT) {
      this.digits.shift();
      console.log('shifted digit:', digit);
    }

    if (this.digits.length === 0 && digit === DOT) this.digits.push('0');

    if (digit !== DOT || (digit === DOT && !includes(this.digits, digit))) {
      this.digits.push(digit);
      this.setState({ display: this.digits.join('') });
    }
  }

  setOperation(operation) {
    if (!this.state.display) return false;

    // salvo primo operando
    const firstNumber = parseFloat(this.state.display);

    if (this.operators.length === 1 && this.state.operation) {
      this.doComputation(true);
    } else {
      // aggiungo primo operando
      this.operators.push(firstNumber);
    }

    console.log('operation:', operation);
    // salvo operatore
    this.setState({ operation });

    // reset del this.digits
    this.digits = [];

    console.log('this.operators', this.operators, 'this.digits', this.digits);
  }

  doComputation(setTotal = false) {
    // Annulla = se non ho operndi e operatore
    if (this.operators.length !== 2 && !this.state.operation) return false;

    const secondNumber = parseFloat(this.state.display);
    this.operators.push(secondNumber);

    console.log('doComputation BEFORE RESULT', 'this.operators', this.operators);

    this.total = this.getResult();

    // imposta totale come primo operator
    this.operators = [];
    if (setTotal) this.operators.push(this.total);
    console.log('doComputation AFTER RESULT', 'this.operators', this.operators);

    this.digits = [];
    this.setState({ display: this.total, operation: '' });
  }

  getResult() {
    let result = 0;

    if (this.operators.length === 2) {
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
    }

    return parseFloat(parseFloat(result).toPrecision(12));
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
    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div id="calculator">
          <Display value={this.state.display} />
          {this.labels.map((label, index) => (
            <Button key={'btn-' + index} label={label} click={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
