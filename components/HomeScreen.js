import React, { Component, useContext } from "react";
import { StatusBar, Text, View } from "react-native";
import { AuthContext } from "./AuthContext";
import Dashboard from "./Dashboard";
import LoginScreenComponent from "./LoginScreen";

export default HomeScreenComponent = ({ navigation }) => {
  const { isLoggedIn, profile } = useContext(AuthContext);

  return (
    <View>
      <StatusBar style="auto" />
      <Text>This is List page ...</Text>
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
