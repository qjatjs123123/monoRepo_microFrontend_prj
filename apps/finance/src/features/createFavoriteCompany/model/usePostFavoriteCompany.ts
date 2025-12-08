import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FavoriteCompanyFormProps } from "./favorite-company-form";
import { useFormContext } from "react-hook-form";
import { postFavorite } from "../api/post-favorite";
// import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import type { AxiosError } from "@/shared/model/AxiosError";
import { useGetFavoriteList } from "@/entities";
// import { useCheckContext } from "../../checkFavoriteCompany";

export function usePostFavoriteCompany() {
  const { getValues } = useFormContext<FavoriteCompanyFormProps>();
  // const { show } = useToastService();
  const queryClient = useQueryClient();
  const show = (a: string) => {}
  const { refetch } = useGetFavoriteList();
  
  const mutation = useMutation({
    mutationFn: async () => {
      const data = getValues();
      const res = await postFavorite(data);

      return res.message;
    },
    onSuccess: (message) => {
      queryClient.invalidateQueries({
        queryKey: ["favorite"],
      });
      refetch();
      show(message);
    },
    onError: (error: AxiosError) => {
      show(error.message);
    },
    retry: 0,
  });

  return mutation;
}
