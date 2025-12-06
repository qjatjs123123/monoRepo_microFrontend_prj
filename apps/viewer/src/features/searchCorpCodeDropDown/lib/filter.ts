import { type CorpMap } from "@/entities/config/constants";
import { LIMIT } from "../config/constants";

export function getCompanySuggestions(keyword: string, companies: CorpMap[]) {
  if (!keyword.trim()) return [];

  return companies
    .filter(({ name }) => name.toLowerCase().includes(keyword.toLowerCase()))
    .slice(0, LIMIT);
}
