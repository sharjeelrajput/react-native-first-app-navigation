import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenComponent from "../components/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../components/AuthContext";
import Dashboard from "../components/Dashboard";
import LoginScreenComponent from "../components/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import VideoDetailScreen from "../components/VideoDetailScreen";

const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();
export default function AppNav({ navigation }) {
  const { isLoggedIn, profile } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="/">
        <Drawer.Screen name="Home" component={HomeScreenComponent} />
        <Drawer.Screen name="Dashboard" component={NotificationsScreen} />
      </Drawer.Navigator> */}

      {isLoggedIn != true ? (
        <Stack.Navigator>
          <Drawer.Screen
            name="/"
            component={LoginScreenComponent}
            options={{ title: "Login Information" }}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator>
          {/* // <LoginScreenComponent value={{ navigation }}></LoginScreenComponent> */}
          <Drawer.Screen
            name="/"
            component={Dashboard}
            options={{
              title: "My Videos",
            }}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreenComponent}
            options={{ title: "Dashboard Home" }}
          />
          <Drawer.Screen
            name="videoDetail"
            component={VideoDetailScreen}
            options={{ title: "Video Detail " }}
          />
        </Drawer.Navigator>
      )}

      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </NavigationContainer>
  );
}
