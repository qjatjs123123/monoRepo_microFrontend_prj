import { getFavoritesList } from "@/entities/Manager/api/get-favorites-list";
import { Table } from "@/shared/ui/Table/Table";
import { Banner } from "@/shared/ui/Banner/Banner";
import { Button } from "@/shared/ui/Button/Button";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { Text } from "@/shared/ui/Text/Text";
import { FavoriteCompanyCell } from "@/entities/Manager/ui/FavoriteCompanyCell";
import { FavoriteCompany } from "../src/entities/Manager/model/favorites-list";

export default async function Home() {
  const favorites = await getFavoritesList({
    email: "test@example.com",
    page: "1",
  });

  return (
    <>
      <Banner title="관심기업 관리 서비스" />

      <Table>
        <Table.Header>
          <Table.HeaderRow>
            <Table.Head className="px-5">
              <CheckBox disabled={true} />
            </Table.Head>
            <Table.Head width="70%">기업명</Table.Head>
            <Table.Head width="30%">생성일자</Table.Head>
            <Table.Head className="px-5"> </Table.Head>
          </Table.HeaderRow>
        </Table.Header>

        <Table.Body>
          {favorites.items.map((item) => (
            <FavoriteCompanyCell
              key={item.id}
              companyName={item.company_name}
              created_at={item.created_at}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
