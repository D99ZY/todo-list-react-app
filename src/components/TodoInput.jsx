import PropTypes from 'prop-types';

export default function TodoInput(props) {
  const { todoItem, setTodoItem, handleAddTodos } = props;

  const handleAdd = () => {
    if (todoItem.value.trim() !== '') {
      handleAddTodos({ id: todoItem.id, value: todoItem.value });
      setTodoItem({ ...todoItem, id: todoItem.id + 1, value: '' });
    }
  };

  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoItem.value}
        onChange={(e) => {
          setTodoItem({ ...todoItem, value: e.target.value });
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          handleAdd();
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
