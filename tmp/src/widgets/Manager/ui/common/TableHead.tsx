import { useCheckContext } from "@/features/Manager/checkFavoriteCompany";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { Table } from "@/shared/ui/Table/Table";

export function TableHead() {
  const { checkedAll, isAllChecked } = useCheckContext();
  return (
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
  );
}
