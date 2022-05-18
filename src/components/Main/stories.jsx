import Main from '.';

export default {
  title: 'Main',
  component: Main,
};

export const Basic = (args) => <Main {...args} />;

Basic.args = {
  title: 'title basic',
  description: 'description',
};
