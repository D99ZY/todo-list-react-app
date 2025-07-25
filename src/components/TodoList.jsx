import TodoCard from './TodoCard';

export default function TodoList() {
  const todoList = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <ul className="main">
      {todoList.map((todo) => {
        return (
          <TodoCard key={todo.id}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
