import { getTasks, taskCount } from "./api/route";
import TableContent from "./Components/TableContent";

interface Props { searchParams: {search:string} }

export default async function Home({searchParams}: Props) {
  const { search } = searchParams;
  const tasks = await getTasks(search);
  const count = await taskCount();
  return (
    <div>
      <TableContent tasks={tasks} totalCount={count} shownCount={tasks.length}/>
    </div>
  )
}
