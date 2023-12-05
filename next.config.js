/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      config.externals = [...config.externals, 'hnswlib-node'];  // by adding this line, solved the import
      return config;
    },
  };

  export default config;