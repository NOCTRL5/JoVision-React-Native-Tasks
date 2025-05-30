import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Task18() {
    const [timeload, settimeout] = useState(true);
    const[loading,setname]=useState("Loading..")

    useEffect(() => {
        const timer = setTimeout(() => {
            settimeout(false);
            setname("Osama Al-Tawara");
        }, 5000);
        return () => clearTimeout(timer); 
    }, []);
  return (
      <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
              <Text style={styles.show}>{loading}</Text>
              {timeload && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  show: {
    margin: 10,
    fontSize: 25,
    textAlign: "center",
  },
});
