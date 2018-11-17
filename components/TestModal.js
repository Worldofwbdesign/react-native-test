import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet
} from 'react-native';

class TestModal extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.visible}
      >
        <View style={styles.container}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={this.props.onClose}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TestModal;
