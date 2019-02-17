import React, { useEffect } from 'react';

import detectLocale from './detectLocale';

const Redirect = ({ location: { pathname }, navigate }) => {
  useEffect(() => {
    const detected = detectLocale();
    const newUrl = `/${detected}${pathname}`;

    localStorage.setItem('language', detected);
    navigate(newUrl);
  }, []);

  return <div />;
};

export default Redirect;
