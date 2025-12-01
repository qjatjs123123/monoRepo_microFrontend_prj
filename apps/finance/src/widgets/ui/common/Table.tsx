import type { FavoriteCompanyList } from "@/entities";
import { Table as BaseTable } from "@monorepo/ui";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
// import { Empty } from "@/shared/ui/Empty/Empty";
// import { Pagination } from "./Pagination";

export function Table({ data }: { data: FavoriteCompanyList }) {
  const isEmpty = data.items.length === 0;

  return <>{isEmpty ? <TableEmpty /> : <TableExist data={data} />}</>;
}

function TableEmpty() {
  return (
    <div className="mt-[40px]">
      {/* <Empty /> */}
    </div>
  );
}

function TableExist({ data }: { data: FavoriteCompanyList }) {
  return (
    <>
      <BaseTable>
        <TableHead />
        <TableBody data={data} />
      </BaseTable>
      {/* <Pagination /> */}
    </>
  );
}
