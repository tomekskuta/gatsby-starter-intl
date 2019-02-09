import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import Link from '../components/Link';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>
      <FormattedMessage id="home.Hi people" />
    </h1>
    <p>
      <FormattedMessage id="home.Welcome to your new Gatsby site" />
    </p>
    <p>
      <FormattedMessage id="home.Now go build something great" />
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">
      <FormattedMessage id="home.Go to page 2" />
    </Link>
  </Layout>
);

export default IndexPage;
