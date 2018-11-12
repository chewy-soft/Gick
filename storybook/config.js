import { configure } from "@storybook/react";
import "../src/index.css";

function loadStories() {
  require("../storybook/welcome/index.js");
  require("../storybook/components/index.js");
}

configure(loadStories, module);
