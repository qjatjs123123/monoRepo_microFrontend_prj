import React from "react";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Table } from "@/shared/ui/Table/Table";
import { FavoriteCompany } from "@/entities/Manager";
import { Button } from "@/shared/ui/Button/Button";
import { useDeleteFavoriteCompanyOne } from "@/features/Manager/deleteFavoriteCompany";

import { formatDate } from "@/shared/lib/formatDate";
import { useReadFavoriteCompanyModal } from "@/features/Manager/readFavoriteCompany";

interface FavoriteCompanyCellProps {
  item: FavoriteCompany;
  checked: boolean;
  onChange: (id: number) => void;
}

export const TableRow = React.memo(function TableRow({
  item,
  checked,
  onChange,
}: FavoriteCompanyCellProps) {
  const mutation = useDeleteFavoriteCompanyOne();
  const { show } = useReadFavoriteCompanyModal(item.id);

  return (
    <Table.Row checked={checked} onClick={show}>
      <Table.Cell align="center">
        <CheckBox checked={checked} onChange={() => onChange(item.id)} />
      </Table.Cell>
      <Table.Cell>{item.company_name}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
      <Table.Cell>
        <Button
          className="!p-0 !border-0"
          onClick={(event) => {
            mutation.mutate(item.id);
            event.stopPropagation();
          }}
        >
          <TrashIcon />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
});
