"use client";

import React from "react";
import { trpc } from "../_trpc/client";
import { useRouter } from "next/navigation";
type GetTaskProps = {
  getTask: Array<{ id: string; task: string }>; // Define the type for getTask
};

const GetTask = ({ getTask }: GetTaskProps) => {
  const deleteTask = trpc.deleteTask.useMutation();
  const router = useRouter();
  function handleTaskDeletion(id: string): void {
    try {
      deleteTask.mutate({ id: id });
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {getTask?.map((item) => {
        const { task, id } = item;
        return (
          <div className="flex flex-row gap-2">
            <p>{task}</p>
            <button onClick={() => handleTaskDeletion(id)}>❌</button>
          </div>
        );
      })}
    </div>
  );
};

export default GetTask;
