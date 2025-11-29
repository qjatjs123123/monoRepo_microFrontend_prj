import { FavoriteDetailDTO } from "../api/dto/favorite-detail-DTO";
import { FavoriteDetail } from "../model/favorite-detail";

export function mapFavoriteDetail(dto: FavoriteDetailDTO): FavoriteDetail {
  return {
    id: dto.id,
    email: dto.email,
    company_name: dto.company_name,
    memo: dto.memo,
    created_at: dto.created_at,
  };
}
