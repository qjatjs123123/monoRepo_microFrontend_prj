import { Button } from "@monorepo/ui";
import { useGetViewerUrl } from "../model/useGetViewerUrl";

export function SubmitButton() {
  const { refetch } = useGetViewerUrl();

  return (
    <div className="px-4 py-4 flex justify-center">
      <Button style="fill" onClick={() => refetch()}>
        검색
      </Button>
    </div>
  );
}
