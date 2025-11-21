import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    clearMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: ["**/*.config.*", "**/test/**"],
    },
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
});
