import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // Same port and output folder as the old Create React App setup
    server: { port: 3000 },
    preview: { port: 3000 },
    build: {
        outDir: 'build',
        // Vite's default only supports browsers from 2023 on (Safari/iOS 16.4+). This also covers older iPhones
        // stuck on iOS 14-15, such as the iPhone 6s, 7 and first SE.
        target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'],
    },
    test: { environment: 'jsdom' },
});
