const path = require('path');
const sections = require('./styleguide-sections.config');

module.exports = {
  sections,
  require: [path.join(__dirname, './sass/build.scss')],
  pagePerSection: true,
  exampleMode: 'expand',
  title: 'BahnX React components',
  styleguideDir: 'build/docs',

  getComponentPathLine(componentPath) {
    const name = path
      .basename(componentPath)
      .replace(/\.(jsx|tsx)/, '')
      .replace(/^\w/, (w) => w.toUpperCase())
      .replace(/-doc$/, '');
    const dir = path.dirname(componentPath);
    return `import ${name} from '@bahn-x/${dir}';`;
  },

  updateExample(props) {
    // ```js should not get a live preview:
    if (props.lang !== 'jsx') {
      // eslint-disable-next-line no-param-reassign
      props.settings = { static: true };
    }
    return props;
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?sourceMap',
            'postcss-loader?sourceMap',
            {
              loader: 'sass-loader?sourceMap',
              options: {
                includePaths: [path.resolve(__dirname, './node_modules/')],
              },
            },
            'import-glob-loader',
          ],
          exclude: [path.resolve(__dirname, './email')],
        },
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ],
    },
  },
};
