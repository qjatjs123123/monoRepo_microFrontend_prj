import api from "@/shared/config/axios/axiosConfig";
import { AxiosSuccess } from "@/shared/model/AxiosSuccess";
import { FavoriteCompanyFormProps } from "../model/favorite-company-form";

export async function postFavorite(data: FavoriteCompanyFormProps) {
  const response = await api.post<AxiosSuccess>("/favorites", {
    email: data.email,
    company_name: data.company_name,
    memo: data.memo,
  });

  return response.data;
}
