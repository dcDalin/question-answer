import { StackNavigator } from "react-navigation";
import HomeScreen from "./components/Home/HomeScreen";
import SplashScreen from "./components/Splash/SplashScreen";

const App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  HomeScreen: { screen: HomeScreen }
});

export default App;
