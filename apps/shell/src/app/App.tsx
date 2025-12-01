import { TanStackProvider } from "@monorepo/core";
import { Banner } from "../widgets/banner";
import { Header } from "../widgets/header";

export default function App() {
  return (
    <TanStackProvider>
      <Header />
      <Banner />
    </TanStackProvider>
  );
}
