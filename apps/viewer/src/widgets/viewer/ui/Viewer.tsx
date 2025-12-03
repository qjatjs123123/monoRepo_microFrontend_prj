import { useGetViewerUrl } from "@/features/submitViewerForm/model/useGetViewerUrl";

export function Viewer() {
  const { data } = useGetViewerUrl(); // Suspense + refetch 방식

  return (
    <iframe
      src={data?.data}
      className="w-full h-[800px] border flex justify-center"
    />
  );
}
