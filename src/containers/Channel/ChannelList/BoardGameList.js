import React from 'react';
import Text from '../../../components/Text/Text';
import View from '../../../components/View/View';
import Format from '../../../components/Text/Format';
import Symbol from '../../../components/Symbol';
import format from '../../../lib/format';
import HorizontalCard from '../../../components/Card/HorizontalCard';
import styles from './styles/BoardGameList/styles';
import HorizontalCardLoader from '../../../components/Loader/HorizontalCardLoader';
import HandlerContext from '../../../context/HandlerContext';

class BoardGameList extends React.Component {
	static contextType = HandlerContext;
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.boardgame !== nextProps.boardgame;
	}
	componentDidMount() {
		if (this.props.boardgame === undefined && this.props.id) {
			this.props.getBoardGame && this.props.getBoardGame(this.props.id);
		}
	}

	render() {
		const { boardgame, onPress, origin_locale, locale } = this.props;
		const { t } = this.context;
		if (boardgame === undefined) return <HorizontalCardLoader />;
		const currentLocale = origin ? origin_locale : locale;
		const f = format(t);

		return (
			<HorizontalCard
				src={boardgame.image}
				theme="stretch"
				onPress={onPress}
				title={t(boardgame.name, currentLocale)}
				subTitle={t(boardgame.description, currentLocale)}
				component={
					<View style={styles.bottom}>
						{(boardgame.rating > 0 && (
							<Format format="score" value={boardgame.rating} style={styles.score} />
						)) || <Text style={styles.score}>-</Text>}
						<View style={styles.badgeContainer}>
							<View style={styles.badge}>
								<Symbol name="year_published" color="#767676" size={10} />
								{(boardgame.year_published && (
									<Format value={boardgame.year_published} style={styles.badgeContent} />
								)) || <Text style={styles.badgeContent}>free</Text>}
							</View>
							<View style={styles.badge}>
								<Symbol name="weight" color="#767676" size={10} />
								{(boardgame.weight && (
									<Text style={styles.badgeContent}>{f(boardgame.weight, 'weight')}</Text>
								)) || <Text style={styles.badgeContent}>-</Text>}
							</View>
						</View>
					</View>
				}
			/>
		);
	}
}

export default BoardGameList;
