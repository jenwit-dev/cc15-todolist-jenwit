import "./App.scss";
import AppBar from "../components/Common/AppBar/AppBar.jsx";
import TodoHeader from "../components/Todo/TodoHeader.jsx";
import TodoCreate from "../components/Todo/TodoCreate.jsx";
import TodoLists from "../components/Todo/TodoLists.jsx";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate />
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;
