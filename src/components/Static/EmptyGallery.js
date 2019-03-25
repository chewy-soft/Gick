import React from 'react';
import Text from '../Text/Text';
import getStyle from './styles/EmptyGallery/styles';
import View from '../View/View';

export default (props) => {
	const { theme, title, dividerText, info, component } = props;
	const styles = getStyle(theme || 'darkBlue');
	return (
		<View style={styles.emptyContent}>
			{title && <Text style={styles.panelTab}>{title}</Text>}
			<View style={styles.empty}>
				{dividerText && (
					<View style={styles.info}>
						{theme !== 'transparent' && <Text style={styles.divider} />}
						<Text style={styles.dividerText}>{dividerText}</Text>
						{theme !== 'transparent' && <Text style={styles.divider} />}
					</View>
				)}
				<Text style={styles.subInfo}>{info}</Text>
				{component}
			</View>
		</View>
	);
};
