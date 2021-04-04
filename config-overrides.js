/* config-overrides.js */
const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@library': 'library/src',
        '@containers': 'src/containers',
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@routes': 'src/routes',
        '@static': 'src/static',
        }
    )(config)

    return config;
}
