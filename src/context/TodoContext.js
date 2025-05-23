import { createContext } from "react";

// ชื่อ context
const TodoContext = createContext();

// Setup Context ฝั่ง Provider
function TodoContextProvider(props) {
  const sharedObj = { value: 5 };
  return (
    <TodoContext.Provider value={sharedObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
