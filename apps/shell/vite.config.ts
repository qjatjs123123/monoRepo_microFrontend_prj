import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shell",
      remotes: {
        mfe_header: {
          type: "module",
          name: "mfe_header",
          entry: "http://localhost:5001/remoteEntry.js",
        },
        mfe_banner: {
          type: "module",
          name: "mfe_banner",
          entry: "http://localhost:5002/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 5000,
  },
  server: {
    port: 5000, // dev 서버 포트 설정
  },
});
