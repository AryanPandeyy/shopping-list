import Hello from "./_components/Hello";
import AddTask from "./_components/AddTask";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const getTask = await serverClient.getTask();
  /* const hello = await serverClient.hello(); */
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {getTask.map((i) => (
        <p>{i.task}</p>
      ))}
      <h1>My Shopping List</h1>
      <AddTask />
    </main>
  );
}
