import { configure } from "@storybook/react";
import "../src/styles.css";

function loadStories() {
  require("../storybook/welcome/index.js");
  require("../storybook/components/index.js");
  require("../storybook/contianers/index.js");
}

configure(loadStories, module);
