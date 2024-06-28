import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
      "@/api": "/src/api",
      "@/lib": "/src/lib",
    },
  },
});
