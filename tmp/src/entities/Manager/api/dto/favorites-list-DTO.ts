export interface FavoriteCompanyDTO {
  id: number;
  company_name: string;
  created_at: string; 
}

export interface FavoriteCompanyListDTO {
  items: FavoriteCompanyDTO[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}