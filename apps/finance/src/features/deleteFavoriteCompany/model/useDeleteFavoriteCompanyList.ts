import { useMutation } from "@tanstack/react-query";
import { deleteFavorite } from "../api/delete-favorite";
import { setToast } from "@monorepo/core";
import { AxiosError } from "axios";
import { EMAIL } from "@/shared/config/constants/constants";
import { useOverlay } from "@monorepo/core";
import { useGetFavoriteList } from "@/entities";
import { useCheckContext } from "../../checkFavoriteCompany";

export function useDeleteFavoriteCompanyList() {
  const { close } = useOverlay();
  const { refetch } = useGetFavoriteList();
  const { checkedIds, setCheckedIds } = useCheckContext();

  const mutation = useMutation({
    mutationFn: async () => {
      const result = await Promise.all(
        checkedIds.map(async (id) => {
          const param = { favorite_id: id, email: EMAIL };
          const res = await deleteFavorite(param);
          return res.message;
        })
      );

      return result[0];
    },
    onSuccess: (message) => {
      close();
      setToast(message);
      refetch();
      setCheckedIds([]);
    },
    onError: (error: AxiosError) => {
      setToast(error.message);
    },
    retry: 0,
  });

  return mutation;
}
