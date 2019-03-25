import React from 'react';
import { View } from 'react-native';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { Example, ExampleDark } from '../../sampleUI/Example';
import Code from '../../sampleUI/Code';
import Description from '../../sampleUI/Description';
import { DividerHorizontal, DividerVertical } from '../../sampleUI/helps';
import OrderButton from '../../../src/components/Buttons/OrderButton';
import Button from '../../../src/components/Buttons/Button';
import { themes, sizes } from '../../../src/components/Buttons/styles/Button/styles.default';
import _ from 'lodash';

export default (props) => (
	<PageContainer>
		<PageTitle title="Buttons" />
		<Description info="Button Colors" />
		<ExampleDark
			example={_.map(themes, (m, index) => (
				<React.Fragment key={index}>
					<Code>{`<Button theme='${index}' content='${index}' onPress='...' />`}</Code>
					<Button theme={index} content={index} icon="qq" />
					<DividerHorizontal />
				</React.Fragment>
			))}
		/>
		<Description info="Button Sizes" />
		<Example
			example={_.map(sizes, (i, index) => (
				<React.Fragment key={index}>
					<Code>{`<Button theme='darkBlue' size='${index}' content='...' onPress='...' />`}</Code>
					<Button icon="good" size={index} theme="darkBlue" content="好评" />
					<DividerHorizontal />
				</React.Fragment>
			))}
		/>
		<Description info="Button disabled,Boolean。" />
		<ExampleDark
			example={
				<React.Fragment>
					<Code>{'<Button disabled content="Disabled button" />'}</Code>
					<Button disabled content="Disabled button" />
				</React.Fragment>
			}
		/>
		<Description info="Example Order Button" />
		<ExampleDark
			example={
				<React.Fragment>
					<Code>{'<OrderButton order="unset" />'}</Code>
					<OrderButton order="unset" />
					<Code>{'<OrderButton order="up" />'}</Code>
					<OrderButton order="up" />
					<Code>{'<OrderButton order="down" />'}</Code>
					<OrderButton order="down" />
				</React.Fragment>
			}
		/>
	</PageContainer>
);
