import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe_header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header.tsx",
      },
      shared: ["react", "react-dom"],
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
