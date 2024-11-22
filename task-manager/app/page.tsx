import { getTasks, taskCount } from "./api/route";
import TableContent from "./Components/TableContent";

interface Props { searchParams: {search: string, filter: string, order: string} }

export default async function Home({searchParams}: Props) {
  const search = searchParams.search;
  const filter = searchParams.filter;
  const order = searchParams.order;
  const tasks = await getTasks(search, filter, order);
  const count = await taskCount();
  return (
    <div>
      <TableContent tasks={tasks} totalCount={count} shownCount={tasks.length}/>
    </div>
  )
}
