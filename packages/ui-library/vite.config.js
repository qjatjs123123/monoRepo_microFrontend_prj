// packages/ui-library/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true, 
      rollupTypes: true 
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), 
      name: 'UiLibrary', 
      formats: ['es', 'umd'], 
      fileName: (format) => `ui-library.${format}.js`, 
    },
    rollupOptions: {
      // React와 React-DOM은 최종 번들에 포함하지 않고 외부 의존성으로 처리
      external: ['react', 'react-dom'], 
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});