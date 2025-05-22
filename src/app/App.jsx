import "./App.scss";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

import Header from "../components/Header";
import ListItem from "../components/ListItem.jsx";
import Lists from "../components/Lists.jsx";
import TodoHeader from "../components/Todo/TodoHeader.jsx";
import TodoCreate from "../components/Todo/TodoCreate.jsx";
import TodoLists from "../components/Todo/TodoLists.jsx";
import TodoForm from "../components/Todo/TodoForm.jsx";

// const data = [
//   {
//     id: nanoid(),
//     task: "Suspendisse potenti.",
//     status: false,
//     due_date: "2023-04-26",
//   },
//   {
//     id: nanoid(),
//     task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//     status: false,
//     due_date: "2023-05-08",
//   },
//   {
//     id: nanoid(),
//     task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//     status: false,
//     due_date: "2023-04-30",
//   },
// ];
const BASE_URL = "http://localhost:8080/api/todos";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    async function fetchAllTodos() {
      try {
        const response = await fetch(BASE_URL, {
          method: "GET",
        });
        const todoData = await response.json();
        // console.log(todoData);
        const newTodoLists = todoData.todos.map((todo) => {
          const newTodo = { ...todo, due_date: todo.date };
          delete todo.date;
          return newTodo;
        });
        setAllTodos(newTodoLists);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllTodos();
  }, []);

  const addTodo = async (taskInput) => {
    const newTodo = {
      // id: nanoid(),
      task: taskInput,
      status: false,
      due_date: dayjs().format("D-M-YY"),
    };
    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      };
      const response = await fetch(BASE_URL, option);
      const data = await response.json();
      console.log(data);
      setAllTodos((prev) => [data.todo, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (todoId) => {
    // return console.log(todoId);
    // const index = allTodos.findIndex((item) => item.id === todoId);
    try {
      const response = await fetch(`${BASE_URL}/${todoId}`, {
        method: "DELETE",
      });
      setAllTodos((prev) => prev.filter((item) => item.id !== todoId));
    } catch (err) {
      console.log(err);
    }
  };

  // const toggleTodo = (todoId, done) => {
  //   // return console.log(todoId);
  //   // return console.log(allTodos.findIndex((item) => item.id === todoId));
  //   const newAllTodos = [...allTodos];
  //   // return console.log(newAllTodos.findIndex((item) => item.id === todoId));
  //   newAllTodos[newAllTodos.findIndex((item) => item.id === todoId)].status =
  //     !done;
  //   // return console.log(
  //   //   newAllTodos[newAllTodos.findIndex((item) => item.id === todoId)]
  //   // );
  //   setAllTodos(newAllTodos);

  //   // setAllTodos(
  //   //   (prev) =>
  //   //     (prev[prev.findIndex((item) => item.id === todoId)].status = !done)
  //   // );
  // };

  const editTodo = async (todoId, newTodoObj) => {
    // console.log(newTodoObj);
    // console.log(todoId, newTodoObj);
    // const newTodoLists = allTodos.map((todo) => {
    //   if (todo.id !== todoId) return todo;
    //   else return { ...todo, ...newTodoObj };
    // });
    // console.log(newTodoLists);

    // Format not compatible with objects for sending HTTP request (not array but it has to be object with required task and status keys according to API doc)
    // const newTodoLists = allTodos.reduce((acc, todo) => {
    //   if (todo.id !== todoId) acc.push(todo);
    //   else acc.push({ ...todo, ...newTodoObj });
    //   return acc;
    // }, []);
    // setAllTodos(newTodoLists);
    try {
      const foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if (foundIndex !== -1) {
        const requestObj = { ...allTodos[foundIndex], ...newTodoObj };
        const option = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestObj),
        };
        const response = await fetch(`${BASE_URL}/${todoId}`, option);
        const data = await response.json();
        // console.log(data);
        const newTodoLists = [...allTodos];
        newTodoLists[foundIndex] = data.todo;
        setAllTodos(newTodoLists);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: false },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];

  // <ListItem text="Project-A" icon={<FaInbox />} active={true} />
  // <ListItem text="Project-B" icon={<FaInbox />} active={false} />;
  const projectLists = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: false },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            {/* <ul className="list"> */}
            {/* <li className="list__item">
                <FaInbox className="list__item__icon" />
                <p className="list__item__text">Inbox</p>
              </li>
              <li className="list__item">
                <FaCalendar className="list__item__icon" />
                <p className="list__item__text">Today</p>
              </li>
              <li className="list__item">
                <FaCalendarAlt className="list__item__icon" />
                <p className="list__item__text">Next 7 days</p>
              </li> */}
            {/* {generalLists.map((obj) => (
              <ListItem
                key={obj.id}
                text={obj.text}
                icon={obj.icon}
                active={obj.active}
              />
            ))} */}
            {/* <ListItem text="Inbox" icon={<FaInbox />} active={true} />
              <ListItem text="Today" icon={<FaCalendar />} active={false} />
              <ListItem
                text="Next 7 days"
                icon={<FaCalendarAlt />}
                active={false}
              /> */}
            {/* </ul> */}
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* List */}
              <Lists data={projectLists} />
              {/* <ul className="list">
                {projectLists.map((obj) => {
                  obj.key = obj.id;
                  delete obj.id;
                  return <ListItem {...obj} />;
                })} */}
              {/* {projectLists.map((obj) => (
                  <ListItem
                    key={obj.id}
                    // text={obj.text}
                    // icon={obj.icon}
                    // active={obj.active}
                    {...obj} // แทรก expression แล้วก็ spread obj เป็นการ spread props
                  />
                ))} */}
              {/* <ListItem text="Project-A" icon={<FaInbox />} active={true} />
                <ListItem text="Project-B" icon={<FaInbox />} active={false} /> */}
              {/* </ul> */}
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          {/* Header */}
          <TodoHeader />
          {/* CreateTodo */}
          <TodoCreate addTodo={addTodo} />
          {/* TodoLists */}
          <TodoLists
            data={allTodos}
            deleteTodo={deleteTodo}
            // toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
