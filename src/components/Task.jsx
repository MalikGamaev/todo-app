import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import React from 'react'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      value: props.todo.body,
    }
  }

  onHandlerSubmit = (e) => {
    e.preventDefault()
    const {
      todo: { id },
      editTodo,
    } = this.props
    editTodo(id, this.state.value)
    this.setState({ editing: false })
  }

  render() {
    const { todo, changeChecked, deleteTodo } = this.props
    const { id, body, checked, date } = todo

    return (
      <li className={checked ? 'completed' : this.state.editing ? 'editing' : null}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={(e) => changeChecked(id, e.target.checked)}
            checked={checked}
          />
          <label>
            <span className="description">{body}</span>
            <span className="created">{`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              addSuffix: true,
            })}`}</span>
          </label>
          <button onClick={() => this.setState({ editing: true })} className="icon icon-edit" />
          <button onClick={() => deleteTodo(id)} className="icon icon-destroy" />
        </div>
        {this.state.editing && (
          <form onSubmit={this.onHandlerSubmit}>
            <input
              onChange={(e) => this.setState({ value: e.target.value })}
              className="edit"
              type="text"
              value={this.state.value}
            />
          </form>
        )}
      </li>
    )
  }
}

Task.defaultProps = {
  todo: [],
}

Task.propTypes = {
  todo: PropTypes.arrayOf(
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

export default Task
