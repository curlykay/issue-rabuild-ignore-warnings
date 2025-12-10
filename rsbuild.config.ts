import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginVue2()],
  tools: {
    rspack: {
      ignoreWarnings: [/parser_helper_x.js/],
      // ignoreWarnings: [(warning) => false],
    },
  },
});
