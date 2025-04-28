import { useState } from "react";

import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";
import { Button } from "../common/button/Button";
import styles from "./TodoForm.module.scss";

function TodoForm(props) {
  const [isError, setIsError] = useState(true);
  // const [isCancel, setIsCancel] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log("submit");
  };

  const handleCancel = function (event) {
    console.log("cancel");
    props.setIsOpenForm(false);
    // setIsCancel(!isCancel);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input className={styles.todo__form__input} placeholder="Task Name" />
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
