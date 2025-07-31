import { useCallback, useEffect, useRef, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({ id: 0, value: '' });
  const inputRef = useRef(null);

  const persistData = useCallback(() => {
    if (todoList.length !== 0) {
      localStorage.setItem('todoList', JSON.stringify({ todoList }));
    }
  }, [todoList]);

  useEffect(() => {
    persistData();
  }, [persistData, todoList]);

  const handleAddTodos = useCallback((newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  }, []);

  const handleDeleteTodo = useCallback(
    (todo) => {
      setTodoList(
        todoList.filter((item) => {
          return item.id !== todo.id;
        })
      );
    },
    [todoList]
  );

  const handleEditTodo = useCallback(
    (todo) => {
      setTodoItem({ ...todo, id: todoItem.id, value: todo.value });
      handleDeleteTodo(todo);
      setTimeout(() => {
        inputRef.current?.focusInput();
      }, 0);
    },
    [todoItem.id, handleDeleteTodo]
  );

  useEffect(() => {
    if (localStorage) {
      const localTodoList = localStorage.getItem('todoList');
      if (localTodoList) {
        const parsedLocalTodoList = JSON.parse(localTodoList).todoList;
        if (parsedLocalTodoList.length !== 0) {
          setTodoList(parsedLocalTodoList);
          const myId = parsedLocalTodoList.at(-1).id;
          setTodoItem({ id: myId + 1, value: '' });
        }
      }
    }
  }, []);

  return (
    <>
      <TodoInput
        ref={inputRef}
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todoList={todoList}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
