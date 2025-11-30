import { Layout } from "@monorepo/ui";
import React, { Suspense } from "react";

const Header = React.lazy(() => import("mfe_header/Header"));
const Banner = React.lazy(() => import("mfe_banner/Banner"));

export default function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<></>}>
          <Header />
        </Suspense>
      </Layout>
      <Banner title="관심기업 관리 서비스" />
      <div className="h-[30px] bg-[black]"></div>
    </>
  );
}
