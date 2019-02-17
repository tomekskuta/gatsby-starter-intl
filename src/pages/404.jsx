import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';

const NotFoundPage = () => (
  <>
    <h1>
      <FormattedMessage id="notFound.NOT FOUND" />
    </h1>
    <p>
      <FormattedMessage id="notFound.You just hit a route that doesnt exist the sadness" />
    </p>
  </>
);

const customProps = {
  localeKey: 'notFound',
};

export default withLayout(customProps)(NotFoundPage);
