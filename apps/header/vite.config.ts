import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "http://localhost:5002/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe_header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Headers.tsx",
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
  preview: {
    port: 5001,
  },
  server: {
    port: 5001, // dev 서버 포트 설정
  },
});
