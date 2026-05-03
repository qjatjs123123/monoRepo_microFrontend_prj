import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "https://d2khml1veaagc6.cloudfront.net/pwc/header/",
  // base:"https://localhost:5003/",
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
        react: { singleton: true, strictVersion: true, import: false },
        "react-dom": { singleton: true, strictVersion: true, import: false  },
        "@monorepo/ui": { singleton: true, strictVersion: false, import: false  },
        "@monorepo/core": { singleton: true, strictVersion: false, import: false  },
        "react-router-dom": { singleton: true, requiredVersion: "6.16.0", import: false },
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
    port: 5003, // dev 서버 포트 설정
  },
});
