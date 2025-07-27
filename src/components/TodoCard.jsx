import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { todo, handleDeleteTodo } = props;

  return (
    <li className="todoItem">
      <p>{todo.text}</p>
      <div className="actionsContainer">
        <button type="button" aria-label="Edit">
          <i className="fa-solid fa-pen-to-square" />
        </button>
        <button
          type="button"
          aria-label="Delete"
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
