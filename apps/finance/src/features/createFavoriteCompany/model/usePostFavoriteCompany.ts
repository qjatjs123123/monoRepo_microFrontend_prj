import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FavoriteCompanyFormProps } from "./favorite-company-form";
import { useFormContext } from "react-hook-form";
import { postFavorite } from "../api/post-favorite";
import { setToast } from "@monorepo/core";
import type { AxiosError } from "@/shared/model/AxiosError";
import { useGetFavoriteList } from "@/entities";

export function usePostFavoriteCompany() {
  const { getValues } = useFormContext<FavoriteCompanyFormProps>();
  const queryClient = useQueryClient();
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
      setToast(message);
    },
    onError: (error: AxiosError) => {
      setToast(error.message);
    },
    retry: 0,
  });

  return mutation;
}
