import { createContext } from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/todos";
axios.defaults.baseURL = "http://localhost:8080/api";

// ชื่อ context
const TodoContext = createContext();

// Setup Context ฝั่ง Provider
function TodoContextProvider(props) {
  const [allTodos, setAllTodos] = useState([]);
  const [showTodos, setShowTodos] = useState([]);

  const searchTodo = (keyword) => {
    if (keyword.trim() === "") setShowTodos(allTodos);
    const newShowTodos = allTodos.filter((todoObj) => {
      return todoObj.task.toLowerCase().includes(keyword.toLowerCase());
    });
    setShowTodos(newShowTodos);
  };

  const fetchAllTodos = async () => {
    try {
      const { data } = await axios.get("/todos");
      const newTodoLists = data.todos.map((todo) => {
        const newTodo = { ...todo, due_date: todo.date };
        delete todo.date;
        return newTodo;
      });
      setAllTodos(newTodoLists);
      setShowTodos(newTodoLists);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const addTodo = async (taskInput) => {
    const newTodo = {
      task: taskInput,
      status: false,
      due_date: dayjs().format("D-M-YY"),
    };
    try {
      const { data } = await axios.post("/todos", newTodo);

      setAllTodos((prev) => [data.todo, ...prev]);
      setShowTodos((prev) => [data.todo, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (todoId, newTodoObj) => {
    try {
      const foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if (foundIndex !== -1) {
        const requestObj = { ...allTodos[foundIndex], ...newTodoObj };

        const { data } = await axios.put(`/todos/${todoId}`, requestObj);
        const newTodoLists = [...allTodos];
        newTodoLists[foundIndex] = data.todo;
        setAllTodos(newTodoLists);
        setShowTodos(newTodoLists);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      if (response.status === 204) {
        setAllTodos((prev) => prev.filter((item) => item.id !== todoId));
        setShowTodos((prev) => prev.filter((item) => item.id !== todoId));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sharedObj = {
    allTodos,
    showTodos,
    addTodo,
    fetchAllTodos,
    editTodo,
    deleteTodo,
    searchTodo,
  };

  return (
    <TodoContext.Provider value={sharedObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
