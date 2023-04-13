import React, { Component, useContext } from "react";
import {
  Button,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AuthContext } from "./AuthContext";
import CustomHeader from "./CustomHeader";
import { Video } from "expo-av";

export default VideoDetailScreen = ({ navigation, route }) => {
  const { isLoggedIn, profile } = useContext(AuthContext);
  const { id, title, detail_min } = route.params;
  console.log(" -- ", id, title, detail_min);
  console.log(navigation);
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <CustomHeader navigation={navigation} title="Settings" />
      <StatusBar style="auto" />
      <Text>Video Title </Text>
      <Image
        style={styles.videoThumb}
        source={{
          uri: detail_min.thumb,
        }}
      />
      <Video
                  source={{ uri: detail_min?.videoUrl }}
                  paused={true}
                  controls={true}
                  // rate={1.0}
                  // volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay={false}
                  // isLooping
                  style={{ width: 300, height: 300 }}
                />
      <Button
        title="Back To Videos"
        onPress={handleGoBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    overflow: "scroll",
    backgroundColor: "##ccc",
    // maxHeight: "80",
    // flexGrow: 1
  },
  copntainerView: {
    padding: 10,
  },
  videoThumb: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
    borderBottom: "1px solid #ccc",
  },
});
