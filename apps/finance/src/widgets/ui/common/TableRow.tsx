import React from "react";
import { CheckBox } from "@monorepo/ui";
import { TrashIcon } from "@monorepo/ui";
import { Table } from "@monorepo/ui";
import type { FavoriteCompany } from "@/entities";
import { Button } from "@monorepo/ui";
import { formatDate } from "@monorepo/core";
// import { useDeleteFavoriteCompanyOne } from "@/features/Manager/deleteFavoriteCompany";

// import { formatDate } from "@/shared/lib/formatDate";
// import { useReadFavoriteCompanyModal } from "@/features/Manager/readFavoriteCompany";

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
  // const mutation = useDeleteFavoriteCompanyOne();
  // const { show } = useReadFavoriteCompanyModal(item.id);

  return (
    <Table.Row checked={checked}>
      <Table.Cell align="center">
        <CheckBox checked={checked} onChange={() => onChange(item.id)} />
      </Table.Cell>
      <Table.Cell>{item.company_name}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
      <Table.Cell>
        <Button
          className="!p-0 !border-0"
          onClick={(event) => {
            // mutation.mutate(item.id);
            event.stopPropagation();
          }}
        >
          <TrashIcon />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
});
