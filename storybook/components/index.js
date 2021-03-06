import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BasicViewScreen from './View/BasicViewScreen';
import LinearGradientViewScreen from './View/LinearGradientViewScreen';
import IconsScreen from './Symbol/IconsScreen';
import FadeViewScreen from './View/FadeViewScreen';
import InfinateScrollViewScreen from './View/InfinateScrollViewScreen';
import ButtonScreen from './Button/ButtonScreen';
import RoundButtonScreen from './Button/RoundButtonScreen';
import AvatarScreen from './Avatar/AvatarScreen';
import FormatScreen from './Text/FormatScreen';
import ImageScreen from './Image/ImageScreen';
import PaperScreen from './Paper/PaperScreen';
import ModalScreen from './Modal/ModalScreen';
import OGPscreen from './OGP/OGPscreen';
import GalleryScreen from './Gallery/GalleryScreen';
import LoaderScreen from './Loader/LoaderScreen';
import ElasticViewScreen from './View/ElasticViewScreen';
import DividerScreen from './Divider/DividerScreen';
import LabelScreen from './Label/LabelScreen';
import InputScreen from './TextField/InputScreen';
import AlertScreen from './Alert/AlertScreen';
import ToolTipScreen from './ToolTip/ToolTipScreen';
import CardScreen from './Card/CardScreen';
import LunchScreen from './Loader/LunchScreen';

export default storiesOf('Components', module)
	.add('Icons', () => <IconsScreen />)
	.add('Default Views', () => <BasicViewScreen />)
	.add('LinearGradient View', () => <LinearGradientViewScreen />)
	.add('Fade View', () => <FadeViewScreen />)
	.add('Infinate Scroll View', () => <InfinateScrollViewScreen />)
	.add('Button', () => <ButtonScreen />)
	.add('Round Button', () => <RoundButtonScreen />)
	.add('Avatar', () => <AvatarScreen />)
	.add('Format', () => <FormatScreen />)
	.add('Image', () => <ImageScreen />)
	.add('Paper', () => <PaperScreen />)
	.add('Modal', () => <ModalScreen />)
	.add('OGP', () => <OGPscreen />)
	.add('Gallery', () => <GalleryScreen />)
	.add('Loader', () => <LoaderScreen />)
	.add('Elastic View', () => <ElasticViewScreen />)
	.add('Divider', () => <DividerScreen />)
	.add('Label', () => <LabelScreen />)
	.add('Text Field', () => <InputScreen />)
	.add('Alert', () => <AlertScreen />)
	.add('ToolTip', () => <ToolTipScreen />)
	.add('Cards', () => <CardScreen />)
	.add('LunchLoader', () => <LunchScreen />);
