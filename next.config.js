const pathPrefix = process.env.DEPLOY_TARGET === 'gh-pages' ? '/julala' : '';

module.exports = {
  basePath: pathPrefix,
  assetPrefix: `${pathPrefix}/`,
  env: {
    pathPrefix,
  },
};
