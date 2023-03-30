import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import HomeScreenComponent from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {AuthProvider} from "./components/AuthContext";
import AppNav from "./navigation/appnav.js";


// import Test from "./components/Test";r

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <AppNav></AppNav>
    </AuthProvider>
    // <View >
    //   <HomeScreenComponent></HomeScreenComponent>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
