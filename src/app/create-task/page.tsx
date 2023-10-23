/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { FormEvent, useEffect } from "react";
import { useAppContext } from "@/context/AppContext";

interface Props {
  params: {
    id: string;
  };
}

function CreateTaskPage({ params }: Props) {
  const { task, handleTaskChange, createTask, getTask, updateTask } =
    useAppContext();
  const { id } = params;

  useEffect(() => {
    if (id) {
      getTask(id);
    }
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) createTask();
    else updateTask();
  };

  return (
    <section>
      <div className="flex justify-center items-center min-h-[calc(100vh-73px)]">
        <form
          className="bg-[#FFFDFA] p-5 text-[#0c090a] flex flex-col gap-5 rounded"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl sm:text-3xl font-bold">
            {id ? "Update the Task" : "Create a new Task"}
          </h1>
          <div>
            <label htmlFor="name" className="text-xl sm:text-2xl font-medium">
              The title for the task
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border px-4 py-2 w-full shadow-lg mt-1 text-lg sm:text-xl rounded"
              value={task.name}
              onChange={(e) => handleTaskChange(e)}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-xl sm:text-2xl font-medium"
            >
              The description for the task
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="min-h-[150px] border px-4 py-2 w-full shadow-lg mt-1 text-lg sm:text-xl resize-none rounded"
              value={task.description}
              onChange={(e) => handleTaskChange(e)}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="completed"
              className="text-xl sm:text-2xl font-medium"
            >
              Is it completed?
            </label>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={task.completed}
              onChange={(e) => handleTaskChange(e)}
            />
          </div>
          <button
            type="submit"
            className={` px-4 py-2.5 rounded-full text-xl sm:text-xl text-[#FFFDFA] transition-colors ease-in ${
              id
                ? "bg-green-700 hover:bg-green-600"
                : "bg-blue-700 hover:bg-blue-600 "
            }`}
          >
            {id ? "Update" : " Create"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateTaskPage;
