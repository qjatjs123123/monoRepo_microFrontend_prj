import { mapFavoritesList } from "@/entities/lib/mapFavoritesList";
import type { FavoriteCompanyListDTO } from "@/entities/api/dto/favorites-list-DTO";
import api from "@/shared/axios/axiosConfig";

export interface FetchFavoritesParams {
  page?: string;
  email?: string;
}
export async function getFavoritesList({ email, page }: FetchFavoritesParams) {
  const response = await api.get<FavoriteCompanyListDTO>("/favorites", {
    params: { email, page },
  });

  return mapFavoritesList(response.data);
}
