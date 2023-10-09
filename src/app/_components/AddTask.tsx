"use client";
import { useState } from "react";
import { trpc } from "../_trpc/client";

const AddTask = () => {
  const [task, setTask] = useState<string>("");
  const addTask = trpc.addTask.useMutation();
  function handleAddTask(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    try {
      addTask.mutate({ task: task });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleAddTask(e)}>
        <input
          className="ring-1 ring-gray-700"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="mx-2 border border-gray-700 px-3 text-white bg-black"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddTask;
