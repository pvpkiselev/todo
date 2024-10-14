import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    globals: true,
    include: ['src/__tests__/**/*.test.tsx'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
