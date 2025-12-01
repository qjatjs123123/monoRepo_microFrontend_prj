import { TanStackProvider } from "@monorepo/core";
import { TableEntry } from "@/widgets";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "@monorepo/ui";
import "../global.css";

export default function App() {
  return (
    <TanStackProvider>
      <BrowserRouter>
        <Layout>
          <TableEntry page="1" />
        </Layout>
      </BrowserRouter>
    </TanStackProvider>
  );
}
