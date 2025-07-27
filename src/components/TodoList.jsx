import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos, handleDeleteTodo } = props;

  return (
    <ul className="main">
      {todos.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.string.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
