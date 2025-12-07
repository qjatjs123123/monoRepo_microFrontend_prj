import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "https://pwc-banner.netlify.app/",
  // base:"https://localhost:5002/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe_banner",
      filename: "remoteEntry.js",
      exposes: {
        "./Banner": "./src/Banners.tsx",
      },
      shared: {
        react: { singleton: true, strictVersion: true, import: false },
        "react-dom": { singleton: true, strictVersion: true, import: false  },
        "@monorepo/ui": { singleton: true, strictVersion: false, import: false  },
        "@monorepo/core": { singleton: true, strictVersion: false, import: false  },
        "@monorepo/tailwind-config": { singleton: true, strictVersion: false, import: false  },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 5002,
  },
  server: {
    port: 5002, // dev 서버 포트 설정
  },
});
