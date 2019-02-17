import flatten from 'flat';

import home from './home';
import page2 from './page-2';

const messages = { home, page2 };

export default flatten(messages);
