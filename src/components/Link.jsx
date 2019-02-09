import React from 'react';
import { Link } from 'gatsby';
import { injectIntl } from 'react-intl';

const LocalizedLink = ({ to, intl: { locale }, ...props }) => (
  <Link {...props} to={`/${locale}${to}`} />
);

export default injectIntl(LocalizedLink);
