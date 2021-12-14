import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //FC is Functional Component
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
