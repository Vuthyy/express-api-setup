module.exports = {
  apps: [
    {
      name: "product-service",
      script: "./build/server.js",
      watch: ["./build"], // Watch only the build directory
      ignore_watch: ["node_modules", "package.json"], // Add package.json if it's not necessary to watch
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
    },
  ],
};
