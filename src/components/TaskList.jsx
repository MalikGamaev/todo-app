import PropTypes from 'prop-types'
import React from 'react'

import Task from './Task'

class TaskList extends React.Component {
  render() {
    const { todos, editTodo, changeChecked, deleteTodo } = this.props

    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} changeChecked={changeChecked} />
        ))}
      </ul>
    )
  }
}

TaskList.defaultProps = {
  todos: [],
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      date: PropTypes.number.isRequired,
    }),
  ),
  editTodo: PropTypes.func.isRequired,
  changeChecked: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TaskList
