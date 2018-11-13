import React from "react";
import { storiesOf } from "@storybook/react-native";
import BasicViewScreen from "./View/BasicViewScreen";
import LinearGradientViewScreen from "./View/LinearGradientViewScreen";
import IconsScreen from "./Symbol/IconsScreen";
import FadeViewScreen from "./View/FadeViewScreen";
import InfinateScrollViewScreen from "./View/InfinateScrollViewScreen";
import ButtonScreen from "./Button/ButtonScreen";
import RoundButtonScreen from "./Button/RoundButtonScreen";
import FlatButtonScreen from "./Button/FlatButtonScreen";
import FlatTabScreen from "./Button/FlatTabScreen";
import AvatarScreen from "./Avatar/AvatarScreen";
import FormatScreen from "./Text/FormatScreen";
import ImageScreen from "./Image/ImageScreen";
import PaperScreen from "./Paper/PaperScreen";

export default storiesOf("Components", module)
  .add("Icons", () => <IconsScreen />)
  .add("Default Views", () => <BasicViewScreen />)
  .add("LinearGradient View", () => <LinearGradientViewScreen />)
  .add("Fade View", () => <FadeViewScreen />)
  .add("Infinate Scroll View", () => <InfinateScrollViewScreen />)
  .add("Button", () => <ButtonScreen />)
  .add("Round Button", () => <RoundButtonScreen />)
  .add("Flat Button", () => <FlatButtonScreen />)
  .add("Flat Tab Button", () => <FlatTabScreen />)
  .add("Avatar", () => <AvatarScreen />)
  .add("Format", () => <FormatScreen />)
  .add("Image", () => <ImageScreen />)
  .add("Paper", () => <PaperScreen />);