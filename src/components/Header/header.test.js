import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header siteTitle="Default Starter" hideLangs={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
