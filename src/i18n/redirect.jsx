import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import browserLang from 'browser-lang';

import languages from './languages';

const Redirect = ({ location: { pathname } }) => {
  useEffect(() => {
    const fallbackLang = languages.find(language => language.default).locale;

    const detected =
      localStorage.getItem('language') ||
      browserLang({
        languages: languages.map(language => language.locale),
        fallback: fallbackLang,
      });

    const newUrl = `/${detected}${pathname}`;

    localStorage.setItem('language', detected);
    navigate(newUrl);
  }, []);

  return <div />;
};

export default Redirect;
