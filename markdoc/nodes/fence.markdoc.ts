import { nodes } from "@markdoc/markdoc";
import { Code } from "@/components";

export const fence = {
  render: Code,
  attributes: nodes.fence.attributes,
};
