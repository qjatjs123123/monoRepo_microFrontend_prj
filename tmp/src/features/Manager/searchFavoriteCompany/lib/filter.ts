import { LIMIT } from "../config/constants";

export function getCompanySuggestions(keyword: string, companies: string[]) {
  if (!keyword.trim()) return [];

  return companies
    .filter((c) => c.toLowerCase().includes(keyword.toLowerCase()))
    .slice(0, LIMIT);
}
