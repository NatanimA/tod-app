// eslint-disable-next-line
import { Component } from 'react';
// eslint-disable-next-line
import DisplayTodo from './components/DisplayTodo';
// eslint-disable-next-line
import AddToDO from './components/AddToDo';
// eslint-disable-next-line
import Header from './components/Header';
// eslint-disable-next-line
import NavBar from './components/NavBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
  }

  componentDidMount() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify(this.state.todo));
    } else {
      this.setState({
        todo: JSON.parse(localStorage.getItem('todos')),
      });
    }
  }

  onHandleAddToDO = (content) => {
    const todoObj = { content: null, complete: false, id: null };
    const todo = JSON.parse(localStorage.getItem('todos'));
    todoObj.content = content;
    todo.push(todoObj);
    todo.forEach((item, index) => {
      item.id = index;
    });
    this.setState({
      todo,
    });

    localStorage.setItem('todos', JSON.stringify(todo));
  }

  onHandleCheckBoxChange = (id) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  onDeleteHandler = (id) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    let selectedTodo = null;
    todos.forEach((item) => {
      if (item.id === id) {
        selectedTodo = item;
      }
    });
    if (selectedTodo.complete) {
      const filteredToDos = todos.filter((item) => item.id !== id);
      localStorage.setItem('todos', JSON.stringify(filteredToDos));
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos')),
      });
    }
  }

  render() {
    return (

      <div className="App" >
        <NavBar />
        <Header />
        <div className='app-container'>
          <AddToDO onHandleAddToDO={this.onHandleAddToDO} />
          <DisplayTodo todos={this.state.todo}
          onDeleteHandler={this.onDeleteHandler}
          onHandleCheckBoxChange={this.onHandleCheckBoxChange} />
        </div>
        </div>
    );
  }
}
