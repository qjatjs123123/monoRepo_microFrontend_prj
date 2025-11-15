import React from "react";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Table } from "@/shared/ui/Table/Table";
import { FavoriteCompany } from "@/entities/Manager";
import { Button } from "@/shared/ui/Button/Button";
import { useDeleteFavoriteCompanyOne } from "@/features/Manager/deleteFavoriteCompany";
import { DetailModalWrapper } from "@/features/Manager/showDetailFavorite";

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
  const mutation = useDeleteFavoriteCompanyOne();

  return (
    <DetailModalWrapper favoriteId={item.id}>
      {(showDetailModal) => (
        <Table.Row checked={checked} onClick={showDetailModal} >
          <Table.Cell align="center">
            <CheckBox checked={checked} onChange={() => onChange(item.id)} />
          </Table.Cell>
          <Table.Cell>{item.company_name}</Table.Cell>
          <Table.Cell>{item.created_at}</Table.Cell>
          <Table.Cell>
            <Button
              className="!p-0 !border-0"
              onClick={() => {
                mutation.mutate(item.id);
              }}
            >
              <TrashIcon />
            </Button>
          </Table.Cell>
        </Table.Row>
      )}
    </DetailModalWrapper>
  );
});
