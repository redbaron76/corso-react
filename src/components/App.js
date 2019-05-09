import React, { Component } from 'react';
import Button from './Button';

import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Gestore del click
  }

  render() {
    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div className="calculator">
          <Button label="7" click={() => console.log('Button click')} />
          <Button label="8" click={() => console.log('Button click')} />
          <Button label="9" click={() => console.log('Button click')} />
          <Button label="X" click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
          <Button click={() => console.log('Button click')} />
        </div>
      </div>
    );
  }
}

export default App;
