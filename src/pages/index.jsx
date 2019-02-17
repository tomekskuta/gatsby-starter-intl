import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';
import Image from '../components/Image';

const IndexPage = () => (
  <>
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
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
