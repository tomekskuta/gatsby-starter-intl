import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';

import HomePage from '../pages/index';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Gatsby Starter Intl`,
        },
      },
    }),
  );
});

describe('HomePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage pageContext={{ locale: 'en' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
