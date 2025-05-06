import "./App.scss";
import { useState } from "react";
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

const data = [
  {
    id: nanoid(),
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: nanoid(),
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: nanoid(),
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(data);

  const addTodo = (taskInput) => {
    const newTodo = {
      id: nanoid(),
      task: taskInput,
      status: false,
      due_date: dayjs().format("D-M-YY"),
    };

    setAllTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (todoId) => {
    // return console.log(todoId);
    // const index = allTodos.findIndex((item) => item.id === todoId);
    setAllTodos((prev) => prev.filter((item) => item.id !== todoId));
  };

  const toggleTodo = (todoId, done) => {
    // return console.log(todoId);
    // return console.log(allTodos.findIndex((item) => item.id === todoId));
    const newAllTodos = [...allTodos];
    // return console.log(newAllTodos.findIndex((item) => item.id === todoId));
    newAllTodos[newAllTodos.findIndex((item) => item.id === todoId)].status =
      !done;
    // return console.log(
    //   newAllTodos[newAllTodos.findIndex((item) => item.id === todoId)]
    // );
    setAllTodos(newAllTodos);

    // setAllTodos(
    //   (prev) =>
    //     (prev[prev.findIndex((item) => item.id === todoId)].status = !done)
    // );
  };

  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];

  // <ListItem text="Project-A" icon={<FaInbox />} active={true} />
  // <ListItem text="Project-B" icon={<FaInbox />} active={false} />;
  const projectLists = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
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
            toggleTodo={toggleTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
