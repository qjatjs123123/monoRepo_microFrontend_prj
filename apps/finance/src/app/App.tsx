import {
  OverlayProvider,
  PortalProvider,
  TanStackProvider,
} from "@monorepo/core";
import { BrowserRouter } from "react-router-dom";
import "../global.css";
import { Page } from "@/pages/page";
import { MSWProvider } from "./MSWProvider";


export default function App() {
  return (
    <MSWProvider>
      <TanStackProvider>
        <BrowserRouter>
          <PortalProvider>
            <OverlayProvider>
              <Page />
            </OverlayProvider>
          </PortalProvider>
        </BrowserRouter>
      </TanStackProvider>
    </MSWProvider>
  );
}
