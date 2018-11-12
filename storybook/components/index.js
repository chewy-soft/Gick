import React from "react";
import { storiesOf } from "@storybook/react-native";
import BasicView from "../components/View/BasicView";
import LinearGradientView from "../components/View/LinearGradientView";
import Icons from "../components/Symbol/Icons";

export default storiesOf("Components", module)
  .add("Icons", () => <Icons />)
  .add("Default Views", () => <BasicView />)
  .add("LinearGradient View", () => <LinearGradientView />);
