import { Tag } from "@markdoc/markdoc";
import { Tabs } from "../../components";

export const tabs = {
  render: Tabs,
  attributes: {},
  transform(node, config) {
    const labels = node
      .transformChildren(config)
      .filter((child) => child && child.name === "Tab")
      .map((tab) => (typeof tab === "object" ? tab.attributes.label : null));

    return new Tag(this.render, { labels }, node.transformChildren(config));
  },
};
