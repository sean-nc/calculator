import React from 'react';
import './App.css';

function Button(props) {
  return (
    <button>
      {props.value}
    </button>
  )
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'input': '',
      'values': [],
    }
  }

  render() {
    return (
      <div>
        <div>
          <input></input>
        </div>

        <div>
          <Button value={'c'} />
          <Button value={'+/-'} />
          <Button value={'%'} />
          <Button value={'/'} />
        </div>

        <div>
          <Button value={7} />
          <Button value={8} />
          <Button value={9} />
          <Button value={'x'} />
        </div>

        <div>
          <Button value={4} />
          <Button value={5} />
          <Button value={6} />
          <Button value={'-'} />
        </div>

        <div>
          <Button value={1} />
          <Button value={2} />
          <Button value={3} />
          <Button value={'+'} />
        </div>

        <div>
          <Button value={0} />
          <Button value={'.'} />
          <Button value={'='} />
        </div>
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
