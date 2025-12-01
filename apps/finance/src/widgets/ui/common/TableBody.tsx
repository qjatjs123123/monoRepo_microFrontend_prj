import { Table } from "@monorepo/ui";
import { TableRow } from "./TableRow";
import { useCheckContext } from "@/features/checkFavoriteCompany";
import type { FavoriteCompanyList } from "@/entities";

export function TableBody({ data }: { data: FavoriteCompanyList }) {
  const { checkedItem, isChecked } = useCheckContext();

  return (
    <Table.Body>
      {data.items.map((item) => (
        <TableRow
          onChange={checkedItem}
          checked={isChecked(item.id)}
          key={item.id}
          item={item}
        />
      ))}
    </Table.Body>
  );
}
