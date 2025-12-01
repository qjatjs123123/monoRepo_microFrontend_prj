import { TanStackProvider } from "@monorepo/core";
import { Banner } from "../widgets/banner";
import { Header } from "../widgets/header";
import React, { Suspense } from "react";

const Finance = React.lazy(() => import("mfe_finance/Finance"));
export default function App() {
  return (
    <TanStackProvider>
      <Header />
      <Banner />

      <Suspense fallback={<></>}>
        <Finance />
      </Suspense>
    </TanStackProvider>
  );
}
