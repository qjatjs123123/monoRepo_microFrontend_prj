import React from "react";

import { Suspense } from "react";
import { FinanceSkeleton } from "./FinanceSkeleton";

const Finance = React.lazy(() => import("mfe_finance/Finance"));

export function Header() {
  return (
    <Suspense fallback={<FinanceSkeleton />}>
      <Finance />
    </Suspense>
  );
}
