import React, { createContext } from "react";

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

const todosApi: ITodo[] = [
  {
    id: 1,
    description: "Make a cake",
    completed: true,
  },
  {
    id: 2,
    description: "Wash the dishes2",
    completed: false,
  },
  {
    id: 3,
    description: "Study english1",
    completed: true,
  },
  {
    id: 4,
    description: "Study programmers",
    completed: true,
  },
  // {
  //   id: 5,
  //   description: "Go to work",
  //   completed: false,
  // },
  // {
  //   id: 6,
  //   description: "Lunch",
  //   completed: false,
  // },
  // {
  //   id: 7,
  //   description: "Go to home22",
  //   completed: true,
  // },
];

export const todoContext = {
  todos: todosApi,
  setTodos: (todo: ITodo[]) => {},
};

export const DataContext = createContext(todoContext);
