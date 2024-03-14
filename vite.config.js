import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //imported to decide how you want to styling to be prioritized
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
