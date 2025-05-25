import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export default function Task21Function() {
    useEffect(() => {
      console.log("MyFunctionPage loaded");
  
      return () => {
        console.log("MyFunctionPage unloaded");
      };
    }, []);
  
    return <Text style={styles.text}>This is MyFunctionPage</Text>;
  }
  
  const styles = StyleSheet.create({
    text: {
      margin: 10,
      fontSize: 18,
      textAlign: "center",
    },
  });