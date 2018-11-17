import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo';
import { TestModal } from '../components';

export default class HomeScreen extends React.Component {
  state = {
    newTodo: '',
    todos: [],
    modalVisible: false
  };

  onChangeText = newTodo => this.setState({ newTodo });

  onPress = () =>
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    });

  render() {
    const { todos, newTodo, modalVisible } = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={['#4c669f', '#3b5998', '#192f6a']}
      >
        <TextInput
          value={newTodo}
          onChangeText={this.onChangeText}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.onPress} style={styles.button}>
          <Text>Add</Text>
        </TouchableHighlight>
        {todos.map((num, index) => (
          <Text style={styles.item} key={index}>
            {num}
          </Text>
        ))}
        <View style={styles.box} />
        <TouchableHighlight
          onPress={() => this.setState({ modalVisible: true })}
          style={styles.button}
        >
          <Text>Open Modal</Text>
        </TouchableHighlight>
        <TestModal
          visible={modalVisible}
          onClose={() => this.setState({ modalVisible: false })}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 20,
    width: 200,
    marginBottom: 25
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 20,
    width: 200,
    marginBottom: 15
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 20,
    width: 40,
    marginBottom: 15
  },
  item: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: 40,
    height: 40
  }
});
