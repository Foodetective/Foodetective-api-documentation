import { ListItem } from "@/components";

export const listitem = {
  render: ListItem,
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
    },
    validation: {
      type: String,
    },
    type: {
      type: String,
    },
  },
};
