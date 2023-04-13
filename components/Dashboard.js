import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
// import VideoService from '../services/VideoService';
import { TestMe } from "./VideoService";
import VideoService from "../components/VideoService";
import { AuthContext } from "./AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { Video } from "expo-av";
import SelectDropdown from "react-native-select-dropdown";
import CustomHeader from "./CustomHeader";

export default function Dashboard({ navigation }) {
  const screenHeight = Dimensions.get("window").height - 100;
  const { isLoggedIn, profile, logout, userEmail } = useContext(AuthContext);
  const listVideoType = [
    "All Videos",
    "Published Videos",
    "Draft Videos",
    "Scheduale Videos",
    "Localize Videos",
  ];
  const [listVideos, setListVideos] = useState([]);
  const reloadVideoByType = (selectedItem, index) => {
    console.log("22", selectedItem, index);
    let searchType = ["draft", "published"];
    if (selectedItem == "Published Videos") {
      searchType = ["published"];
    }
    if (selectedItem == "Draft Videos") {
      searchType = ["draft"];
    }
    if (selectedItem == "Scheduale Videos") {
      searchType = ["scheduale"];
    }
    if (selectedItem == "Localize Videos") {
      searchType = ["localize"];
    }
    searchVideoData(searchType);
  };

  const searchVideoData = (type) => {

    // console.log("---", profile.session_id);
    // console.log("---", userEmail);
    let searchData = {
      email: userEmail,
      session_id: profile.session_id,
      publish_status: type,
      asc: -1,
      limit: 18,
      location_videos: false,
      offset: 0,
      publish_status: type,
      search_by: "_id",
      search_term: "",
      session_id: "642ac51cf95707e96aaa4659",
      sort_by: "created",
    };
    // console.log(VideoService.title);
    setListVideos([]);
    VideoService.getVideos(searchData).then((results) => {
      console.log(
        "Searchy response ............ ",
        VideoService.videoLists.length
      );
      setListVideos(VideoService.videoLists);
      // console.log(VideoService.videoLists);
    });
  };
  useEffect(() => {
    console.log("%c*************** LOAD VIDEO LIST .....", "color:red");
    searchVideoData(["published", "draft"]);
  }, []);
  return (
    <View style={{ height: screenHeight }}>
       <CustomHeader navigation={navigation}  title="Dashboard page " />
      <Text>
        {" "}
        Dashboard Page here .... Welcome {profile.user_profile.name}
        <SelectDropdown
          data={listVideoType}
          onSelect={(selectedItem, index) => {
            reloadVideoByType(selectedItem, index);
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <Button
          title="Move to next page"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Button
          title="Logout"
          onPress={() => {
            logout();
          }}
        />
      </Text>
      {VideoService?.videoLists != null ? <Text>Hello</Text> : ""}

      <ScrollView // contentContainerStyle={{ flexGrow: 1 }}
        contentContainerStyle={styles.scrollview}
      >
        {listVideos &&
          listVideos.map((video, index) => {
            return (
              <View style={styles.copntainerView} key={index}>
                <Text>{video.title}</Text>
                {/* <Text>{video.thumbnail_path_signed_url}</Text> */}
                <View style={{ height: 50, width : 150, background: 'url(' + video.thumbnail_path_signed_url + ') cover'}} key={`img-bg-${index}`}>
                <Text>HEllo</Text>
                </View>
                <Image
                  key={`img-${index}`}
                  style={styles.videoThumb}
                  source={{
                    uri: video.thumbnail_path_signed_url,
                  }}
                />

                {/* <Video
                  source={{ uri: video?.fpath_signed_url }}
                  paused={true}
                  controls={true}
                  // rate={1.0}
                  // volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  shouldPlay={false}
                  // isLooping
                  style={{ width: 300, height: 300 }}
                /> */}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
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
  videoThumb : {
    width: "100%",
    height: Dimensions.get("window").height / 4,
    borderBottom: "1px solid #ccc",
  }
});
