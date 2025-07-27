import { useCallback, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);

  const handleAddTodos = useCallback((newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
