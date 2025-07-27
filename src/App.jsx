import { useCallback, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = useCallback((newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const handleDeleteTodo = useCallback(
    (id) => {
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    },
    [todos]
  );

  const handleEditTodo = useCallback((index) => {}, []);

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
