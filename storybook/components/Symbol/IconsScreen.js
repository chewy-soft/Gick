import React from 'react';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import Description from '../../sampleUI/Description';
import Symbol from '../../../src/components/Symbol';
import { ExampleDark } from '../../sampleUI/Example';
import { DividerHorizontal } from '../../sampleUI/helps';
import Code from '../../sampleUI/Code';
import mapping from '../../../src/components/Symbol/mappings';
import _ from 'lodash';

export default (props) => (
	<PageContainer>
		<PageTitle title="Icons" />
		<Description info="use react-native-vector-icons" />
		<ExampleDark
			example={_.map(mapping, (m, index) => (
				<React.Fragment key={index}>
					<Code>{`<Symbol name='${index}' />`}</Code>
					<Symbol name={index} />
					<DividerHorizontal />
				</React.Fragment>
			))}
		/>
	</PageContainer>
);
