import React, { useEffect } from 'react';
import browserLang from 'browser-lang';

import languages from './languages';

const Redirect = ({ location: { pathname } }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const detected =
        localStorage.getItem('language') ||
        browserLang({
          languages: languages.map(language => language.path),
          fallback: 'en',
        });
      const newUrl = `/${detected}${pathname}`;
      localStorage.setItem('language', detected);
      window.location.replace(newUrl);
    }
  }, []);

  return <div />;
};

export default Redirect;
