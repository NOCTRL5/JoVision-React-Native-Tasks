import { Component } from "react";
import { TextInput } from "react-native";
import { setText, Store } from "../Store/Store";

export class Task40InputComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            text: Store.getState().text.text2,
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(txt) {
        this.setState({ text: txt });
        console.log(this.state.text);
    }
    componentDidMount() {
        console.log('Mounted');
    }
    componentWillUnmount() {
        store.dispatch(setText(this.state.text));
        console.log('Unmounted');
    }
    render() {
        return <TextInput
            value={this.state.text}
            placeholder="Write here..."
            onChangeText={this.handleTextChange}
            style={{
                color: 'white',
                backgroundColor: 'midnightblue',
                width: 200,
                height: 45,
                borderRadius: 16,
                marginHorizontal: 4,
                marginVertical: 16,
                paddingHorizontal: 6,
                paddingVertical: 4,
            }}
        />;
    }
}