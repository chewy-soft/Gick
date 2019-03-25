import React from 'react';
import { View } from 'react-native';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { Example, ExampleDark } from '../../sampleUI/Example';
import Code from '../../sampleUI/Code';
import Description from '../../sampleUI/Description';
import { DividerHorizontal, DividerVertical } from '../../sampleUI/helps';
import PropSize from './examples/PropSize';
import OrderButton from '../../../src/components/Buttons/OrderButton';
import Button from '../../../src/components/Buttons/Button';
import { themes } from '../../../src/components/Buttons/styles/Button/styles.default';
import _ from 'lodash';

export default (props) => (
	<PageContainer>
		<PageTitle title="Buttons" />
		<Description info="Button Colors" />
		<ExampleDark
			example={_.map(themes, (m, index) => (
				<View key={index}>
					<Code>{`<Button theme='${index}' content='${index}' onPress='...' />`}</Code>
					<Button theme={index} content={index} icon="qq" />
					<DividerHorizontal />
				</View>
			))}
		/>
		<Description info="Button Size S" />
		<Example
			example={
				<View>
					<Code>{"<Button theme='darkBlue' content='...' onPress='...' />"}</Code>
					<PropSize />
				</View>
			}
		/>
		<Description info="Button disabled,Boolean。" />
		<ExampleDark
			example={
				<View>
					<Code>{'<Button disabled content="Disabled button" />'}</Code>
					<Button disabled content="Disabled button" />
				</View>
			}
		/>
		<Description info="Example Order Button" />
		<ExampleDark
			example={
				<View>
					<Code>{'<OrderButton order="unset" />'}</Code>
					<OrderButton order="unset" />
					<Code>{'<OrderButton order="up" />'}</Code>
					<OrderButton order="up" />
					<Code>{'<OrderButton order="down" />'}</Code>
					<OrderButton order="down" />
				</View>
			}
		/>
	</PageContainer>
);
