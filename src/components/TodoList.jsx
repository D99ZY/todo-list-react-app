import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todoList, handleEditTodo, handleDeleteTodo } = props;

  return (
    <ul className="main">
      {todoList.map((todoItem) => {
        return (
          <TodoCard
            key={todoItem.id}
            todoItem={todoItem}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.string.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
