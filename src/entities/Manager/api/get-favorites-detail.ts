import api from "@/shared/config/axios/axiosConfig";
import { FavoriteDetailDTO } from "./dto/favorite-detail-DTO";

export interface FetchFavoriteDetailParams {
  favoriteId: number;
  email: string;
}

export async function getFavoriteDetail({ favoriteId, email }: FetchFavoriteDetailParams) {
  try {
    const response = await api.get<FavoriteDetailDTO>(`/favorites/${favoriteId}`, {
      params: { email },
    });

    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}
