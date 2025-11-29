import { Page } from "@/page/Manager";
import { Metadata } from "next";

interface SearchParamsProps {
  searchParams: Promise<{
    page?: string;
  }>;
}
export const metadata: Metadata = {
  title: "관심기업 관리 서비스",
  description: "관심 기업을 등록하고 삭제하며 관리하세요.",
  openGraph: {
    title: "관심기업 관리 서비스",
    description: "관심 기업을 등록하고 삭제하며 관리하세요.",
  },
  twitter: {
    title: "관심기업 관리 서비스",
    description: "관심 기업을 등록하고 삭제하며 관리하세요.",
  },
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const { page = "1" } = (await searchParams) ?? {};
  return <Page page={page} />;
}
