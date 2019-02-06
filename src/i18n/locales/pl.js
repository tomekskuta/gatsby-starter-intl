import flatten from 'flat';

const messages = {
  hello: 'fajny świat',
  world: {
    my: 'mój świat',
  },
};

export default flatten(messages);
