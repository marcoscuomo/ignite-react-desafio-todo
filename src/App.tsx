import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { TodoProvider } from "../src/data/DataContext";

import "./global.css";

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  return (
    <TodoProvider>
      <Header />
      <AddTodo />
      <Main />
    </TodoProvider>
  );
}
