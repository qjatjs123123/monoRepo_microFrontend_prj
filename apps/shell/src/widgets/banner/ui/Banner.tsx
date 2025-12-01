import React, { Suspense } from "react";

const Mfe_Banner = React.lazy(() => import("mfe_banner/Banner"));

export function Banner() {
  return (
    <Suspense fallback={<></>}>
      <Mfe_Banner title="관심기업 관리 서비스" />
    </Suspense>
  );
}
