import { useState } from "react";

import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";

function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Add Task" setIsOpenForm={setIsOpenForm} />
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
