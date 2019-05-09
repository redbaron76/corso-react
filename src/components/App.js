import React, { Component } from 'react';
import Button from './Button';
import { PLUS, MINUS, SET, RESET } from '../config/const';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      initCount: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operator) {
    // Gestore del click

    let c = this.state.count;

    switch (operator) {
      case '+':
        c++;
        // c = c + 1;
        // c += 1;
        break;
      case '-':
        c--;
        break;
      case 'set':
        c = this.state.initCount;
        break;
      case 'reset':
      default:
        c = 0;
    }

    this.setState({ count: c, initCount: 0 });

    /*if (operator === '+') {
      this.setState({ count: this.state.count + 1 });
    } else if (operator === '-') {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ count: 0 });
    }*/
  }

  handleChange(e) {
    let n = Number(e.target.value);
    // 1 == '1' true
    // 1 !== '1' false
    // var a = '1'
    if (typeof n === 'number' && !isNaN(n)) {
      this.setState({ initCount: n });
    }
  }

  render() {
    return (
      <div>
        <h1>Contatore</h1>
        <div>
          <Button click={this.handleClick} label={PLUS} />
          <p>{this.state.count}</p>
          <Button click={this.handleClick} label={MINUS} />
        </div>
        <br />
        <div>
          <Button click={this.handleClick} label={RESET} />
          <input onChange={e => this.handleChange(e)} size={5} value={this.state.initCount} />
          <Button click={this.handleClick} label={SET} />
        </div>
      </div>
    );
  }
}

export default App;
