import React, { Component } from "react";
import { View, Text } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example } from "../../sampleUI/Example";
import Modal from "../../../src/components/Modal";
import Code from "../../sampleUI/Code";
import Button from "../../../src/components/Buttons/Button";

export default class ModalScreen extends Component {
  state = { show: false };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <PageContainer>
        <PageTitle title="Modal Component" />
        <Example
          example={
            <View>
              <Code>
                {`<Modal onClose={this.toggleShow}><Text>This is Modal Content</Text></Modal>`}
              </Code>
              <Button content="Open Modal" onPress={this.toggleShow} />
              {this.state.show && (
                <Modal onClose={this.toggleShow}>
                  <Text>This is Modal Content</Text>
                </Modal>
              )}
            </View>
          }
        />
      </PageContainer>
    );
  }
}
