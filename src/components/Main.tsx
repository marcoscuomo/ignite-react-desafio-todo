import { useContext } from "react";

import { HeaderMain } from "./HeaderMain";
import { WithoutTodo } from "./WithoutTodo";
import { TodoList } from "./TodoList/TodoList";
import { TodoContext } from "../data/DataContext";

import styles from "./Main.module.css";

export function Main() {
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <main className={styles.container}>
      <HeaderMain />
      {todos!.length > 0 ? <TodoList /> : <WithoutTodo />}
    </main>
  );
}
