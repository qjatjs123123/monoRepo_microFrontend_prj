import { TanStackProvider } from "@monorepo/core";
import { Banner } from "../widgets/banner";
import { Header } from "../widgets/header";
import Finance from "mfe_finance/Finance";

export default function App() {
  return (
    <TanStackProvider>
      <Header />
      <Banner />
      <Finance />
    </TanStackProvider>
  );
}
