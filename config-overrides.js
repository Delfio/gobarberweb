// eslint-disable-next-line import/no-unresolved
const { addBabelPlugin, override } = require('customize-cra');
/**
 * Configurando babel para poder importar os arquivos de uma melhor forma
 * "  ~   " com o tio. O tio substitui o src
 */
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
