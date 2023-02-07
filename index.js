module.exports = {
  extends: [
    './base.js',
    './import.js',
  ],
  globals: {
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly',
    Behavior: 'readonly',
    wx: 'readonly',
    swan: 'readonly',
    getApp: 'readonly',
    getCurrentPages: 'readonly',
    jest: 'readonly',
  },
  ignorePatterns: [
    '**/node_modules',
    '**/miniprogram_npm',
  ],
};
