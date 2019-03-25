import React from 'react';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { Example, ExampleDark } from '../../sampleUI/Example';
import Code from '../../sampleUI/Code';
import Description from '../../sampleUI/Description';
import * as data from '../../json/data';
import { Text } from 'react-native';
import View from '../../../src/components/View/View';
import HoverView from '../../../src/components/View/HoverView';
import ScrollView from '../../../src/components/View/ScrollView';
import ExternalLinkView from '../../../src/components/View/ExternalLinkView';

let datas = [];
for (var i = 0; i < 10; i++) {
	datas.push(
		<Text style={{ color: '#fff' }} key={i}>
			{data.ramData}
		</Text>
	);
}

export default (props) => (
	<PageContainer>
		<PageTitle title="Basic Views" />
		<Description info="Customize Default View with onPress" />
		<Example
			example={
				<React.Fragment>
					<Code>{`<View onPress={()=>alert('Hello Gick')}><Text>Hello Gick</Text></View>`}</Code>
					<View onPress={() => alert('Hello Gick')}>
						<Text style={{ color: '#fff' }}>Hello Gick</Text>
					</View>
				</React.Fragment>
			}
		/>
		<Description info="Hover View with onPress" />
		<Example
			example={
				<View>
					<Code
					>{`<HoverView onPress={()=>alert('Im being hovered')} hoverColor="#aaa"><Text>Hover Me !</Text></HoverView>`}</Code>
					<HoverView onPress={() => alert('Im being hovered')} hoverColor="#aaa">
						<Text style={{ color: '#fff' }}>Hover Me !</Text>
					</HoverView>
				</View>
			}
		/>
		<Description info="Scroll View" />
		<Example
			example={
				<View>
					<Code>{`<ScrollView style={{height: 50}}>...</ScrollView>`}</Code>
					<ScrollView style={{ height: 80 }}>{datas}</ScrollView>
				</View>
			}
		/>
		<Description info="URL Link" />
		<Example
			example={
				<View>
					<Code>{`<ExternalLinkView><Text>WebSite</Text></ExternalLinkView>`}</Code>
					<ExternalLinkView url="https://boardgamereview.cn/">
						<Text style={{ color: '#fff' }}>WebSite</Text>
					</ExternalLinkView>
				</View>
			}
		/>
	</PageContainer>
);
