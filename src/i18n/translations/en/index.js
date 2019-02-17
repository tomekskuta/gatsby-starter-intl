import flatten from 'flat';

import notFound from './404';
import home from './home';
import page2 from './page-2';

const messages = { home, page2, notFound };

export default flatten(messages);
