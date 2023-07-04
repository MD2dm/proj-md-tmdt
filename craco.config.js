const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@layoutStore': path.resolve(__dirname, 'src/layouts'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@routers': path.resolve(__dirname, 'src/routers'),
      '@utility': path.resolve(__dirname, 'src/utility'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@i18n': path.resolve(__dirname,'src/i18n'),
      '@locales': path.resolve(__dirname,'src/locales'),
      '@interface': path.resolve(__dirname,'src/interface'),
    }
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};