import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import sassDts from 'vite-plugin-sass-dts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@config': path.resolve(__dirname, './src/config'),
      '@core': path.resolve(__dirname, './src/core'),
      '@locale': path.resolve(__dirname, './src/locale'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@repository': path.resolve(__dirname, './src/modules/core/repository'),
      '@store': path.resolve(__dirname, './src/modules/core/store'),
      '@styles': path.resolve(__dirname, './src/view/styles'),
      '@view': path.resolve(__dirname, './src/view'),
      '@assets': path.resolve(__dirname, './src/shared/assets'),
      '@helper': path.resolve(__dirname, './src/shared/helper'),
      '@hoc': path.resolve(__dirname, './src/shared/hoc'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@hook': path.resolve(__dirname, './src/shared/hook'),
      '@components': path.resolve(__dirname, './src/shared/components'),
    },
  },
  plugins: [react(), sassDts()],
});
