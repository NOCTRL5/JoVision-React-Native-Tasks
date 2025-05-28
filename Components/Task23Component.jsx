import { TextInput, View, StyleSheet } from "react-native";

export class Task23Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Initial Text"
        };
    }

    updateText = (newText) => {
        this.setState({ text: newText });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                <MyTextInputComponent onTextChange={this.updateText} />
            </View>
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