import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shell",
      remotes: {
        // mfe_header: {
        //   type: "module",
        //   name: "mfe_header",
        //   entry: "http:/localhost:5003/remoteEntry.js",
        // },
        // mfe_banner: {
        //   type: "module",
        //   name: "mfe_banner",
        //   entry: "http:/localhost:5002/remoteEntry.js",
        // },
        mfe_header: {
          type: "module",
          name: "mfe_header",
          entry: "https://d2khml1veaagc6.cloudfront.net/pwc/header/remoteEntry.js",
        },
        mfe_banner: {
          type: "module",
          name: "mfe_banner",
          entry: "https://d2khml1veaagc6.cloudfront.net/pwc/banner/remoteEntry.js",
        },
        mfe_finance: {
          type: "module",
          name: "mfe_finance",
          entry: "https://d2khml1veaagc6.cloudfront.net/pwc/finance/remoteEntry.js",
        },
        mfe_viewer: {
          type: "module",
          name: "mfe_viewer",
          entry: "https://d2khml1veaagc6.cloudfront.net/pwc/viewer/remoteEntry.js",
        },
      },

      /**
       * 🔥 핵심: react-router-dom 반드시 공유해야 함
       * Remote와 Host가 동일한 Router Context 사용하도록 강제
       */
      shared: {
        react: { singleton: true, strictVersion: true },
        "react-dom": { singleton: true, strictVersion: true },
        "@monorepo/ui": { singleton: true, strictVersion: false },
        "@monorepo/core": { singleton: true, strictVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: "6.16.0" },
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
    port: 3000,
  },
  server: {
    port: 3000,
  },
});
