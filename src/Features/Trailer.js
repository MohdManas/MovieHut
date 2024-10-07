import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import LottieView from "lottie-react-native";
import { FadeInView } from "../Animation/Animation";

export const Trailer = ({ navigation }) => {
  const [playList, setPlayList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Thor");

  const onChangeSearch = (query) => setSearchKeyword(query);

  const searchVideos = async (value) => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=300&q=${value}&type=video&key=AIzaSyADfJEcp593ixdIiy9LNEePFBRb9akgkIY`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setPlayList(data))
      .catch((error) => {
        console.log("Error getting user request at Trailer.js: " + error);
      });
  };

  useEffect(() => {
   searchVideos(searchKeyword);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.GridViewContainer}>
      <FadeInView duration={2500}>
        <TouchableOpacity
          onPress={() => navigation.navigate("WatchTrailer", { data: item })}
        >
          <Image
            style={styles.image}
            source={{ uri: `${item.snippet.thumbnails.medium.url}` }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </FadeInView>
    </View>
  );


console.log(playList)

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchBarView}>
          <Searchbar
            placeholder="Watch just about anything"
            style={{ backgroundColor: "#808080" }}
            inputStyle={{ color: "#fff" }}
            value={searchKeyword}
            onChangeText={onChangeSearch}
            onSubmitEditting={searchVideos(searchKeyword)}
          />
        </View>
        {playList.length == 0 && (
          <View style={styles.lottie}>
            <LottieView
              source={require("../../assets/movie2.json")}
              style={styles.lottieStyle}
              autoPlay
              loop
            />
          </View>
        )}
        <FadeInView duration={2500}>
          <View>
            <FlatList
              data={playList.items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        </FadeInView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  GridViewContainer: {
    flex: 1,
    height: 200,
    margin: 5,
    backgroundColor: "#000",
  },
  searchBarView: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    marginTop: 36,
    marginBottom: 12,
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  titleStyle: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Lato_400Regular",
  },
  pictureStyle: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  image: {
    height: 200,
  },
  lottie: {
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieStyle: {
    height: 200,
    width: 200,
  },
});


// const generateThumbnail = async () => {
//   try {
//     const { uri } = await VideoThumbnails.getThumbnailAsync(
//       `${Trailers.video}`,
//       {
//         time: 15000,
//         quality: 1,
//       }
//     );
//     setThumbnail(uri);
//   } catch (e) {
//     console.warn(e);
//   }
// };

{
  /* <View style={styles.container}>
<VideoPlayer
  videoProps={{
    shouldPlay: false
    resizeMode: ResizeMode.COVER
    visible:true
    defaultControlsVisible
   timeVisible
    source: {
      uri: `${item.video}`,
    },
    ref: refVideo2,
  }}
  fullscreen={{
    inFullscreen: inFullscreen2,
    enterFullscreen: async () => {
      setStatusBarHidden(true, "fade");
      setInFullsreen2(!inFullscreen2);
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
      refVideo2.current.setStatusAsync({
        shouldPlay: true,
      });
    },
    exitFullscreen: async () => {
      setStatusBarHidden(false, "fade");
      setInFullsreen2(!inFullscreen2);
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
    },
  }}
  mute={{
    enterMute: () => setIsMute(!isMute),
    exitMute: () => setIsMute(!isMute),
    isMute,
  }}
  style={{
    videoBackgroundColor: "#ffff",
    height: inFullscreen2 ? Dimensions.get("window").width : 250,
    width: inFullscreen2 ? Dimensions.get("window").height : 400,
  }}
/>


<View style={styles.titleView}>
  <Text style={styles.titleStyle}>{video.toLocaleUpperCase()}</Text>
</View>
</View> <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.COVER,
          source: {
            uri: `${item.video}`,
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, "fade");
            setInFullsreen2(!inFullscreen2);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
            );
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            });
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, "fade");
            setInFullsreen2(!inFullscreen2);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.DEFAULT
            );
          },
        }}
        mute={{
          enterMute: () => setIsMute(!isMute),
          exitMute: () => setIsMute(!isMute),
          isMute,
        }}
        style={{
          videoBackgroundColor: "#ffff",
          height: inFullscreen2 ? Dimensions.get("window").width : 250,
          width: inFullscreen2 ? Dimensions.get("window").height : 400,
        }}
      />
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{video.toLocaleUpperCase()}</Text>
      </View>
    </View> */


  // const fetchPlayListData = async () => {
  //   await fetch(
  //     "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL3kx5h2TrYGwsSKUoJ2u_YpxNXQSkTfPQ&maxResults=300&part=snippet%2CcontentDetails&key=AIzaSyADfJEcp593ixdIiy9LNEePFBRb9akgkIY",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPlayList(data))
  //     .catch((error) => console.log("Error fetching youtube data" + error));
  // };
}
