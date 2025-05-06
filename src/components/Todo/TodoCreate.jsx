import { useState } from "react";

import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";
// function CreateTodo() {
//   return <div>CreateTodo</div>;
// }

// export default CreateTodo;

// JS value ไม่สามารถทำให้ React Rerender ได้

function TodoCreate(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  // console.log(isOpenForm);

  const handleClick = function (event) {
    // console.log("clicked");
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit="Add Task"
          setIsOpenForm={setIsOpenForm}
          addTodo={props.addTodo}
        />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <span className={styles.todo__create__button}>
            <div className={styles.todo__create__button__plus}>+</div>
          </span>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
