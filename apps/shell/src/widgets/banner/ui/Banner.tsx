import React, { Suspense } from "react";
import BannerSkeleton from "./BannerSkeleton";

const Mfe_Banner = React.lazy(() => import("mfe_banner/Banner"));

export function Banner() {
  return (
    <Suspense fallback={<BannerSkeleton />}>
      <Mfe_Banner title="관심기업 관리 서비스" />
    </Suspense>
  );
}
