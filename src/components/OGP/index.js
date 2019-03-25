import React from 'react';
import styles from './styles/styles';
import Image from '../Image/Image';
import View from '../View/View';
import ExternalLinkView from '../View/ExternalLinkView';
import Format from '../Text/Format';
import LineClampText from '../Text/LineClampText';
import Text from '../Text/Text';

export default (props) => {
	const { og } = props;
	const { name, url, site_name, title, description, image } = og;
	if (!url && !site_name && !title && !description && !image) {
		return null;
	}
	const margin = styles.margin;

	return (
		<View style={styles.container}>
			<ExternalLinkView url={url}>
				<View style={styles.leftLine} />
				<View style={styles.inside}>
					<div id="ogp">
						<View style={styles.content}>
							<Format
								format="string"
								value={site_name || url}
								numberOfLines={1}
								style={styles.site_name}
							/>
							<Format
								format="string"
								value={title || name}
								style={[ styles.title, site_name && margin ]}
							/>
							<Text style={[ styles.description, title && margin ]}>
								<LineClampText numberOfLines={2}>{description}</LineClampText>
							</Text>
						</View>
					</div>
					<View style={styles.image}>
						<Image src={image} size="small" width={68} height={68} />
					</View>
				</View>
			</ExternalLinkView>
		</View>
	);
};

// <!-- ※基本共通設定 -->
// <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
// <title> ページの タイトル</title>
// <meta property="og:title" content=" ページの タイトル" />
// <meta property="og:type" content=" ページの種類" />
// <meta property="og:url" content=" ページの URL" />
// <meta property="og:image" content=" サムネイル画像の URL" />
// <meta property="og:site_name" content="サイト名" />
// <meta property="og:description" content=" ページのディスクリプション" />

// <!--  Facebook用設定 -->
// <meta property="fb:app_id" content="App-ID（15文字の半角数字）" />
// もしくは
// <meta property="fb:admins" content="adminID（15文字の半角数字）" />

// <!-- ※ Twitter共通設定 -->
// <meta name="twitter:card" content=" Twitterカードの種類" />
