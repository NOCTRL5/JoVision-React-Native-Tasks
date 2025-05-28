import { TextInput, View, StyleSheet } from "react-native";
import { TextInput } from "react-native";

export class Task23Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
           text_change: function text_change(text) {
                props.setText(text);
            }
        }
    }
    render() {
        return (
            <TextInput
                onChangeText={this.state.text_change}>
            </TextInput>
        );
    }
}