import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), mkcert()],
  server: {
    host: '0.0.0.0',  // Expose the server to all network interfaces
    port: process.env.PORT || 3000,  // Use Railway's port or fallback to 3000
    strictPort: true,  // Fail if port is unavailable
    https: true,  // Enable HTTPS (you can disable if not needed)
  }
});
