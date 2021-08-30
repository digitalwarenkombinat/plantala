const pathPrefix = process.env.DEPLOY_TARGET === 'gh-pages' ? '/plantala' : '';

module.exports = {
  basePath: pathPrefix,
  assetPrefix: `${pathPrefix}/`,
  env: {
    pathPrefix,
  },
};
