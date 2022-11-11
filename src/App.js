import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {

  let nameT = "Stevie T"

  const [name, setName] = useState('')
  const [todos, setTodos] = useState([
    { id: '1', title: 'Do HomeWork 1' },
    { id: '2', title: 'Do HomeWork 2' },
    { id: '3', title: 'Do HomeWork 3' }
  ])

  let onChangeInput = (event) => {
    setName(event.target.value)
  }

  let handleOnClickButton = () => {
    if (!name) {
      alert('Empty Name')
      return;
    } else {
      let newTodos = { id: '4', title: name }
      setTodos([...todos, newTodos])
      setName('')
    }
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Hook with {nameT}</h2>
        <Todo
          todos={todos}

        />
        <input type='text' value={name} onChange={(event) => onChangeInput(event)} />
        <button onClick={() => handleOnClickButton()}>Click</button>
      </header>
    </div>

  );
}

export default App;
