import { Layout } from "@monorepo/ui";
import React from "react";

import { Suspense } from "react";
import HeaderSkeleton from "./HeaderSkeleton";

const Mfe_Header = React.lazy(() => import("mfe_header/Header"));

export function Header() {
  return (
    <Layout>
      <Suspense fallback={<HeaderSkeleton />}>
        <Mfe_Header />
      </Suspense>
    </Layout>
  );
}
