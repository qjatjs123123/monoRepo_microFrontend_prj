import { Table } from "@/shared/ui/Table/Table";
import { TableRow } from "./TableRow";
import { useCheckContext } from "@/features/Manager/checkFavoriteCompany";
import { FavoriteCompanyList } from "@/entities/Manager";

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
