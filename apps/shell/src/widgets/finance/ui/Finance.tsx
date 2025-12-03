import React from "react";

import { Suspense } from "react";
import { FinanceSkeleton } from "./FinanceSkeleton";
import { Banner } from "@/shared/ui";
import { Layout } from "@monorepo/ui";

const Mfe_Finance = React.lazy(() => import("mfe_finance/Finance"));

export function Finance() {
  return (
    <>
      <Banner title="관심기업 관리 서비스" />
      <Suspense
        fallback={
          <Layout>
            <FinanceSkeleton />
          </Layout>
        }
      >
        <Mfe_Finance />
      </Suspense>
    </>
  );
}
