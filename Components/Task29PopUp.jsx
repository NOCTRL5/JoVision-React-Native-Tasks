import { View, TextInput, Text, Button } from 'react-native';

export default function Task29PopUp(props) {
    const {
        styles,
        arr_length,
        on_change_text,
        confirm_submission,
        cancel_submission,
        err
    } = props;

    return (
        <View style={styles.overlay}>
        <View style={styles.modalBox}>
        <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>
            Write an index between 0 and {arr_length - 1} (inclusive)
        </Text>
        <TextInput
        style={styles.textInput}
        placeholder='Write here...'
        placeholderTextColor="#888"
                    onChangeText={on_change_text}
                    
        keyboardType='number-pad'/>
    {err && <Text style={styles.error}>{err}</Text>}

    <View style={{ marginTop: 10, width: '100%' }}>
      <Button
        title='Ok'
        color="#5c5cf1"
        onPress={confirm_submission}
      />
    </View>

    <View style={{ marginTop: 10, width: '100%' }}>
      <Button
        title='Cancel'
        color="#888"
        onPress={cancel_submission}/>
            </View>
        </View>
    </View>
    );
}