import { getTasks } from "./api/route";
import TableContent from "./Components/TableContent";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <div>
      <TableContent tasks={tasks}/>
    </div>
  )
}
