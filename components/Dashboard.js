import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from './AuthContext';

export default function Dashboard({navigation}) {
    const { isLoggedIn, profile, logout } = useContext(AuthContext);
  return (
    <View>
        <Text>  Dashboard Page here . Welcome {profile.user_profile.name}
        <Button title='Move to next page' onPress={() => { navigation.navigate("Home");}} />
        <Button title='Logout' onPress={() => { logout();}} />
        </Text>

      </View>
  )
}
