import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo) => {
        return (
          <TodoCard key={todo.id}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = { todos: PropTypes.string.isRequired };
