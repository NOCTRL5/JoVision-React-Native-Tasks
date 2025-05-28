import { TextInput, View, StyleSheet } from "react-native";

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
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: 'blue',
        marginBottom: 10,
        textAlign: 'center',
    }
});