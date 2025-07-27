import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const [todoId, setTodoId] = useState(0);
  const [todoValue, setTodoValue] = useState('');

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        type="button"
        onClick={() => {
          handleAddTodos({ id: todoId, text: todoValue });
          setTodoId(todoId + 1);
          setTodoValue('');
        }}
      >
        Add
      </button>
    </header>
  );
}

TodoInput.propTypes = { handleAddTodos: PropTypes.func.isRequired };
