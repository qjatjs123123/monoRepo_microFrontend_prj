import { Button } from "@/shared/ui/Button/Button";
import { usePostFavoriteCompany } from "../../model/usePostFavoriteCompany";
import { useOverlay } from "@/shared/model/useOverlay";

export function ModalFooter() {
  const mutation = usePostFavoriteCompany();
  const { close } = useOverlay();

  return (
    <div className="px-4 py-4 flex justify-end">
      <Button
        style="fill"
        onClick={() => {
          mutation.mutate();
          close();
        }}
      >
        저장
      </Button>
    </div>
  );
}
