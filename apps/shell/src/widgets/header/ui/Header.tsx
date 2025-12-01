import { Layout } from "@monorepo/ui";
import React from "react";
import { Suspense } from "react";

const Mfe_Header = React.lazy(() => import("mfe_header/Header"));

export function Header() {
  return (
    <Layout>
      <Suspense fallback={<></>}>
        <Mfe_Header />
      </Suspense>
    </Layout>
  );
}
