import React from "react";
import Input from "../redux/components/Input";
import TodoList from "../redux/components/TodoList";

const Main = () => {
  return (
    <div>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
};

export default Main;
