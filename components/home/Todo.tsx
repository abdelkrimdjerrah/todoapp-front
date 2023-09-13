import { useState } from "react";
import InputTodo from "../shared/InputTodo";
import TodoItem from "./TodoItem";
import { PlusCircle } from "phosphor-react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    setTodo("");
  };

  return (
    <div className="min-w-[90%] md:min-w-[60%]">
      <div className="relative">
        <InputTodo
          text="Add a new workout..."
          type="text"
          widthFull
          onChange={(v) => setTodo(v)}
          value={todo}
        />
        <div
          className="absolute text-blue-500 top-0 left-0 h-full flex items-center pl-3 cursor-pointer"
          onClick={() => handleAddTodo()}
        >
          <PlusCircle size={18} weight="fill" />
        </div>
      </div>

      <div
        className=" overflow-scroll border rounded-lg bg-white "
        style={{ maxHeight: "calc(100vh - 400px)" }}
      >
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={false}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={true}
        />
        <hr />
        <TodoItem
          id="sdsd"
          text="Hello you need to finish this app"
          done={false}
        />
      </div>
    </div>
  );
};

export default Todo;
