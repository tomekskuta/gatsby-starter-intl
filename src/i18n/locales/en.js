import flatten from 'flat';

const messages = {
  hello: 'world of imagines',
  world: {
    my: 'my world',
  },
};

export default flatten(messages);
