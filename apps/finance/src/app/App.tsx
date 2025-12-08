import {
  OverlayProvider,
  PortalProvider,
  TanStackProvider,
} from "@monorepo/core";
import { BrowserRouter } from "react-router-dom";
import "../global.css";
import { Page } from "@/pages/page";

export default function App() {
  return (
    <TanStackProvider>
      <BrowserRouter>
        <PortalProvider>
          <OverlayProvider>
            <Page />
          </OverlayProvider>
        </PortalProvider>
      </BrowserRouter>
    </TanStackProvider>
  );
}
