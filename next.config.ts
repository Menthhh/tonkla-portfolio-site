const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/https://github.com/Menthhh/tonkla-portfolio-site/' : '',
};