import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {

  let nameT = "Stevie T"

  const [name, setName] = useState('')
  const [todos, setTodos] = useState([
    { id: '1', title: 'Do HomeWork 1', type: 'trent' },
    { id: '2', title: 'Do HomeWork 2', type: 'robbo' },
    { id: '3', title: 'Do HomeWork 3', type: 'hendo' },
    { id: '4', title: 'Do HomeWork 4', type: 'milly' }

  ])

  let onChangeInput = (event) => {
    setName(event.target.value)
  }

  let handleOnClickButton = () => {
    if (!name) {
      alert('Empty Name')
      return;
    } else {
      let newTodos = { id: '4', title: name, type: 'trent' }
      setTodos([...todos, newTodos])
      setName('')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Hook with {nameT}</h2>
        <Todo
          todos={todos}
          title={'AllCode'}
        />

        <Todo
          todos={todos.filter(item =>
            item.type === 'robbo'
          )}
          title={`Trent todos`}
        />

        <input type='text' value={name} onChange={(event) => onChangeInput(event)} />
        <button onClick={() => handleOnClickButton()}>Click</button>
      </header>
    </div>

  );
}

export default App;
