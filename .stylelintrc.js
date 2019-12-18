module.exports = {
  extends: './node_modules/@bahn-x/webdev-configs/stylelint',
  ignoreFiles: [
    "./node_modules/**/*",
    "./build/**/*",
    "./config/**/*",
    "./public/**/*",
    "./dist/**/*",
    "./sass/vendor/**/*",
    "./sass/styleguide/**/*",
    "./sass/setup/_reset.scss",
    // email css forces us to do cruel things
    // where the linter would complain basically everywhere
    "./email/**/*",
  ],
  rules: {
    // we don't enforce css properties to be sorted alphabetically
    "order/properties-alphabetical-order": null,
    // stylelint-config-sass-guidelines requires
    // you to omit the '.scss' ending in @import statements.
    // However, since we are using webpack to build the css,
    // and there are also non-scss files (like .js) in folders like /components,
    // webpack would try to import them into the scss and produce an error.
    // Hence, we need to be able to specify the file ending to actually
    // only import the .scss files.
    "scss/at-import-partial-extension-blacklist": null,
  }
};
