"use client";
import TaskCard from "@/components/TaskCard";
import { useAppContext } from "@/context/AppContext";

function HomePage() {
  const { tasks } = useAppContext();

  return (
    <section className="mt-10">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
