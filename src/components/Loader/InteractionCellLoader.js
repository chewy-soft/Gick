import React from "react";
import Text from "../Text/Text";
import Button from "../Buttons/Button";
import styles from "./styles/InteractionCellLoader/styles";
import View from "../View/View";

export default props => (
  <View style={styles.cell}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.image} />
        <View style={styles.names}>
          <View styles={styles.gameName} />
          <View styles={styles.gameSubName} />
        </View>
      </View>

      <View style={styles.scoreContent} />
      <View style={styles.text} />

      <Text style={styles.showButton} />

      <View style={styles.footer}>
        <View style={styles.commentButton}>
          <Text style={styles.commentTitle} />
          <View style={styles.button}>
            <Button disabled size="s" />
          </View>
          <View style={styles.button}>
            <Button disabled size="s" />
          </View>
          <View style={styles.button}>
            <Button disabled size="s" />
          </View>
        </View>
        <Text style={styles.total} />
        <Text style={styles.total} />
        <Text style={styles.total} />
      </View>
    </View>
  </View>
);
