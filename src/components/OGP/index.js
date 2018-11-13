import React from "react";
import styles from "./styles/styles";
import Image from "../Image/Image";
import View from "../View/View";
import ExternalLinkView from "../View/ExternalLinkView";
import Format from "../Text/Format";

export default props => {
  const { og } = props;
  const { url, site_name, title, description, image } = og;
  if (!url && !site_name && !title && !description && !image) {
    return null;
  }
  const margin = styles.margin;

  return (
    <View style={styles.container}>
      <ExternalLinkView url={url}>
        <View style={styles.leftLine} />
        <View style={styles.inside}>
          <View style={styles.content}>
            <Format
              format="string"
              value={site_name}
              numberOfLines={1}
              style={styles.site_name}
            />
            <Format
              format="string"
              value={title}
              style={[styles.title, site_name && margin]}
            />
            <Format
              format="string"
              value={description}
              style={[styles.description, title && margin]}
            />
          </View>
          <View style={styles.image}>
            <Image src={image} size="small" />
          </View>
        </View>
      </ExternalLinkView>
    </View>
  );
};
