import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

export default Header = ( props) => {
  return (
    <View style={{
        height: 90,
        backgroundColor: "#cccccc",
        paddingTop: 50,
        }}>
      <Text style={{ fontSize: 22 }}> :: {props.name} Checking..</Text>
    </View>
  );
};
