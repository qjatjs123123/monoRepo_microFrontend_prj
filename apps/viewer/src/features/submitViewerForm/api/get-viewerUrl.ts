import api from "@/shared/config/axios/axiosConfig";
import type { ViewerUrlDTO } from "./dto/viewerUrl-DTO";
import type { ViewerFormProps } from "../model/type";
import { mapViewerUrl } from "../lib/mapCompanies";

export async function getViewerUrl(params: ViewerFormProps) {
  const response = await api.get<ViewerUrlDTO>(
    "https://pwc-scrap.netlify.app/.netlify/functions/api/scrap",
    {
      params,
    }
  );
  return mapViewerUrl(response.data);
}
