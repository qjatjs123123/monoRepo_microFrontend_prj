"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api/get-companies";

export function useGetCompanies() {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      try {
        const data = await getCompanies();
        return data;
      } catch (error) {
        console.error("기업 조회 오류:", error);
        throw error;
      }
    },
    staleTime: Infinity,
    retry: 0,
  });
}
