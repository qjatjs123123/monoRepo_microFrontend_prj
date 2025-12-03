import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "https://pwc-viewer.netlify.app/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe-viewer",
      filename: "remoteEntry.js",
      exposes: {
        "./Viewer": "./src/app/App.tsx",
      },
      shared: {
        react: { singleton: true, strictVersion: true },
        "react-dom": { singleton: true, strictVersion: true },
        "@monorepo/ui": { singleton: true, strictVersion: false },
      },
    }),
  ],

  build: {
    target: "esnext",
  },
});
