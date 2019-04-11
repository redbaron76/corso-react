import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
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
      case 'reset':
      default:
        c = 0;
    }

    this.setState({ count: c });

    /*if (operator === '+') {
      this.setState({ count: this.state.count + 1 });
    } else if (operator === '-') {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ count: 0 });
    }*/
  }

  render() {
    return (
      <div>
        <h1>Contatore</h1>
        <button onClick={() => this.handleClick('+')}>+</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleClick('-')}>-</button>
        <div>
          <button onClick={() => this.handleClick('reset')}>RESET</button>
          <input size={5} defaultValue={0} />
          <button onClick={() => this.handleClick('set')}>SET</button>
        </div>
      </div>
    );
  }
}

export default App;
