import React, { Suspense } from "react";

const Mfe_Viewer = React.lazy(() => import("mfe_viewer/App"));

export function Viewer() {
  return (
    <Suspense fallback={<></>}>
      <Mfe_Viewer />
    </Suspense>
  );
}
