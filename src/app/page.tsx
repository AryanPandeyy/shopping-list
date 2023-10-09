import AddTask from "./_components/AddTask";
import GetTask from "./_components/GetTask";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const getTask = await serverClient.getTask();

  return (
    <div className="flex flex-col m-9 justify-center">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">My Shopping List</h1>
        <AddTask />
      </div>
      <GetTask getTask={getTask} />
    </div>
  );
}
