import React from 'react';
import Text from '../Text/Text';
import View from '../View/View';
import Files from 'react-files';
import Image from '../Image/Image';
import Button from '../Buttons/Button';
import Label from '../Label';
import ScrollView from '../View/ScrollView';
import RoundButton from '../Buttons/RoundButton';
import { isInstanceOf } from '../../lib/util';
import { getStyles, getParams } from './styles/FilePicker/styles';
import _ from 'lodash';
import Symbol from '../Symbol';

export const FilePreview = ({ file, size }) => {
	const styles = getStyles(size || 'l');

	if (isInstanceOf(file, 'File')) {
		return (
			<View style={styles.imageback}>
				{file.preview.type === 'image' ? (
					<Image
						src={file.preview.url}
						style={styles.image}
						type="background"
						resizeMode="contain"
						size={'auto'}
					/>
				) : (
					<View>
						<Text style={styles.extension}>{file.extension}</Text>
					</View>
				)}
			</View>
		);
	} else {
		return (
			<View style={styles.imageback}>
				{file.type === 'image' ? (
					<Image src={file.url} style={styles.image} size={'auto'} type="background" resizeMode="contain" />
				) : (
					<View>
						<Text style={styles.extension}>{file.type}</Text>
					</View>
				)}
			</View>
		);
	}
};

class FilePicker extends React.Component {
	initialState = { files: [], error: undefined };
	state = { files: [], error: undefined };
	onChange = (files) => {
		var stateFiles = _.concat(this.state.files, files);

		if (this.props.maxFiles && stateFiles.length > this.props.maxFiles) {
			stateFiles = _.slice(stateFiles, 0, this.props.maxFiles);
		}
		files.splice(0, files.length);
		this.setFiles(stateFiles);
	};

	onDelete = (file) => {
		const files = _.without(this.state.files, file);
		this.setFiles(files);
	};

	onError = (error) => {
		this.setState({ error: error.message });
	};

	setFiles = (files) => {
		this.props.onChange && this.props.onChange(files);
		this.setState({ files: files, error: undefined });
	};

	clear = () => {
		this.setState(this.initialState);
	};

	set = (v) => {
		let value = v || [];
		value = _.isArray(value) ? value : [ value ];
		this.setState({ files: value, error: undefined });
	};
	componentDidMount() {
		this.set(this.props.defaultValue);
		if (this.props.onRef) this.props.onRef(this);
	}

	render() {
		const { accepts, maxFiles, maxFileSize, size } = this.props;
		const { files, error } = this.state;
		const isFull = maxFiles ? _.size(files) >= maxFiles : false;
		const styles = getStyles(size || 'l');
		const params = getParams(size || 'l');

		return (
			<ScrollView>
				{maxFiles > 1 && (
					<View style={{ marginLeft: 'auto' }}>
						<Label theme="blue" content={`${_.size(files) || '0'}/${maxFiles}`} size="m" />
					</View>
				)}

				<View style={styles.content}>
					{error && <Text style={{ color: 'red' }}>{error}</Text>}
					{_.map(files, (file, index) => (
						<View style={styles.previewContent} key={index}>
							<View style={styles.delete}>
								<RoundButton onPress={() => this.onDelete(file)} size="xs" icon="close" />
							</View>
							<FilePreview file={file} size={size} />
						</View>
					))}
					{!isFull && (
						<Files
							onChange={(files) => this.onChange(files)}
							onError={this.onError}
							accepts={accepts}
							maxFileSize={maxFileSize}
							multiple
							clickable
						>
							<View style={styles.imageAdd}>
								<Symbol name="camera" size={params.add} color={'#aaa'} />
								<View style={styles.button}>
									<Button theme="transparent" content="chose image" />
								</View>
							</View>
						</Files>
					)}
				</View>
			</ScrollView>
		);
	}
}

export default FilePicker;
