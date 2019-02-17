import browserLang from 'browser-lang';
import languages from './languages';

const fallbackLang = languages.find(language => language.default).locale;

export default () =>
  localStorage.getItem('language') ||
  browserLang({
    languages: languages.map(language => language.locale),
    fallback: fallbackLang,
  });
