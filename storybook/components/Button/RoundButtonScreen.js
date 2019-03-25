import React from 'react';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { ExampleDark } from '../../sampleUI/Example';
import Code from '../../sampleUI/Code';
import Description from '../../sampleUI/Description';
import _ from 'lodash';
import { themes, sizes } from '../../../src/components/Buttons/styles/RoundButton/styles';
import RoundButton from '../../../src/components/Buttons/RoundButton';

export default (props) => (
	<PageContainer>
		<PageTitle title="Round Button Component" />
		<Description info="Themes" />
		<ExampleDark
			example={_.map(themes, (t, index) => (
				<React.Fragment key={index}>
					<Code>{`<RoundButton theme='${index}' icon='add' onPress={...} />`}</Code>
					<RoundButton theme={index} icon="add" onPress={() => {}} />
				</React.Fragment>
			))}
		/>
		<Description info="Sizes" />
		<ExampleDark
			example={_.map(sizes, (s, index) => (
				<React.Fragment>
					<Code>{`<RoundButton theme='qq' size='${index}' icon='qq' onPress={...} />`}</Code>
					<RoundButton theme="qq" size={index} icon="qq" onPress={() => {}} />
				</React.Fragment>
			))}
		/>
	</PageContainer>
);
