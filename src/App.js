import React, { Component } from 'react';
import DisplayTodo from './components/DisplayTodo';
import AddToDO from './components/AddToDo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todo:[
      { content: 'Do Loundary', complete: false, id: 0 },
    ]};
  }
  
  componentDidMount(){
    console.log("hello,I am MOunting")
    localStorage.setItem('todos', JSON.stringify(this.state.todo))
  }
  

  onHandleAddToDO = (content) => {
    const todoObj = {content:null,complete:false,id:null}
    const todo = [...this.state.todo];
    todoObj.content = content
    todo.push(todoObj)
    todo.forEach((item,index) =>{
      item.id=index
    })
    this.setState({
      todo:todo
    })

    localStorage.setItem('todos', JSON.stringify(todo))

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
