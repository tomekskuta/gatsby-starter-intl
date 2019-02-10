import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../i18n/languages';
import PageContext from '../layout/PageContext';

const LangButton = ({ name, chosen, onClick }) => (
  <button onClick={onClick} style={{ background: chosen ? 'pink' : 'white' }}>
    {name}
  </button>
);

const Langs = ({ intl: { locale } }) => {
  const pageContext = useContext(PageContext);

  const handleSetLang = language => {
    const { originalPath } = pageContext.page;
    const newPathname = `/${language}${originalPath}`;

    localStorage.setItem('language', language);
    navigate(newPathname);
  };

  return (
    <div>
      {languages.map(language => (
        <LangButton
          key={language.path}
          name={language.locale}
          chosen={language.path === locale}
          onClick={() => handleSetLang(language.path)}
        />
      ))}
    </div>
  );
};

export default injectIntl(Langs);
