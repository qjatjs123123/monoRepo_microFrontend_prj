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
          entry: "https://pwc-header.netlify.app/remoteEntry.js",
        },
        mfe_banner: {
          type: "module",
          name: "mfe_banner",
          entry: "https://pwc-banner.netlify.app/remoteEntry.js",
        },
        mfe_finance: {
          type: "module",
          name: "mfe_finance",
          entry: "https://pwc-fin.netlify.app/remoteEntry.js",
        },
        mfe_viewer: {
          type: "module",
          name: "mfe_viewer",
          entry: "https://pwc-viewer.netlify.app/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 3000,
  },
  server: {
    port: 3000, // dev 서버 포트 설정
  },
});
