import { HiOutlineCheck } from "react-icons/hi";
import { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";

import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";

function TodoItem(props) {
  const { id, task, done, date, deleteTodo, toggleTodo } = props;
  const [isOpenForm, setIsOpenForm] = useState(false);
  // console.log(id);
  const handleClick = () => {
    return setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit Task" setIsOpenForm={setIsOpenForm} />
      ) : (
        <li className={styles.todo}>
          <div
            className={`${styles.todo__checkbox} ${
              done ? styles.todo__checkbox__done : ""
            }`}
            onClick={() => toggleTodo(id, done)}
          >
            <HiOutlineCheck className={styles.todo__checkbox__icon} />
          </div>
          <p
            className={`${styles.todo__task} ${
              done ? styles.todo__task__done : ""
            }`}
            onClick={() => toggleTodo(id, done)}
          >
            {task}
          </p>
          <span className={styles.todo__date}>
            {dayjs(date).format("D-M-YY")}
          </span>
          <div className={styles.todo__action}>
            <span className={styles.todo__action__edit} onClick={handleClick}>
              <FaPen />
            </span>
            <span
              className={styles.todo__action__delete}
              onClick={() => deleteTodo(id)}
            >
              <FaTrashAlt />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
