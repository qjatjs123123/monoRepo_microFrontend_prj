import { Banner } from "@/shared/ui/Banner/Banner";
import { TableContainer } from "@/widgets/Manager";

export function Page({ page }: { page: string }) {
  return (
    <>
      <Banner title="관심기업 관리 서비스" />
      <TableContainer page={page} />
    </>
  );
}
