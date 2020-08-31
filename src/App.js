import React from 'react';
import './App.css';

function Button(props) {
  return (
    <button>
      {props.value}
    </button>
  )
}

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div>
          <Button value={'c'} />
          <Button value={'('} />
          <Button value={')'} />
          <Button value={'/'} />
        </div>

        <div>
          <Button value={'7'} />
          <Button value={'8'} />
          <Button value={'9'} />
          <Button value={'*'} />
        </div>

        <div>
          <Button value={'4'} />
          <Button value={'5'} />
          <Button value={'6'} />
          <Button value={'-'} />
        </div>

        <div>
          <Button value={'1'} />
          <Button value={'2'} />
          <Button value={'3'} />
          <Button value={'+'} />
        </div>

        <div>
          <Button value={'0'} />
          <Button value={'.'} />
          <Button value={'='} />
        </div>
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <div>
        <input></input>
      </div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      'input': '',
      'values': [],
    }
  }

  handleKeyPress(e) {
    console.log(e.key)
  }

  componentDidMount(){
    document.addEventListener("keyup", this.handleKeyPress);
  }
  componentWillUnmount(){
    document.removeEventListener("keyup", this.handleKeyPress);
  }

  render() {
    return (
      <div className='calculator'>
        <Display />
        <Keyboard />
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
