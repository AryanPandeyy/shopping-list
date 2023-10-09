"use client";
import { useState } from "react";
import { trpc } from "../_trpc/client";

const AddTask = () => {
  const [task, setTask] = useState<string>("");
  const addTask = trpc.addTask.useMutation();
  function handleAddTask(): void {
    try {
      addTask.mutate({ task: task });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};
export default AddTask;
