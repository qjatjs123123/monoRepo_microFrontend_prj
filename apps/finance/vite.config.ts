import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import path from "path";

export default defineConfig({
  base: "https://pwc-fin.netlify.app/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe_finance",
      filename: "remoteEntry.js",
      exposes: {
        "./Finance": "./src/app/App.tsx",
      },
      shared: {
        react: { singleton: true, strictVersion: true },
        "react-dom": { singleton: true, strictVersion: true },
        "@monorepo/ui": { singleton: true, strictVersion: false },
        "@tanstack/react-query": {
          singleton: true,
          strictVersion: true, // 버전이 다르면 에러 → 권장
          requiredVersion: "^5.0.0",
        },
      },
    }),
  ],

  build: {
    target: "esnext",
  },
  preview: {
    port: 5003,
  },
  server: {
    port: 5003,
  },
});
