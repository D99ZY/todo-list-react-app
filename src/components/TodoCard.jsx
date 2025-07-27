import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { todoItem, handleEditTodo, handleDeleteTodo } = props;

  return (
    <li className="todoItem">
      <p>{todoItem.value}</p>
      <div className="actionsContainer">
        <button
          type="button"
          aria-label="Edit"
          onClick={() => {
            handleEditTodo(todoItem);
          }}
        >
          <i className="fa-solid fa-pen-to-square" />
        </button>
        <button
          type="button"
          aria-label="Delete"
          onClick={() => {
            handleDeleteTodo(todoItem);
          }}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
