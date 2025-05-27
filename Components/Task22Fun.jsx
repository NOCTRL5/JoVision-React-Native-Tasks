import { TextInput, View, StyleSheet } from "react-native";

export function Task22Fun(props) {
    function text_change(current_value) {
        props.setText(current_value);
    }
    return (
        <View>
        <TextInput onChangeText={text_change}
          style={{ borderWidth: 1, padding: 10, margin: 10 }}
          placeholder="Type something"
        />
      </View>
    );
}
const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#aaa',
      padding: 10,
      margin: 10,
      width: 200,
      borderRadius: 5,
    },
  });