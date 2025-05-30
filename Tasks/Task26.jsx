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

}
