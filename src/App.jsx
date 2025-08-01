import { useCallback, useEffect, useRef, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  // Holds the list of all todos
  const [todoList, setTodoList] = useState([]);

  // Tracks the current todo being entered or edited
  const [todoItem, setTodoItem] = useState({ id: 0, value: '' });

  // Ref to call focus on input field from child component
  const inputRef = useRef(null);

  // Persist todos to localStorage whenever the todo list changes
  const persistData = useCallback(() => {
    if (todoList.length !== 0) {
      localStorage.setItem('todoList', JSON.stringify({ todoList }));
    }
  }, [todoList]);

  // Triggers persistence effect when todoList changes
  useEffect(() => {
    persistData();
  }, [persistData, todoList]);

  // Adds a new todo item to the list
  const handleAddTodos = useCallback((newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  }, []);

  // Deletes a todo from the list
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

  // Prepares a todo for editing:
  // - Sets it in the input field
  // - Deletes it from the list
  // - Focuses the input so the user can continue editing
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

  // Loads todos from localStorage when app mounts
  useEffect(() => {
    if (localStorage) {
      const localTodoList = localStorage.getItem('todoList');
      if (localTodoList) {
        const parsedLocalTodoList = JSON.parse(localTodoList).todoList;
        if (parsedLocalTodoList.length !== 0) {
          setTodoList(parsedLocalTodoList);

          // Start new todo ID at one higher than the last saved todo
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
