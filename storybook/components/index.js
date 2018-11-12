import React from "react";
import { storiesOf } from "@storybook/react-native";
import BasicViewScreen from "./View/BasicViewScreen";
import LinearGradientViewScreen from "./View/LinearGradientViewScreen";
import IconsScreen from "./Symbol/IconsScreen";
import FadeViewScreen from "./View/FadeViewScreen";
import InfinateScrollViewScreen from "./View/InfinateScrollViewScreen";
import ButtonScreen from "./Button/ButtonScreen";
import RoundButtonScreen from "./Button/RoundButtonScreen";

export default storiesOf("Components", module)
  .add("Icons", () => <IconsScreen />)
  .add("Default Views", () => <BasicViewScreen />)
  .add("LinearGradient View", () => <LinearGradientViewScreen />)
  .add("Fade View", () => <FadeViewScreen />)
  .add("Infinate Scroll View", () => <InfinateScrollViewScreen />)
  .add("Button", () => <ButtonScreen />)
  .add("Round Button", () => <RoundButtonScreen />);
