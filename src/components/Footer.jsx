import PropTypes from 'prop-types'
import React from 'react'

import TasksFilter from './TasksFilter'

class Footer extends React.Component {
  render() {
    const { filter, changeFilter, todos, clearCompleted } = this.props
    let count = 0

    todos.forEach((todo) => (!todo.checked ? count++ : null))

    return (
      <footer className="footer">
        <span className="todo-count"> {count} items left</span>
        <TasksFilter filter={filter} changeFilter={changeFilter} />
        <button onClick={() => clearCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.defaultProps = {
  filter: 'All',
  todos: [],
}

Footer.propTypes = {
  filter: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      date: PropTypes.number.isRequired,
    }),
  ),
  changeFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
}

export default Footer
