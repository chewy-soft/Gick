import React from "react";
import { storiesOf } from "@storybook/react-native";
import BasicView from "./View/BasicView";
import LinearGradientView from "./View/LinearGradientView";
import Icons from "./Symbol/Icons";
import FadeView from "./View/FadeView";
import InfinateScrollView from "./View/InfinateScrollView";

export default storiesOf("Components", module)
  .add("Icons", () => <Icons />)
  .add("Default Views", () => <BasicView />)
  .add("LinearGradient View", () => <LinearGradientView />)
  .add("Fade View", () => <FadeView />)
  .add("Infinate Scroll View", () => <InfinateScrollView />);
