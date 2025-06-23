import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  optimizeDeps: {
    force: true, // Force dependency optimization
  },
  ssr: {
    // noExternal: ["@emotion/*"],
  },
});
