import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import Video from "react-native-video";

export default function Task32() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
  const poster = require("../Resources/0.jpg");
  const vid = require("../Resources/egg.mp4");
  const videoRef = useRef(null);
  const onPressPoster = () => {
    setIsPlaying(true);
    };
    const onPressVideo = () => {
        setIsPaused(prev => !prev);
      };
    
  return (
    <View style={styles.container}>
      {!isPlaying ? (
        <TouchableOpacity style={styles.posterContainer} onPress={onPressPoster}>
          <Image source={poster} style={styles.poster} />
          <Text style={styles.overlayText}>Tap to Play</Text>
        </TouchableOpacity>
          ) : (
    <View>
        <Video
          ref={videoRef}
          source={vid}
          style={styles.video}
          paused={isPaused}           
          controls={false}               
          resizeMode="contain"
          onLoad={data => console.log("Loaded, duration:", data.duration)}
          onBuffer={({ isBuffering }) => console.log("Buffering:", isBuffering)}
          onError={e => console.log("Video error:", JSON.stringify(e))}
          onEnd={() => {
            console.log("Ended");
            setIsPlaying(false);   
            setIsPaused(false); 
          }}
        />
      {/* Overlay for play/pause toggle */}
      <TouchableOpacity style={styles.touchArea} onPress={onPressVideo}>
      <Text style={styles.centerText}>{isPaused ? "▶" : "⏸"}</Text>
    </TouchableOpacity>
  </View>
)}
</View>
);
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 200,
    position: "relative",
    backgroundColor: "black",
  },
  posterContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 330,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    width: 330,
    height: 200,
    resizeMode: "cover",
    opacity: 0.6,
  },
  overlayText: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  video: {
    width: 330,
    height: 200,
  },
  touchArea: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 330,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    borderRadius: 10,
  },
});
