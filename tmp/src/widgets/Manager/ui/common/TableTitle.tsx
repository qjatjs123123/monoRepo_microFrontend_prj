import { CreateButton } from "@/features/Manager/createFavoriteCompany";
import { DeleteButton } from "@/features/Manager/deleteFavoriteCompany";
import { Text } from "@/shared/ui/Text/Text";

export function TableTitle() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-end pt-[40px] pb-[20px] gap-6">
      <div className="flex flex-col">
        <Text align="left" type="title" weight="bold" size="2">
          관심기업 관리 서비스
        </Text>
        <Text
          align="left"
          type="body"
          className="text-[var(--color-label-700)]"
          weight="medium"
          size="3"
        >
          관심 기업을 등록하고 삭제하며 관리하세요.
        </Text>
      </div>

      <div className="flex justify-end items-end gap-6">
        <CreateButton />
        <DeleteButton />
      </div>
    </div>
  );
}
