import { mapCompanies } from "../lib/mapCompanies";
import { CompaniesDTO } from "./dto/companies-DTO";
import api from "@/shared/config/axios/axiosConfig";

export async function getCompanies() {
  try {
    const response = await api.get<CompaniesDTO>("/companies");

    return mapCompanies(response.data);
  } catch (error: unknown) {
    throw error;
  }
}
