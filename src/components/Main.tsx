import { useContext } from "react";

import { HeaderMain } from "./HeaderMain";
import { WithoutTodo } from "./WithoutTodo";
import { TodoList } from "./TodoList/TodoList";
import { DataContext } from "../data/DataContext";

import styles from "./Main.module.css";

export function Main() {
  const { todos } = useContext(DataContext);
  console.log("todos ", todos);
  return (
    <main className={styles.container}>
      <HeaderMain />
      {todos.length > 0 ? <TodoList /> : <WithoutTodo />}
    </main>
  );
}
