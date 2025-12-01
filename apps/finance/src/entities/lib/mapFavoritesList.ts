import { type FavoriteCompanyListDTO } from "@/entities/api/dto/favorites-list-DTO";
import { type FavoriteCompanyList } from "@/entities/model/favorites-list";
import { mapFavorites } from "./mapFavorites";

export function mapFavoritesList(dto: FavoriteCompanyListDTO): FavoriteCompanyList {
  return {
    items: dto.items.map((item) => mapFavorites(item)),
    total: dto.total,
    total_pages: dto.total_pages,
    page: dto.page,
    page_size: dto.page_size,
  }
}
