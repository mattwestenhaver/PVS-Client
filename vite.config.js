import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // Same port and output folder as the old Create React App setup
    server: { port: 3000 },
    preview: { port: 3000 },
    build: { outDir: 'build' },
    test: { environment: 'jsdom' },
});
