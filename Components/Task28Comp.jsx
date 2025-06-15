import React, { useCallback } from "react";
import { Image, StyleSheet, Text, Alert, Pressable } from "react-native";

export default function Task28Comp(props) {
  const on_press = useCallback(() => {
    Alert.alert(`You have selected image: ${props.idx}`, "", [{ text: "Ok" }]);
  }, [props.idx]);

  return (
    <Pressable onPress={on_press} style={styles.img_size}>
      <Image style={styles.img_style} source={props.path} />
      <Text style={styles.text_style}>Image #{props.idx}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  img_size: {
    width: 280,
    height: 420,
    marginHorizontal: 8,
    borderRadius: 16,
    borderColor: "Black",
    borderWidth: 3,
    alignItems: "center",
    padding: 8,
  },
  img_style: {
    width: 260,
    height: 400,
    resizeMode: "contain",
    borderRadius: 12,
  },
  text_style: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 14,
    color: "white",
  },
});
