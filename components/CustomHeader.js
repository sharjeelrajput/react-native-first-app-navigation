import React, { useContext, useEffect, useState } from "react";
import {
  View, Text
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomHeader ({ navigation, title }) {
    return (
      // <View >
      //   <Text style={{ marginLeft: 10 }}>Menu</Text>
      // </View>
      <View style={{ flexDirection: 'row', height: 50 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={{ marginLeft: 10 }}>Menu 2</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{title}</Text>
        </View>
      </View>
    );
  };