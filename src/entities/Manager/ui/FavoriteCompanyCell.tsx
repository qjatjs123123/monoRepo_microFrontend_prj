import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Table } from "@/shared/ui/Table/Table";

interface FavoriteCompanyCellProps {
  companyName: string;
  created_at: string;
}

export function FavoriteCompanyCell({
  companyName,
  created_at,
}: FavoriteCompanyCellProps) {
  return (
    <Table.Row>
      <Table.Cell align="center">
        <CheckBox />{" "}
      </Table.Cell>
      <Table.Cell>{companyName}</Table.Cell>
      <Table.Cell>{created_at}</Table.Cell>
      <Table.Cell>
        <TrashIcon />
      </Table.Cell>
    </Table.Row>
  );
}
