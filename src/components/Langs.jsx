import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../i18n/languages';

const LangButton = ({ name, chosen, onClick }) => (
  <button onClick={onClick} style={{ background: chosen ? 'pink' : 'white' }}>
    {name}
  </button>
);

const Langs = ({ intl: { locale } }) => {
  const [lang, setLang] = useState(locale);

  const handleSetLang = language => {
    localStorage.setItem('language', language);
    const pathname = window.location.pathname.split('/');
    pathname[1] = language;
    const newPathname = pathname.join('/');
    navigate(newPathname);
    setLang(language);
  };

  return (
    <div>
      {languages.map(language => (
        <LangButton
          key={language.path}
          name={language.locale}
          chosen={language.path === lang}
          onClick={() => handleSetLang(language.path)}
        />
      ))}
    </div>
  );
};

export default injectIntl(Langs);
