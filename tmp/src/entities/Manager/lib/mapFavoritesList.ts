import { FavoriteCompanyListDTO } from "../api/dto/favorites-list-DTO";
import { FavoriteCompanyList } from "../model/favorites-list";
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
