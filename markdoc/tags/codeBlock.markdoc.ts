import { CodeBlock } from "@/components";

export const codeBlock = {
  render: CodeBlock,
  attributes: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    request: {
      type: Object,
    },
    collapsable: {
      type: Boolean,
    },
  },
};
