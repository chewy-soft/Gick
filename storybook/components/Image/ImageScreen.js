import React from 'react';
import { View } from 'react-native';
import Code from '../../sampleUI/Code';
import PageContainer from '../../sampleUI/PageContainer';
import PageTitle from '../../sampleUI/PageTitle';
import { Example } from '../../sampleUI/Example';
import Description from '../../sampleUI/Description';
import Image from '../../../src/components/Image/Image';
import ImageZoom from '../../../src/components/Image/ImageZoom';
import Button from '../../../src/components/Buttons/Button';
import Modal from '../../../src/components/Modal';

export default class ImageScreen extends React.Component {
	state = { image: false };
	zoomImage = () => {
		this.setState({ image: !this.state.image });
	};
	render() {
		return (
			<PageContainer>
				<PageTitle title="Images" />
				<Description info="Image Progress (Loader)" />
				<Example
					example={
						<View>
							<Code>{'<Image src="..." />'}</Code>
							<Image
								size="auto"
								src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageMogr2/auto-orient/thumbnail/400x300/interlace/1/blur/1x0/quality/100|imageslim"
							/>
						</View>
					}
				/>
				<Description info="Image Zoom Modal" />
				<Example
					example={
						<View>
							<Code>{'<ImageZoom src="http://image...." />'}</Code>
							<Button onPress={this.zoomImage} content="open image" />
							{this.state.image && (
								<Modal>
									<ImageZoom
										src="http://image.boardgamereview.cn/5a6808537948e4715f79252c"
										onClose={this.zoomImage}
									/>
								</Modal>
							)}
						</View>
					}
				/>
				<Description info="Background Image" />
				<Example
					example={
						<View>
							<Code>{'<Image style={{ height: 100 }} src="..." />'}</Code>
							<Image
								style={{ height: 100 }}
								src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157"
							/>
						</View>
					}
				/>
				<Description info="Background undefined test" />
				<Example
					example={
						<View>
							<Code>
								{
									'<Image style={{ height: 300, width: 600,backgroundColor: "rebeccapurple" }} type="background" />'
								}
							</Code>
							<Image
								style={{ height: 300, width: 600, backgroundColor: 'rebeccapurple' }}
								type="background"
							/>
						</View>
					}
				/>
				<Description info="Background blur test" />
				<Example
					example={
						<View>
							<Code>{'<Image blur={10} style={{ height: 100 }} src="..." />'}</Code>
							<Image
								blur={10}
								style={{ height: 100 }}
								src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157"
							/>
						</View>
					}
				/>
				<Description info="Image Unit." />
				<Example
					example={
						<View>
							<Code>
								{`<Image blur={6} src="http://image...">
       <Image src="http://image..." />
              </Image>`}
							</Code>
							<Image
								blur={6}
								style={{ flex: 1 }}
								type="background"
								src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageView2/2/w/270/h/280/format/jpg/interlace/1/q/100"
							>
								<Image src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageView2/2/w/270/h/280/format/jpg/interlace/1/q/100" />
							</Image>
						</View>
					}
				/>
			</PageContainer>
		);
	}
}
