import { FavoriteCompanyDTO } from "../api/dto/favorites-list-DTO";
import { FavoriteCompany } from "../model/favorites-list";

export function mapFavorites(dto: FavoriteCompanyDTO): FavoriteCompany {
  return {
    id: dto.id,
    company_name: dto.company_name,
    created_at: dto.created_at,
  };
}
