import { useGetFavoriteDetail } from "@/entities/Manager/model/useGetFavoriteDetail";
import { UpdateModalEntry } from "@/features/Manager/updateFavoriteCompany";
import { Button } from "@/shared/ui/Button/Button";
import { EditIcon } from "@/shared/ui/Icon/EditIcon";
import { Text } from "@/shared/ui/Text/Text";

export function DetailModal({ favoriteId }: { favoriteId: number }) {
  const { data } = useGetFavoriteDetail(favoriteId);

  return (
    <>
      <div className="flex justify-center py-3 w-full">
        <Text weight="bold">{data.company_name}</Text>
      </div>

      <div className="bt border-t border-[var(--color-line-400)] p-2 flex-1 w-full">
        <div className="p-2 border border-[var(--color-line-400)] h-full">
          {data.memo}
        </div>
      </div>

      <div className="flex justify-end p-2 w-full">
        <UpdateModalEntry favoriteId={favoriteId}>
          {(showUpdateModal) => (
            <Button
              style="fill"
              className="flex gap-2"
              onClick={() => showUpdateModal()}
            >
              <EditIcon />
              <Text>수정하기</Text>
            </Button>
          )}
        </UpdateModalEntry>
      </div>
    </>
  );
}
