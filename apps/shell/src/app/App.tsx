import { TanStackProvider } from "@monorepo/core";
import { Banner } from "../widgets/banner";
import { Header } from "../widgets/header";

// const Finance = React.lazy(() => import("mfe_finance/Finance"));
export default function App() {
  return (
    <TanStackProvider>
      <Header />
      <Banner />
      {/* <Finance /> */}
    </TanStackProvider>
  );
}
