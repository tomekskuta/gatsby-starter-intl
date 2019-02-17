import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';

const SecondPage = () => (
  <>
    <h1>
      <FormattedMessage id="page2.Hi from the second page" />
    </h1>
    <p>
      <FormattedMessage id="page2.Welcome to page 2" />
    </p>
    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
  </>
);

const customProps = {
  localeKey: 'page2',
};

export default withLayout(customProps)(SecondPage);
