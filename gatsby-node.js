/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const languages = require('./src/i18n/languages');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    const Redirect = path.resolve('src/i18n/redirect.jsx');
    const redirectPage = {
      ...page,
      component: Redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
      },
    };

    deletePage(page);
    createPage(redirectPage);

    languages.forEach(lang => {
      const localizedPath = `/${lang.locale}${page.path}`;
      const localePage = {
        ...page,
        originalPath: page.path,
        path: localizedPath,
        context: {
          languages,
          locale: lang.locale,
          routed: true,
          originalPath: page.path,
        },
      };
      createPage(localePage);
    });

    resolve();
  });
};
