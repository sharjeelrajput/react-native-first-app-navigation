import React , {useContext} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import HomeScreenComponent from '../components/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../components/AuthContext";
import Dashboard from "../components/Dashboard";
import LoginScreenComponent from "../components/LoginScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
export default function AppNav({navigation}) {
  const { isLoggedIn, profile } = useContext(AuthContext);
  return (
    <NavigationContainer>
        <Stack.Navigator>

        {isLoggedIn != true ? (
          <Stack.Screen
          name="/"
          component={LoginScreenComponent}
          options={{ title: "Welcome" }}
        />
        // <LoginScreenComponent value={{ navigation }}></LoginScreenComponent>
      ) : (
        <Stack.Screen
            name="/"
            component={Dashboard}
            options={{ title: "Dashboard 2 ",
            headerRight :() => {
              <view>
                <TouchableOpacity style={{marginLeft: 15}}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={28}
                    color='#000000'>

                    </MaterialCommunityIcons>
                </TouchableOpacity>

              </view>
            } }}
          />
        )}
          <Stack.Screen
            name="Home"
            component={HomeScreenComponent}
            options={{ title: "Video List" }}
          />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}
