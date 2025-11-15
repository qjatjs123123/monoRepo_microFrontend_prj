import { mapCompanies } from "../lib/mapCompanies";
import { CompaniesDTO } from "./dto/companies-DTO";
import api from "@/shared/config/axios/axiosConfig";

export async function getCompanies() {
  const response = await api.get<CompaniesDTO>("/companies");
  return mapCompanies(response.data);
}
