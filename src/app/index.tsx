import { ReactNode } from "react";
import { MSWProvider } from "./providers/MSWProvider";
import { PortalProvider } from "./providers/PortalProvider";
import TanStackProvider from "./providers/TanStackProvider";
import { OverlayProvider } from "./providers/OverlayProvider";

export default function App({ children }: { children: ReactNode }) {
  return (
    // <MSWProvider>
      <TanStackProvider>
        <PortalProvider>
          <OverlayProvider>{children}</OverlayProvider>
        </PortalProvider>
      </TanStackProvider>
    // </MSWProvider>
  );
}
