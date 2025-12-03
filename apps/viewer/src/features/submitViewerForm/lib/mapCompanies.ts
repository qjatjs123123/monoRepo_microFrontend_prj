import type { ViewerUrlDTO } from "../api/dto/viewerUrl-DTO";
import type { ViewerUrl } from "../model/viewerUrl";

export function mapViewerUrl(dto: ViewerUrlDTO): ViewerUrl {
  return {
    data: dto.data,
  };
}
