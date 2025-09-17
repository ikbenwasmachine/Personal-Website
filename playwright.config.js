const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'http://localhost:3001',
  },
  testMatch: 'e2e/**/*.spec.js',
});