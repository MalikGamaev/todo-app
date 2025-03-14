import React from 'react'

import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'All',
    }
  }

  addTodo = (text) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      body: text,
      checked: false,
      date: new Date(),
    }

    this.setState(({ todos }) => ({ todos: [...todos, newTodo] }))
  }

  deleteTodo = (id) => {
    this.setState(({ todos }) => ({ todos: todos.filter((todo) => todo.id !== id) }))
  }

  changeFilter = (filter) => {
    this.setState({ filter })
  }

  filterTodos = () => {
    const { todos, filter } = this.state
    const all = filter === 'All'
    const completed = filter === 'Completed'
    return todos.filter((todo) => {
      return all ? true : completed ? todo.checked === true : todo.checked === false
    })
  }

  changeChecked = (id, check) => {
    this.setState(({ todos }) =>
      todos.map((todo) => {
        if (todo.id === id) todo.checked = check
        return todo
      }),
    )
  }

  editTodo = (id, text) => {
    this.setState(({ todos }) =>
      todos.map((todo) => {
        if (todo.id === id) todo.body = text
        return todo
      }),
    )
  }

  clearCompleted = () => {
    this.setState(({ todos }) => ({ todos: todos.filter((todo) => todo.checked !== true) }))
  }

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm addTodo={this.addTodo} />
        <section className="main">
          <TaskList
            todos={this.filterTodos()}
            editTodo={this.editTodo}
            deleteTodo={this.deleteTodo}
            changeChecked={this.changeChecked}
          />
          <Footer
            clearCompleted={this.clearCompleted}
            todos={this.state.todos}
            filter={this.state.filter}
            changeFilter={this.changeFilter}
          />
        </section>
      </section>
    )
  }
}

export default App
