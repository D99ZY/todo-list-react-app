export default function TodoList() {
  const todoList = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <ul className="main">
      {todoList.map((todo) => {
        return (
          <li className="todoItem" key={todo.id}>
            {todo}
            <i className="fa-solid fa-pen-to-square" />
          </li>
        );
      })}
    </ul>
  );
}
