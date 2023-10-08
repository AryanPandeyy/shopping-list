import Hello from "./_components/Hello";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const data = await serverClient.hello();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
      <Hello />
    </main>
  );
}
