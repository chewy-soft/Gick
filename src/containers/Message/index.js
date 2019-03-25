import React from 'react';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import Image from '../../components/Image/Image';
import HandlerContext from '../../context/HandlerContext';
import decoration from './Decoration';
import HoverView from '../../components/View/HoverView';
import * as Parts from './parts';
import Format from '../../components/Text/Format';
import OGP from '../../components/OGP';

export default class Message extends React.Component {
	static contextType = HandlerContext;

	render() {
		const { message } = this.props;
		const { router } = this.context;
		const { type, payload, created_at, user_id, user } = message;
		const format = this.props.format || this.defaultFormat;
		const Decoration = decorations[format.decoration || 'basic'];
		const defaultFormat = {
			color: '#fff',
			fontSize: 16,
			fontWeight: 'normal',
			textAlign: 'normal',
			textDecorationLine: 'none'
		};

		switch (type) {
			case 'file':
				switch (payload.type) {
					case 'application/pdf':
						return null;
					case 'image/png':
					case 'image/jpeg':
					case 'image/jpg':
					case 'image/gif':
						return (
							<HoverView theme="message">
								<Decoration theme={theme} created_at={created_at} id={user_id}>
									<Image
										src={images(payload.id)['400x300_max']}
										type={process.env.RESOLUTION == 'mobile' && 'background'}
										size="auto"
										// style={styles.image}
										// onResize={onResize}
										// onPress={() => this.onZoomImage(payload.id)}
									/>
								</Decoration>
								<Parts.Menu theme={theme} />
							</HoverView>
						);
				}
			case 'channel':
			case 'text':
			default:
				var { ogp, content } = payload;
				return (
					<HoverView theme="message">
						<Decoration theme={theme} created_at={created_at} id={user_id}>
							<Format
								format="string"
								style={{ fontSize: 16, lineHeight: 16 * 1.5, color: '#fff' }}
								value={content}
							/>
							{ogp &&
							(ogp.url || ogp.site_name || ogp.title || ogp.description || ogp.image || ogp.name) ? (
								<View style={{ marginTop: 8 }}>
									<OGP og={ogp} />
								</View>
							) : null}
						</Decoration>
						<Parts.Menu theme={theme} />
					</HoverView>
				);
		}
	}
}
