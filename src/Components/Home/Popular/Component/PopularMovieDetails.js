import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const PopularMovieDetails = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMethod="scale"
          source={{ uri: `${data.img}` }}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.detailsView}>
        <View style={styles.titleAndLinkView}>
          <View style={styles.titleView}>
            <Text style={styles.titleStyle}>{data.title}</Text>
          </View>
          <View style={styles.linkView}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`${data.url}`);
              }}
            >
              <MaterialCommunityIcons
                name="open-in-new"
                color="#A020F0"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ratingView}>
          <Text style={styles.ratingStyle}>⭐{data.rating}/10 IMDB</Text>
        </View>
        <View style={styles.languageView}>
          <Text style={styles.languageStyle}>Description</Text>
          <Text style={styles.languageDescStyle}>{data.description}</Text>
        </View>
        <View style={styles.languageView}>
          <Text style={styles.languageStyle}>Starring</Text>
          <Text style={styles.languageDescStyle}>{data.starring}</Text>
        </View>
        <View style={styles.languageView}>
          <Text style={styles.languageStyle}>Directed By</Text>
          <Text style={styles.languageDescStyle}>{data.directedBy}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageView: {
    width: "50%",
    height: "45%",
    marginLeft: "25%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  detailsView: {
    backgroundColor: "#000",
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: "#fff",
    borderTopWidth: 2,
  },
  titleAndLinkView: {
    marginVertical: 10,
  },
  titleStyle: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Tangerine_400Regular",
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
  },
  linkView: {
    bottom: 35,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  ratingView: {
    bottom: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  ratingStyle: {
    fontStyle: "Lato_400Regular",
    fontWeight: "bold",
    color: "#fff",
  },
  languageView: {
    bottom: 45,
    marginTop: 10,
  },
  languageStyle: {
    fontStyle: "Lato_400Regular",
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  languageDescStyle: {
    fontSize: 17,
    fontStyle: "Lusitana_400Regular",
    color: "#fff",
  },
});
