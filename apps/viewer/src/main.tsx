import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { TanStackProvider } from "@monorepo/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackProvider>
      <App />
    </TanStackProvider>
  </StrictMode>
);
