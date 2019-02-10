import React from 'react';

import withLayout from '../layout/withLayout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

const customProps = {};

export default withLayout(customProps)(NotFoundPage);
