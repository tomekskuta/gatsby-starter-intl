import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/layout';
import Link from '../components/Link';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ pageContext: { locale }, location }) => (
  <Layout locale={locale} location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <FormattedMessage id="hello" />
    <FormattedMessage id="world.my" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
