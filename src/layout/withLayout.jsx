import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider, addLocaleData } from 'react-intl';

import PageContext from './PageContext';

import plData from 'react-intl/locale-data/pl';
import enData from 'react-intl/locale-data/en';
import locales from '../i18n/locales';

import Header from '../components/Header';
import './layout.css';

addLocaleData([...plData, ...enData]);

const withLayout = customProps => PageComponent => props => {
  const { locale } = props.pageContext;
  const pageContextValue = { custom: customProps, page: props.pageContext };

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
          <PageContext.Provider value={pageContextValue}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>
                <PageComponent {...props} />
              </main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </PageContext.Provider>
        </IntlProvider>
      )}
    />
  );
};

withLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withLayout;
