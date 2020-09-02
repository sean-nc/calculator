import React from 'react';
import './App.css';
const math = require('mathjs');

function Button(props) {
  return (
    <button value={props.value} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function Display(props) {
  return (
    <div>
      <p>{props.values}</p>
      {props.input}
    </div>
  )
}

function Values(props) {
  return (
    <ul>
      {
        props.values.map((item, i) => {
          return <li key={i}>{item}</li>
        })
      }
    </ul>
  )
}

class Keyboard extends React.Component {
  renderButton(i) {
    return (
      <Button 
        value={i}
        onClick={() => this.props.onClick(i)} />
    )
  }

  render() {
    return(
      <div>
        <div>
          {this.renderButton('c')}
          {this.renderButton('(')}
          {this.renderButton(')')}
          {this.renderButton('/')}
        </div>

        <div>
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('*')}
        </div>

        <div>
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>

        <div>
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>

        <div>
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
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
    const button = document.querySelector(`button[value="${e.key}"]`);

    if (button) {
      button.click();
    }
  }

  handleButtonPress(e) {
    console.log(e)

    if (e === 'c') {
      this.setState({
        'input': '',
        'values': []
      })
    } else if (e === '.') {
      if( this.state.input.indexOf('.') === -1) {
        this.setState({
          'input': this.state.input + e
        })
      }
    } else if (e.match(/\d/)) {
      this.setState({
        'input': this.state.input + e
      })
    } else if (['/', '*', '+', '-', '(', ')'].includes(`${e}`)) {
      const values = this.state.values
      values.push(this.state.input)
      values.push(e)
      this.setState({
        'input': '',
        'values': values
      })
    } else if (e === '=') {
      try {
        let equation = this.state.values.join(' ')
        equation += this.state.input.toString()
        const answer = math.evaluate(equation)

        this.setState ({
          'input': answer.toString(),
          'values': []
        })
      } catch(err) {
        console.log(err)
        this.setState ({
          'input': 'Error',
          'values': []
        })
      }
    } else {
      console.log(e)
    }
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
        <Values
          values={this.state.values}
        />
        <Display 
          input={this.state.input}
        />
        <Keyboard 
          onClick={i => this.handleButtonPress(i)}
        />
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
