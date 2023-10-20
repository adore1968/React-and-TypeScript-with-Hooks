"use client";
import { useAppContext } from "@/context/AppContext";
import { Task } from "@/ts/interfaces";
import Link from "next/link";

interface Props {
  task: Task;
  index: number;
}

function TaskCard({ task, index }: Props) {
  const { deleteTask } = useAppContext();

  return (
    <div className="border p-5 rounded flex flex-col gap-5">
      <div>
        <h4 className="text-xl sm:text-2xl font-medium mb-2">
          {index + 1}. {task.name}
        </h4>
        <p className="text-lg sm:text-xl text-gray-200 mb-1">
          {task.description}
        </p>
        <div className="text-lg sm:text-xl text-gray-200">
          <p className="flex gap-5 items-center">
            It's completed?
            <span
              className={`${
                task.completed ? "text-green-600" : "text-red-600"
              }`}
            >
              {task.completed ? "Yes!" : "No!"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 text-lg sm:text-xl">
        <Link
          href={`/update-task/${task.id}`}
          className="px-4 py-2 border rounded hover:bg-green-600 transition-colors ease-in hover:border-0"
        >
          Update
        </Link>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 border rounded hover:bg-red-600 transition-colors ease-in hover:border-0"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
