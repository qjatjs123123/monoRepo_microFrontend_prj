
import { useQuery } from "@tanstack/react-query";
import { getViewerUrl } from "../api/get-viewerUrl";
import type { ViewerFormProps } from "./type";
import { useFormContext } from "react-hook-form";

export function useGetViewerUrl() {
  const { getValues } = useFormContext<ViewerFormProps>();
  const values = getValues(); 

  return useQuery({
    queryKey: ["url"],
    queryFn: () => getViewerUrl(values),
    staleTime: 0,
    retry:0,
    enabled:false,
  });
}
