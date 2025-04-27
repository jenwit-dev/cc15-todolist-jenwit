import "./App.scss";
import {
  FaHome,
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/ListItem.jsx";
import Lists from "../components/Lists.jsx";
import TodoHeader from "../components/Todo/TodoHeader.jsx";
import TodoCreate from "../components/Todo/TodoCreate.jsx";
import TodoLists from "../components/Todo/TodoLists.jsx";
import TodoForm from "../components/Todo/TodoForm.jsx";

function App() {
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
          <TodoCreate />
          {/* TodoLists */}
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;
