<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# :bullettrain_side: Gatsby starter intl :airplane:

Gatsby v2 i18n starter based on [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default) and [gatsby-starter-default-intl](https://github.com/wiziple/gatsby-starter-default-intl).
Gatsby creates static pages for every language and detects your browser locale. :guitar:

...and you know, it's React 16.8 - you can use **hooks**!

[Checkout demo!](https://gatsby-starter-intl.tomekskuta.pl/)

## How to start

To use **Gatsby starter intl** you have to install Gatsby CLI

```sh
npm install global gatsby-cli
or
yarn global add gatsby-cli
```

Then use it to start new project based on **Gatsby starter intl**

```sh
gatsby new your-project-name https://github.com/tomekskuta/gatsby-starter-intl
cd your-project-name/
gatsby develop
```

Your site is running at `localhost:8000`.

If you want to compile production build just run `gatsby build`.

Start build your great i18n Gatsby app! :rocket:

## How it works

Gatsby creates **static pages** for every language sets in `src/i18n/languages.js`.
It looks like `/en/page-2` and `/pl/page-2`. Google loves it - they said.

### Translations

Translations are set in `src/i18n/translations/`. For better navigation I prefer create files for every page. Unfortunately react-intl supports only flat objects so in `src/i18n/translations/chosen-lang/index.js` I used [flat](https://github.com/hughsk/flat). Don't forget to import your translate file into `index.js` in the same directory.
Then if I want to get translation for `Welcome to page 2` on `page-2` I do it this way:

```jsx
<FormattedMessage id="page2.Welcome to page 2" />
```

Translation is in `src/i18n/translations/en/page-2.js` and looks like:

```js
export default {
  'Welcome to page 2': 'Welcome to page 2',
};
```

### Languages

Languages list is in `src/i18n/languages.js`. Elements of array has attrs:

- locale - key to identify your locale,
- label - pretty name of your locale to display in list or buttons in your UI.
- default - if true it is fallback language for app. It is used in `src/i18n/detectLocale` and `src/layout/withLayout.jsx`.

### Redirect

Redirect is a component declared in `src/i18n/redirect.jsx`.
It is used in `gatsby-node.js` as a default component for every root without locale.
It detects language from localStorage or browser langs and redirect to correct locale route.

`/page-2/` :point_right: `/en/page-2`

### Layout

There are every necessary components and properties used by every page. I moved it from `Layout.js` to a HOC `withLayout`. I did it to minimize amount of props manually sets from page to Layouts components. :boy::point_left:
In standard way you have to set `locale` and `pageContext` on every page. Now if you don't need to set any custom props just import `withLayout` to your page and use it in export:

```jsx
// src/pages/my-page.jsx

import withLayout from '../layout';

const MyPage = () => <div>Hello guys!</div>;

export default withLayout()(MyPage);
```

Of course you can set your custom props to layout:

```jsx
const customProps = {
  mySuperCustomProp: 'oh yeah Im his super custom prop',
};

export default withLayout(customProps)(MyPage);
```

In this example I used 2 customProps:

- localeKey - it can tells your layout the page key in `src/i18n/translations/[locale]/index.js` to set individual properties to every language page (ex. site title, description or keywords).
- hideLangs - to hide possibility of changing languages (ex. in 404).

witLayout use [**Context API**](https://reactjs.org/docs/context.html) to share `pageContext` and `customProps` to every component you want in your page.
PageContext object looks like:

```js
PageContext = {
  custom, // customProps
  page, // pageContext from Gatsby magic
};
```

To get context you can use hooks:

```jsx
// src/components/MyComponent.jsx

import React, { useContext } from 'react';
import PageContext from '../layout/PageContext';

const MyComponent = () => {
  const pageContext = useContext(PageContext);
  return <div>{pageContext.page.locale}</div>;
};
```

### Change Languages

Inside `src/components/Langs.jsx` is possibility to change language.
Set language function set chosen locale to `localStorage` and use Gatsby's `navigate` method to redirect to chosen locale page.

### 404

Gatsby makes locale pages for 404 too but it doesn't work properly on local develop server.
To see your error page hit `gatsby build && gatsby serve` in bash and then you can get all your production build on `localhost:9000`.

I'm not sure but 404 constructed this way can not work properly with some static page servers (I didn't use any of them with this starter). Starter's Demo is served by [Express](https://expressjs.com/) and function to serve error page looks like this:

```js
app.use((req, res, next) => {
  fs.readFile(__dirname + './public/404.html', 'utf-8', (err, page) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
  });
  return;
});
```

If you don't need i18n inside your 404 you can put this condition at the top of `onCreatePage` method in `gatsby-node.js`:

```js
if (page.path.includes('404')) {
  return Promise.resolve();
}
```

Gatsby will skip building locale pages for 404 and you can see error page during developing with `gatsby develop`.

## Tests

:point_right: :bug:

Unit tests are configured with [Jest](https://jestjs.io/) followed [official Gatsby documentation](https://www.gatsbyjs.org/docs/unit-testing/).

There is `src/__pages-tests__` directory prepared for pages tests where I set example snapshot test for homepage.
Test for `<Header />` is in `src/components/Header/header.test.js` next to file with the component.

[Test react-intl.](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl#jest)

[More info about testing Gatsby components and Graphql.](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/testing-components-with-graphql.md)

## Contributing

If you have any question, see bugs or you think some feature can be written better - just open pull request or issue. I will be happy to help and learn from you.

## License

[MIT](https://opensource.org/licenses/MIT)
