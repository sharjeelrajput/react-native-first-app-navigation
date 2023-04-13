import React, { Component, useContext } from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { AuthContext } from "./AuthContext";
import Dashboard from "./Dashboard";
import LoginScreenComponent from "./LoginScreen";
import CustomHeader from "./CustomHeader";

export default HomeScreenComponent = ({ navigation }) => {
  const { isLoggedIn, profile } = useContext(AuthContext);

  return (
    <View>
       <CustomHeader navigation={navigation} title="Settings" />
      <StatusBar style="auto" />
      <Text>This is List page ...</Text>
      <Button
      title="dashBoard"
      onPress={() =>
        navigation.navigate('/', {name: 'Jane'})
      }
    />
      {/* <Text> Is use login {isLoggedIn == true ? " Login " : "not loggin"}</Text> */}
      {/* {isLoggedIn != true ? (
        <LoginScreenComponent value={{ navigation }}></LoginScreenComponent>
      ) : (
        <Dashboard></Dashboard>
      )} */}
    </View>
  );
};

//  HomeScreenComponent = ({navigation}) => {
//   return (
//     <View>
//       <Text>This is my home Screen!</Text>
//       <StatusBar style="auto" />
//     </View>
//     // <Button
//     //   title="Go to Jane's profile"
//     //   onPress={() =>
//     //     navigation.navigate('Profile', {name: 'Jane'})
//     //   }
//     // />
//   );
// };

// export default HomeScreenComponent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
