"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getCompanies } from "../api/get-companies";

export function useGetCompanies() {
  return useSuspenseQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
    staleTime: 0,
    retry:0,
    
  });
}
