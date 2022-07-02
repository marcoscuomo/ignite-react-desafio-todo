import React, {
  createContext,
  ReactPropTypes,
  ReactNode,
  FC,
  useState,
  useContext,
} from "react";

interface ITodo {
  id: string;
  description: string;
  completed: boolean;
}

interface ITodoProps {
  todos: ITodo[];
  setTodos: (todo: ITodo[]) => void;
}

export const TodoContext = createContext({} as ITodoProps);

export const TodoProvider = (props: React.PropsWithChildren) => {
  const todosApi: ITodo[] = [
    // {
    //   id: 1,
    //   description: "Make a cake",
    //   completed: true,
    // },
    // {
    //   id: 2,
    //   description: "Wash the dishes2",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   description: "Study english1",
    //   completed: true,
    // },
    // {
    //   id: 4,
    //   description: "Study programmers",
    //   completed: true,
    // },
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

  const [todos, setTodos] = useState<ITodo[]>(todosApi);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

// Custom Hook
export const useTodo = () => useContext(TodoContext);
