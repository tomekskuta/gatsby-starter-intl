/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const languages = require('./src/i18n/languages');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // console.log('page', page);

  if (page.path.includes('404')) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    //   const redirect = path.resolve('src/i18n/redirect.js');
    //   const redirectPage = {
    //     ...page,
    //     component: redirect,
    //     context: {
    //       languages,
    //       locale: '',
    //       routed: false,
    //       redirectPage: page.path,
    //     },
    //   };

    deletePage(page);
    // createPage(redirectPage);

    // Object.keys(languages).map(lang => {
    //   const localizedPath = languages[lang].default ? page.path : languages[lang].path + page.path;

    //   return createPage({
    //     ...page,
    //     path: localizedPath,
    //     context: {
    //       locale: lang,
    //     },
    //   });
    // });
    languages.forEach(lang => {
      const localizedPath = lang.default ? `/${page.path}` : `/${lang.path}/${page.path}`;
      const localePage = {
        ...page,
        originalPath: page.path,
        path: localizedPath,
        context: {
          languages,
          locale: lang.path,
          routed: true,
          originalPath: page.path,
        },
      };
      createPage(localePage);
    });

    resolve();
  });
};
