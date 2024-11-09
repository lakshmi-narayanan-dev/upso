import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: 'https://naraine.tech/clients/upso/', // Base path should match your hosting folder structure
});
