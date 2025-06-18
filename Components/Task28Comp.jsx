import React, { useCallback } from "react";
import { Image, StyleSheet, Text, Alert, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Task28Comp(props) {
  const { path, idx, onRemove, onDuplicate } = props;
  const on_press = useCallback(() => {
    Alert.alert(`You have selected image: ${props.idx}`, "", [{ text: "Ok" }]);
  }, [idx]);

  return (
    <View style={styles.container}>
      {/* Duplicate Icon - Top Left */}
      <Pressable style={styles.duplicateIcon} onPress={() => onDuplicate(idx)}>
        <MaterialIcons name="control-point-duplicate" size={20} color="white" />
      </Pressable>

      {/* Delete Icon - Top Right */}
      <Pressable style={styles.deleteIcon} onPress={() => onRemove(idx)}>
        <MaterialIcons name="close" size={20} color="white" />
      </Pressable>

      require('../Resources/1.jpeg'),
      <Pressable onPress={on_press} style={styles.img_size}>
        <Image style={styles.img_style} source={path} />
        <Text style={styles.text_style}>Image #{idx}</Text>
      </Pressable>
    </View>
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
  deleteIcon: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1,
    backgroundColor: "rgba(255,0,0,0.7)",
    borderRadius: 12,
    padding: 4,
  },
  duplicateIcon: {
    position: "absolute",
    top: 6,
    left: 6,
    zIndex: 1,
    backgroundColor: "rgba(0,0,255,0.7)",
    borderRadius: 12,
    padding: 4,
  },
});
