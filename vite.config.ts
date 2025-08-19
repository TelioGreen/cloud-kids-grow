import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const allowed = [
  "kidz-on-the-cloud-oczhj.ondigitalocean.app",
  // or replace the line above with ".ondigitalocean.app" to allow any DO app subdomain
  "localhost",
  "127.0.0.1",
];

export default defineConfig(({ mode }) => {
  const port = Number(process.env.PORT) || 8080;

  return {
    server: {
      host: "0.0.0.0",
      port,
      allowedHosts: allowed, // require explicit allow-list
    },
    preview: {
      host: "0.0.0.0",
      port,
      allowedHosts: allowed, // (inherits from server by default)
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
  };
});
