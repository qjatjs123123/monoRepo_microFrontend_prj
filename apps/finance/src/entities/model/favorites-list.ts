export interface FavoriteCompany {
  id: number;
  company_name: string;
  created_at: string; 
}

export interface FavoriteCompanyList {
  items: FavoriteCompany[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}