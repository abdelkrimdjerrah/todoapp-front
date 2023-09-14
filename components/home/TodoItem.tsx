import { Circle, CheckCircle, Trash } from "phosphor-react";
import { useState } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

interface TodoItemProps {
  id: string;
  text: string;
  done: boolean;
  divider: boolean;
}

const TodoItem = ({ id, text, done, divider }: TodoItemProps) => {
  const [markAsDone, setMarkAsDone] = useState(done);
  const [deleted, setDeleted] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const handleDelete = async () => {
    try {
      const { data } = await axiosPrivate.delete(`/api/todos/${id}`);

      if (!data?.success) {
        return;
      }

      setDeleted(true);
    } catch (error) {}
  };

  const handleMarkAsDone = async () => {
    try {
      const { data } = await axiosPrivate.patch(`/api/todos/${id}`);

      if (!data?.success) {
        return;
      }

      setMarkAsDone(!markAsDone);
    } catch (error) {}
  };

  return (
    <>
      {!deleted && (
        <>
          <div className="text-lg p-3 flex justify-between ">
            <div className="flex gap-2 md:gap-3 items-center">
              <div
                className="cursor-pointer"
                onClick={() => handleMarkAsDone()}
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
          {divider ? <hr /> : null}
        </>
      )}
    </>
  );
};

export default TodoItem;
