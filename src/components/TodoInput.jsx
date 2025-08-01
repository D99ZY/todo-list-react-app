import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const TodoInput = forwardRef((props, ref) => {
  const { todoItem, setTodoItem, handleAddTodos } = props;

  // Ref to the actual <input> DOM element
  const inputRef = useRef(null);

  // Adds the current todo to the list and clears the input
  const handleAdd = () => {
    if (todoItem.value.trim() !== '') {
      handleAddTodos({ id: todoItem.id, value: todoItem.value });
      setTodoItem({ ...todoItem, id: todoItem.id + 1, value: '' });
    }
  };

  // Expose focusInput function to parent via ref
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      const inputField = inputRef.current;
      if (inputField) {
        inputField.focus();
        // Move cursor to end of text
        inputField.setSelectionRange(inputField.value.length, inputField.value.length);
      }
    },
  }));

  return (
    <header>
      <input
        placeholder="Enter todo..."
        ref={inputRef}
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
});

TodoInput.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  setTodoItem: PropTypes.func.isRequired,
  handleAddTodos: PropTypes.func.isRequired,
};

export default TodoInput;
