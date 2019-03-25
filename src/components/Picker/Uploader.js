import React from "react";
import Text from "../Text/Text";
import { Platform } from "react-native";
import View from "../View/View";
import SimpleBar from "../Ratio/SimpleBar";
import styles, { params } from "./styles/PickerUpLoader/styles";
import _ from "lodash";
import Symbol from "../Symbol";
import ToolTip from "../ToolTip";
import Image from "../Image/Image";
import Loader from "../Loader";

const Preview = ({ file }) => (
  <View style={styles.imageback}>
    {file.preview.type === "image" ? (
      <Image
        src={file.preview.url}
        size="auto"
        height={50}
        style={styles.image}
      />
    ) : (
      <View>
        <Text style={{ maxWidth: 50 }}>{file.extension}</Text>
      </View>
    )}
  </View>
);

class Uploader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      onProgress: undefined
    };
    this.files = props.files;
    this.fails = [];
  }

  restart = () => {};

  next = () => {
    const first = _.first(this.files);
    if (first) {
      this.onUploadStart(first);
    } else if (_.size(this.fails) == 0) {
      this.props.onClose && this.props.onClose();
    } else {
      this.setState({ onProgress: undefined });
    }
  };

  onUploadStart = async file => {
    try {
      this.setState({ onProgress: file });
      const response = await this.props.onUpload(file);
      if (response.status !== 200) throw response;
    } catch (error) {
      console.error(error);
      this.fails.push(file);
    }
    this.files = _.without(this.files, file);
    this.next();
  };

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state !== nextState;
  }
  componentDidMount() {
    this.next();
  }

  onMouseOver = () => {
    this.setState({ show: true });
  };
  onMouseOut = () => {
    this.setState({ show: false });
  };
  render() {
    const { onClose } = this.props;
    const { show, onProgress } = this.state;

    return (
      <View style={styles.container}>
        {_.map(this.fails, (file, index) => (
          <View style={styles.previewContent} key={index}>
            <Preview file={file} />
            <View style={styles.failed}>
              <Symbol name="failed" size={20} color={"#FF0A0A"} />
            </View>
          </View>
        ))}
        {_.map(this.files, (file, index) => (
          <View style={styles.previewContent} key={index}>
            <Preview file={file} />
            {file == onProgress && (
              <View style={styles.processbar}>
                <Loader />
              </View>
            )}
          </View>
        ))}
        {_.size(this.fails) > 0 && (
          <View
            style={styles.delete}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            onPress={onClose}
          >
            <Symbol name="close" size={12} />
            {Platform.OS == "web" && (
              <ToolTip
                content="取消上传"
                show={(show && true) || false}
                top={-30}
                left={-56}
                right={0}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

export default Uploader;
