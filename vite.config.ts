import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace "your-repository-name" with the exact name of your GitHub repo
  base: '/html/',
});
