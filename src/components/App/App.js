import React from "react";
import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

const App = () => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Text> App</Text>
    </SafeAreaView>
  );
};

export default App;
