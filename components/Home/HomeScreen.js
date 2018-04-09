import React from "react";
import { View, Text, BackAndroid, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    // Disable back button to the Splash Screen
    BackAndroid.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
