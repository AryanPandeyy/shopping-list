"use client";

import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";

export default function TodoList() {
  const { data } = trpc.hello.useQuery(undefined);
  console.log(data);

  return (
    <div>
      <button>fetch</button>
    </div>
  );
}
