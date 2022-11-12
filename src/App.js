import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {

  let nameT = "Stevie T"

  const [name, setName] = useState('')
  const [todos, setTodos] = useState([
    { id: '1', title: 'Do HomeWork 1', type: 'trent' },
    { id: '2', title: 'Do HomeWork 2', type: 'robbo' },
    { id: '3', title: 'Do HomeWork 3', type: 'hendo' },
    { id: '4', title: 'Do HomeWork 4', type: 'milly' }

  ])

  useEffect(() => {
    console.log('run userEffect', Math.floor(Math.random() * 10000 + 1))
  }, [name]);

  useEffect(() => {
    console.log('run userEffect todos', Math.floor(Math.random() * 10000 + 1))
  }, [todos]);

  let onChangeInput = (event) => {
    setName(event.target.value)
  }

  let handleOnClickButton = () => {
    if (!name) {
      alert('Empty Name')
      return;
    } else {
      let newTodos = { id: Math.floor(Math.random() * 10000 + 1), title: name, type: 'trent' }
      setTodos([...todos, newTodos])
      setName('')
    }
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos
    currentTodos = todos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    alert('Times up')
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Switch>
          <Route exact path="/">
            <Covid />
          </Route>
          <Route path="/time">
            <CountDown
              onTimesup={onTimesup} />
            <span>--------------------</span>
            <NewCountDown
              onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'AllCode'}
              deleteDataTodo={deleteDataTodo}
            />
            <input type='text' value={name} onChange={(event) => onChangeInput(event)} />
            <button onClick={() => handleOnClickButton()}>Click</button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
