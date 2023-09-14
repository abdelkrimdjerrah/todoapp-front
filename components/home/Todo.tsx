import { useEffect, useState } from "react";
import InputTodo from "../shared/InputTodo";
import TodoItem from "./TodoItem";
import { Circle, PlusCircle } from "phosphor-react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Entities.TodoEntity[]>();

  const axiosPrivate = useAxiosPrivate();

  const getReplies = async () => {
    try {
      const { data } = await axiosPrivate.get(`/api/todos`);

      if (!data?.success) {
        return;
      }

      setTodos(data?.todos);
    } catch (error) {
      console.log("error");
    }
  };

  const handleAddTodo = async () => {
    setNewTodo("");

    const { data } = await axiosPrivate.post(`/api/todos`, { text: newTodo });

    if (!data?.success) {
      return;
    }

    getReplies();
  };

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <div className="min-w-[90%] md:min-w-[60%] flex flex-col gap-4">
      <div className="relative">
        <InputTodo
          text="Add a new workout..."
          type="text"
          widthFull
          onChange={(v) => setNewTodo(v)}
          value={newTodo}
        />
        <div
          className="absolute text-blue-500 top-0 left-0 h-full flex items-center pl-3 cursor-pointer"
          onClick={() => handleAddTodo()}
        >
          {newTodo ? (
            <PlusCircle size={18} weight="fill" />
          ) : (
            <div className="text-black">
              <Circle size={18} />
            </div>
          )}
        </div>
      </div>

      {todos?.length !== 0 ? (
        <div
          className={
            todos?.length !== 0
              ? " overflow-scroll rounded-lg bg-white "
              : " overflow-scroll border rounded-lg bg-white "
          }
          style={{ maxHeight: "calc(100vh - 400px)" }}
        >
          {todos?.map(({ _id, text, isDone }, index) => {
            return (
                <div key={_id}>
                    <TodoItem
                      id={_id}
                      text={text}
                      done={isDone}
                      divider={index !== todos?.length - 1}
                    />
                </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
