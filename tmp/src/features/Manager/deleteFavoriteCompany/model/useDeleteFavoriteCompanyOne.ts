import { useMutation } from "@tanstack/react-query";
import { deleteFavorite } from "../api/delete-favorite";
import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import { AxiosError } from "axios";
import { EMAIL } from "../../../../shared/config/constants/constants";
import { useGetFavoriteList } from "@/entities/Manager";
import { useCheckContext } from "../../checkFavoriteCompany";

export function useDeleteFavoriteCompanyOne() {
  const { show } = useToastService();
  const { refetch } = useGetFavoriteList();
  const { checkedIds, setCheckedIds } = useCheckContext();

  
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const param = { favorite_id: id, email: EMAIL };
      const res = await deleteFavorite(param);

      return res.message;
    },

    onSuccess: (message, deletedId) => {
      show(message);
      refetch();

      // 기존 체크되어 있는 값 제거
      const updatedCheckedIds = checkedIds.filter(id => id !== deletedId);
      setCheckedIds(updatedCheckedIds);
    },

    onError: (error: AxiosError) => {
      show(error.message);
    },
    retry: 0,
  });

  return mutation;
}
