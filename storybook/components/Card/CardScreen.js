import React from 'react';
import { View, Text } from 'react-native';
import Code from '../../sampleUI/Code';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { Example, ExampleDark } from '../../sampleUI/Example';
import Description from '../../sampleUI/Description';
import Card from '../../../src/components/Card/Card';
import HorizontalCard from '../../../src/components/Card/HorizontalCard';
import colors from '../../../src/colors';
import Image from '../../../src/components/Image/Image';

const menus = [];
menus.push(
	{ key: 'good', icon: 'good', color: colors.darkGreen, label: 'cool' },
	{ key: 'delete', icon: 'delete', color: colors.hoverOrange, label: 'danger' }
);
export default (props) => (
	<PageContainer>
		<PageTitle title="Cards" />
		<Description info="Gallery Card" />
		<ExampleDark
			example={
				<View>
					<Code>{`<Card
            title="some title text"
            description="description text description text description text
            description text"
            header={
              <Image
                src="http://image.boardgamereview.cn/000000000000000000000000"
                style={{ height: 280, width: 334 }}
              />
            }
          />`}</Code>
					<Card
						width={140}
						theme="simple"
						title="some title text 卡片题目"
						description="description text description text description text
            description text"
						header={
							<Image
								src="http://image.boardgamereview.cn/000000000000000000000000"
								style={{ height: 140, width: 140, borderRadius: 70 }}
							/>
						}
					/>
					<Card
						shape="sqaure"
						width={334}
						title="some title text 卡片题目"
						description="description text description text description text
            description text"
						header={
							<Image
								src="http://image.boardgamereview.cn/000000000000000000000000"
								style={{ height: 280, width: 334 }}
								type="background"
							/>
						}
					/>
				</View>
			}
		/>
		<Example
			example={
				<View>
					<Code>{`<Card shape="sqaure" theme="shadow" ... />`}</Code>
					<Card
						shape="sqaure"
						shadow
						width={334}
						title="some title text 卡片题目"
						description="description text description text description text
            description text"
						header={
							<Image
								src="http://image.boardgamereview.cn/000000000000000000000000"
								style={{ height: 280, width: 334 }}
								type="background"
							/>
						}
						onPress={() => alert('coooool!')}
						component={
							<View style={{ backgroundColor: colors.basic }}>
								<Text style={{ color: '#fff', padding: 6 }}>some other sub component here</Text>
							</View>
						}
					/>
				</View>
			}
		/>
		<Description info="List Card" />
		<ExampleDark
			example={
				<View>
					<Code>
						{
							"<HorizontalCard  src='image...' title='some text' subTitle='Hello Gick' component={<Text>...</Text>}/>"
						}
					</Code>
					<HorizontalCard
						src="http://image.boardgamereview.cn/000000000000000000000000"
						title="image size auto"
						subTitle="Hello Gick"
						component={<Text style={{ color: '#fff' }}>I don't have onPress !</Text>}
					/>
				</View>
			}
		/>
		<ExampleDark
			example={
				<View>
					<Code>{'<HorizontalCard onPress={...} ... />'}</Code>
					<HorizontalCard
						src="http://image.boardgamereview.cn/000000000000000000000000"
						title="image size auto"
						subTitle="Hello Gick"
						onPress={() => alert('hello there')}
						component={<Text style={{ color: '#fff' }}>I got some onPress here</Text>}
					/>
				</View>
			}
		/>
		<ExampleDark
			example={
				<View>
					<Code>{'<HorizontalCard back={image src} ... />'}</Code>
					<HorizontalCard
						back="http://image.boardgamereview.cn/000000000000000000000000"
						title="image background"
						subTitle="Hello Gick"
						onPress={() => alert('hello there')}
					/>
				</View>
			}
		/>
		<ExampleDark
			example={
				<View>
					<Code>{'<HorizontalCard menus={menu json} ... />'}</Code>
					<HorizontalCard
						src="http://image.boardgamereview.cn/000000000000000000000000"
						title="I have a menu to do someting for me"
						subTitle="that's cool !"
						menus={menus}
					/>
				</View>
			}
		/>
	</PageContainer>
);
