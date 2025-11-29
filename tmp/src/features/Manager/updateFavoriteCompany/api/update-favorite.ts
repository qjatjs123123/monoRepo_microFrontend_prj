import api from "@/shared/config/axios/axiosConfig";
import { AxiosSuccess } from "@/shared/model/AxiosSuccess";
import { mapAxiosSuccessMsg } from "../../../../shared/lib/mapAxiosSuccessMsg";

interface UpdateFavoriteProps {
  favorite_id: number;
  email: string;
  memo: string;
}

export async function updateFavorite({
  favorite_id,
  email,
  memo,
}: UpdateFavoriteProps) {
  const response = await api.put<AxiosSuccess>(
    `/favorites/${favorite_id}`,
    { memo },
    { params: { email } }
  );

  return mapAxiosSuccessMsg(response.data);
}
