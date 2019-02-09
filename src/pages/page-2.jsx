import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import Link from '../components/Link';
import SEO from '../components/SEO';

const SecondPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <SEO title="Page two" />
    <h1>
      <FormattedMessage id="page2.Hi from the second page" />
    </h1>
    <p>
      <FormattedMessage id="page2.Welcome to page 2" />
    </p>
    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
  </Layout>
);

export default SecondPage;
