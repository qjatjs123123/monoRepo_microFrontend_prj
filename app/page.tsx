import { Page } from "@/pages/Manager";

interface SearchParamsProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home({ searchParams }: SearchParamsProps) {
  const { page = "1" } = (await searchParams) ?? {};

  return <Page page={page} />;
}
