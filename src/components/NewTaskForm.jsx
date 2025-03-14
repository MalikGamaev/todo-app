import PropTypes from 'prop-types'
import React from 'react'

class NewTaskForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  render() {
    const onHandlerSubmit = (e) => {
      e.preventDefault()
      this.props.addTodo(this.state.value.trim())
      this.setState({ value: '' })
    }
    return (
      <form onSubmit={onHandlerSubmit} className="header">
        <h1>Todos</h1>
        <input
          onChange={(e) => this.setState({ value: e.target.value })}
          value={this.state.value}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default NewTaskForm
