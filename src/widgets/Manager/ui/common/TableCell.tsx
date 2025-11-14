import React from "react";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Table } from "@/shared/ui/Table/Table";
import { FavoriteCompany } from "@/entities/Manager";
import { useDeleteFavoriteCompany } from "@/features/Manager/deleteFavoriteCompany/model/useDeleteFavoriteCompany";
import { Button } from "@/shared/ui/Button/Button";

interface FavoriteCompanyCellProps {
  item: FavoriteCompany;
  checked: boolean;
  onChange: (id: number) => void;
}

export const TableCell = React.memo(function TableCell({
  item,
  checked,
  onChange,
}: FavoriteCompanyCellProps) {
  const mutation = useDeleteFavoriteCompany([item.id]);

  return (
    <Table.Row checked={checked}>
      <Table.Cell align="center">
        <CheckBox checked={checked} onChange={() => onChange(item.id)} />
      </Table.Cell>
      <Table.Cell>{item.company_name}</Table.Cell>
      <Table.Cell>{item.created_at}</Table.Cell>
      <Table.Cell>
        <Button className="!p-0 !border-0" onClick={() => mutation.mutate()}>
          <TrashIcon />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
});
