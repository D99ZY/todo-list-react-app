import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square" />
        <i className="fa-regular fa-trash-can" />
      </div>
    </li>
  );
}

TodoCard.propTypes = { children: PropTypes.string.isRequired };
