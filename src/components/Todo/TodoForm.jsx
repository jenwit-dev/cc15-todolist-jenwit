import { useState } from "react";

import { Button } from "../common/button/Button";
import styles from "./TodoForm.module.scss";

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const handleChangeInput = function (event) {
    // console.log("typing...");
    if (isError) setIsError(false);
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    if (taskInput.trim() === "") {
      setIsError(true);
      return;
    }
    // console.log("submit");

    // const newTodoLists = [newTodo, ...props.data];
    props.addTodo(taskInput);
    props.setIsOpenForm(false);
  };

  const handleCancel = function (event) {
    // console.log("cancel");
    props.setIsOpenForm(false);
    // setIsCancel(!isCancel);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        onChange={handleChangeInput}
        value={taskInput}
      />
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
