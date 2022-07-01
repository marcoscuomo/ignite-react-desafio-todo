import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { DataContext, todoContext } from "../src/data/DataContext";

import "./global.css";

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  const [todos, setTodos] = useState(todoContext.todos);

  return (
    <DataContext.Provider value={{ todos, setTodos }}>
      <Header />
      <AddTodo />
      <Main />
    </DataContext.Provider>
  );
}
