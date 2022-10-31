import { Component } from 'react';
// eslint-disable-next-line
import DisplayTodo from './components/DisplayTodo';
// eslint-disable-next-line
import AddToDO from './components/AddToDo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
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

  render() {
    return (
      <div className="App" >
        <AddToDO onHandleAddToDO={this.onHandleAddToDO} />
        <DisplayTodo />
        <button>Clear All Selected</button>
      </div>
    );
  }
}
