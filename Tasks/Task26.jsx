import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function Task26() {
    const url = "https://api.ipify.org/?format=json";

    const [text, setText] = useState("Task26");
    const [loader, setLoader] = useState(false);

    const non_blocking_request = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setText(`Your IP: ${data.ip}`);
            })
            .catch((error) => {
                setText("Failed to fetch IP");
                console.error(error);
            });
    };
    const blocking_request = async () => {
        try {
          setLoader(true);
          const res = await fetch(url);
          const data = await res.json();
          setText(`Your IP: ${data.ip}`);
        } catch (error) {
          setText("Failed to fetch IP");
          console.error(error);
        } finally {
          setLoader(false);
        }
      };

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        textStyle: {
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
          color: "purple",
        },
        button: {
          marginVertical: 10,
        },
      });
    
      return (
        <View style={styles.container}>
          {!loader ? (
            <View>
              <View style={styles.button}>
                <Button title="Non-Blocking Request" onPress={non_blocking_request} />
              </View>
              <View style={styles.button}>
                <Button title="Blocking Request" onPress={blocking_request} />
              </View>
              <Text style={styles.textStyle}>{text}</Text>
            </View>
          ) : (
            <ActivityIndicator size="large" color="purple" />
          )}
        </View>
    );
}
