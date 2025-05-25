import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";
import useTodo from "../../../hooks/useTodo";

function Search() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { searchTodo } = useTodo();

  const handleChangeInput = (e) => {
    setSearchKeyword(e.target.value);
    searchTodo(searchKeyword);
  };

  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="search"
        className={styles.search__input}
        value={searchKeyword}
        onChange={handleChangeInput}
      />
    </div>
  );
}

export default Search;
