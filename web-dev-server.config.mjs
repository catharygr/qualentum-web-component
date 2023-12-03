const hmr = process.argv.includes("--hmr");

export default /** @type {import('vitepress').UserConfig} */ ({
  open: "./",
  watch: !hmr,
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },

  plugins: [],
});
