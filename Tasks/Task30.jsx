import React, { useRef, useState } from 'react';
import { Button, FlatList, Modal, View, StyleSheet, Alert } from "react-native";
import Task28Comp from '../Components/Task28Comp';
import Task29PopUp from '../Components/Task29PopUp';
{//huadshfajskdgnas}

export default function Task30() {
  const [text, setText] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [nop, setNop] = useState('');
  const flat_list_ref = useRef();

  const [arr,setArr] = useState([
    require('../Resources/0.jpg'),
    require('../Resources/1.jpg'),
    require('../Resources/2.jpg'),
    require('../Resources/3.png'),
    require('../Resources/4.jpg'),
    require('../Resources/5.jpg'),
    require('../Resources/6.jpg'),
    require('../Resources/7.jpg'),
    require('../Resources/8.jpg'),
    require('../Resources/9.jpg'),
    require('../Resources/10.jpg'),
    require('../Resources/11.gif')
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      paddingVertical: 20,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.75)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox: {
      width: 300,
      padding: 20,
      backgroundColor: '#1f1f2e',
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
    },
    error: {
      backgroundColor: '#2e0b0b',
      borderWidth: 1,
      borderColor: '#ff4f4f',
      borderRadius: 6,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 8,
      color: '#ff7070',
      fontWeight: 'bold',
      fontSize: 14,
    },
    textInput: {
      width: 200,
      height: 40,
      backgroundColor: '#2b2b3d',
      borderWidth: 1,
      borderColor: '#5c5cf1',
      borderRadius: 8,
      color: 'white',
      paddingHorizontal: 12,
      marginBottom: 10,
      fontSize: 16,
      textAlign: 'center',
    },
  });  

  function item_renderer({ item, index }) {
    return (
      <Task28Comp
        path={item}
        idx={index}
        onRemove={handleRemove}
        onDuplicate={handleDuplicate}
      />
    );
  }
  function handleRemove(index) {
    console.log("Remove clicked for index:", index);
    Alert.alert('Confirm Deletion', `Delete image at index ${index}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setArr((prev) => prev.filter((_, i) => i !== index));
        },
      },
    ]);
  }
  
  function handleDuplicate(index) {
    setArr((prev) => {
      const newArr = [...prev];
      newArr.splice(index + 1, 0, prev[index]); // insert a copy after the original
      return newArr;
    });
  }
  function on_change_text(t) {
    setText(t);
    setNop('');
  }

  function is_input_valid(index) {
    if (isNaN(index)) {
      setNop('Input must be an integer.');
      return false;
    } else if (index < 0 || index >= arr.length) {
      setNop(`Index must be between 0 and ${arr.length - 1}.`);
      return false;
    }
    return true;
  }

  function confirm_submission() {
    const idx = parseInt(text);
    if (!is_input_valid(idx)) return;

    flat_list_ref.current?.scrollToIndex({
      animated: true,
      index: idx,
    });

    close_popup_prompt();
  }

  function cancel_submission() {
    close_popup_prompt();
  }

  function open_popup_prompt() {
    console.log("Search button pressed, opening modal");
    setText('');
    setNop('');
    setVisible(true);
  }

  function close_popup_prompt() {
    setText('');
    setNop('');
    setVisible(false);
  }

  const popup_component = (
    <Task29PopUp
      styles={styles}
      arr_length={arr.length}
      on_change_text={on_change_text}
      confirm_submission={confirm_submission}
      cancel_submission={cancel_submission}
      err={nop}
    />
  );

  return (
    <View style={styles.container}>
      <Button title="Search" onPress={open_popup_prompt} />
      <Modal
        animationType='fade'
        visible={isVisible}
        onRequestClose={close_popup_prompt}
        transparent={true}
      >
        <View style={styles.overlay}>{popup_component}</View>
      </Modal>
  
      <FlatList
        data={arr}
        renderItem={item_renderer}
        ref={flat_list_ref}
        horizontal={true}
        keyExtractor={(_, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );  
}