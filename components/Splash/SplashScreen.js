import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SplashScreen extends React.Component {
  // Remove top header on screen
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    // Switch to homescreen after 4 seconds
    setTimeout(() => {
      this.props.navigation.navigate("HomeScreen");
    }, 4000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
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
