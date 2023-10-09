"use client";
import React from "react";
import { trpc } from "../_trpc/client";
import { revalidatePath } from "next/cache";

const GetTask = () => {
  const { data, isLoading, isError } = trpc.getTask.useQuery();
  const deleteTask = trpc.deleteTask.useMutation();
  function handleTaskDeletion(id: string): void {
    deleteTask.mutate({ id: id });
  }

  return (
    <div>
      {data?.map((item) => {
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
