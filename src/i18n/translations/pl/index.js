import flatten from 'flat';

import home from './home';
import page2 from './page-2';

const message = { home, page2 };

export default flatten(message);
