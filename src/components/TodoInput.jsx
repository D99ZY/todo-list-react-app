import PropTypes from 'prop-types';

export default function TodoInput(props) {
  const { todoItem, setTodoItem, handleAddTodos } = props;

  return (
    <header>
      <input
        value={todoItem.value}
        onChange={(e) => {
          setTodoItem({ ...todoItem, value: e.target.value });
        }}
        placeholder="Enter todo..."
      />
      <button
        type="button"
        onClick={() => {
          handleAddTodos({ id: todoItem.id, value: todoItem.value });
          setTodoItem({ ...todoItem, id: todoItem.id + 1, value: '' });
        }}
      >
        Add
      </button>
    </header>
  );
}

TodoInput.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  setTodoItem: PropTypes.func.isRequired,
  handleAddTodos: PropTypes.func.isRequired,
};
