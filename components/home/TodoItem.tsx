import { Circle, CheckCircle, Trash } from "phosphor-react";
import { useState } from "react";

interface TodoItemProps {
  id: string;
  text: string;
  done: boolean;
}

const TodoItem = ({ id, text, done }: TodoItemProps) => {
  const [markAsDone, setMarkAsDone] = useState(done);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    setDeleted(true);
  };

  return (
    <>
      {!deleted && (
        <div className="text-lg p-3 flex justify-between ">
          <div className="flex gap-2 md:gap-3 items-center">
            <div
              className="cursor-pointer"
              onClick={() => setMarkAsDone(!markAsDone)}
            >
              {markAsDone ? (
                <CheckCircle color="#7B3DFF" size={18} weight="fill" />
              ) : (
                <Circle size={18} />
              )}
            </div>
            <div className={markAsDone ? "text-zinc-300 line-through" : ""}>
              {text}
            </div>
          </div>
          <div
            className="text-zinc-300 cursor-pointer"
            onClick={() => handleDelete()}
          >
            <Trash size={18} />
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
