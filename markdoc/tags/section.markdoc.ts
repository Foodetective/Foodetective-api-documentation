import { Section } from "../../components";

export const section = {
  render: Section,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
  },
}