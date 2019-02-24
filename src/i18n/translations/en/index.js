import flatten from 'flat';

import error404 from './404';
import home from './home';
import page2 from './page-2';

const messages = { error404, home, page2 };

export default flatten(messages);
