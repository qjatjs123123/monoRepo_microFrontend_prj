"use client";

import { FavoriteCompanyList } from "@/entities/Manager";
import { useCheckContext } from "@/features/Manager/checkFavoriteCompany";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { Table } from "@/shared/ui/Table/Table";
import { TableCell } from "./TableCell";

export function TableContent({ data }: { data: FavoriteCompanyList }) {
  const { checkedItem, checkedAll, isAllChecked, isChecked } =
    useCheckContext();

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          <Table.Head className="px-5">
            <CheckBox onChange={checkedAll} checked={isAllChecked} />
          </Table.Head>
          <Table.Head width="70%">기업명</Table.Head>
          <Table.Head width="30%">생성일자</Table.Head>
          <Table.Head className="px-5"> </Table.Head>
        </Table.HeaderRow>
      </Table.Header>

      <Table.Body>
        {data.items.map((item) => (
          <TableCell
            onChange={checkedItem}
            checked={isChecked(item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
