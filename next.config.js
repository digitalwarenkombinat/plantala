const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/digitalwarenkombinat.github.io/plantala' : '',
  basePath: '/plantala',
};
