import { ListItem } from '../../components';

export const listitem = {
  render: ListItem,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
  },
};
