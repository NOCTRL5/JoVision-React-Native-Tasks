import React from 'react';
import { Text } from 'react-native';

export default class Task25classcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Task25'
    };
  }
  changeText(newText) {
    this.setState({ text: newText });
  }

  render() {
    const styles = {
      textStyle: {
        fontSize: 20,
        color: 'purple',
        textAlign: 'center',
        marginVertical: 20,
      },
    };

    return <Text style={styles.textStyle}>{this.state.text}</Text>;
  }
}
