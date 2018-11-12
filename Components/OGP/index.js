import React from "react";
import styles from "./styles/styles";
import Image from "../Paper/Image";
import View from "../View/View";
import ExternalLinkView from "../View/ExternalLinkView";
import Format from "../Text/Format";

export default props => {
  const { og } = props;
  const { url, site_name, title, description, image } = og;
  const margin = styles.margin;

  const title_text =
    (title.length > 34 && title.substring(0, 34) + "...") || title;
  const description_text =
    (description.length > 34 && description.substring(0, 56) + "...") ||
    description;

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
              value={title_text}
              style={[styles.title, site_name && margin]}
            />
            <Format
              format="string"
              value={description_text}
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
