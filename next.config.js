const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: '/plantala/',
  basePath: '/plantala',
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
};
