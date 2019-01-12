import React from 'react';
import { View } from 'react-native';
import Code from '../../sampleUI/Code';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { Example, ExampleDark } from '../../sampleUI/Example';
import Description from '../../sampleUI/Description';
import PropSize from './expamles/PropSize';
import PropOnline from './expamles/PropOnline';
import PropBadge from './expamles/PropBadge';
import PropName from './expamles/PropName';

export default (props) => (
	<PageContainer>
		<PageTitle title="Avatar Component" />
		<Description info="Sizes" />
		<ExampleDark
			example={
				<View>
					<Code>{"<Avatar src='...' size='xs'/>"}</Code>
					<PropSize />
				</View>
			}
		/>
		<Description info="Online State" />
		<Example
			example={
				<View>
					<Code>{"<Avatar src='...' size='l' online='online' theme='light'/>"}</Code>
					<PropOnline theme="light" />
				</View>
			}
		/>
		<ExampleDark example={<PropOnline theme="dark" />} />
		<Description info="With Badge" />
		<ExampleDark
			example={
				<View>
					<Code>{"<Avatar size='l' online='online' userBadge='curator' />"}</Code>
					<PropBadge />
				</View>
			}
		/>
		<Description info="No image.Only name" />
		<ExampleDark
			example={
				<View>
					<Code>{"<Avatar size='l' online='online' name='Gick' />"}</Code>
					<PropName />
				</View>
			}
		/>
	</PageContainer>
);
