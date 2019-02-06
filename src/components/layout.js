import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider, addLocaleData } from 'react-intl';

import plData from 'react-intl/locale-data/pl';
import enData from 'react-intl/locale-data/en';

import { locales } from '../i18n';

import Header from './header';
import './layout.css';

addLocaleData([...plData, ...enData]);

const Layout = ({ children, locale, location }) => {
  console.log(location);
  // useEffect(() => {
  //   const langKeys = languages.map(language => language.path);
  //   const { pathname } = props.location;

  //   // Skip build, Browsers only
  //   if (typeof window !== 'undefined') {
  //     const detected =
  //       window.localStorage.getItem('language') ||
  //       browserLang({
  //         languages: langKeys,
  //         fallback: 'en',
  //       });

  //     // const newUrl = withPrefix(`/${detected}${pathname}`);
  //     const newUrl = languages.find(lang => lang.path === detected).default
  //       ? `/${pathname}`
  //       : `/${detected}/${pathname}`;
  //     window.localStorage.setItem('language', detected);
  //     window.location.replace(newUrl);
  //   }
  // }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <IntlProvider locale={locale} messages={locales[locale]}>
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        </IntlProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
