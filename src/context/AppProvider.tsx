"use client";
import { ReactNode, useState, ChangeEvent } from "react";
import { AppContext } from "./AppContext";
import { Task, Tasks } from "@/ts/interfaces";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

const taskInitialState = {
  id: "",
  name: "",
  description: "",
  completed: false,
};

const tasksInitialState = [
  {
    id: "1",
    name: "task title 1",
    description: "task description 1",
    completed: false,
  },
  {
    id: "2",
    name: "task title 2",
    description: "task description 2",
    completed: true,
  },
  {
    id: "3",
    name: "task title 3",
    description: "task description 3",
    completed: false,
  },
];

function AppProvider({ children }: Props) {
  const [task, setTask] = useState<Task>(taskInitialState);
  const [tasks, setTasks] = useState<Tasks>(tasksInitialState);
  const router = useRouter();

  const handleTaskChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, checked } = target as HTMLInputElement;
    if (name === "completed") {
      setTask({ ...task, completed: checked });
    } else {
      setTask({ ...task, [name]: value });
    }
  };

  const createTask = () => {
    if (task.name && task.description) {
      const newTasks = [...tasks, { ...task, id: v4() }];
      setTasks(newTasks);
      setTask(taskInitialState);
      router.push("/");
    }
  };

  const getTask = (id: string) => {
    const taskFound = tasks.find((task) => task.id === id);
    if (taskFound) setTask(taskFound);
  };

  const updateTask = () => {
    const newTasks = tasks.map((value) => {
      if (value.id === task.id) {
        return task;
      }
      return value;
    });
    setTasks(newTasks);
    setTask(taskInitialState);
    router.push("/");
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <AppContext.Provider
      value={{
        task,
        tasks,
        handleTaskChange,
        createTask,
        getTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
