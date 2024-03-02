import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({

  base: "/react-portfolio-main/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  }
});
