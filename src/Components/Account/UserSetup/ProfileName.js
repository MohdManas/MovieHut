import React,{useState,useContext} from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { UserProfile } from "../Services/Providers/UserProfileProvider";

export const ProfileName = ({ route,navigation }) => {
  const {setUserAvatar,setUserDisplayName}=useContext(UserProfile)
  const { data } = route.params;
  const [username,setUserName]=useState("")
  const userSelectedAvatar=data.image

  const storeData=(name,avatar)=>{
   setUserAvatar(avatar)
   setUserDisplayName(name)
   navigation.navigate("MainNavigator")
  }

  const Profile = () => (
    <View>
      <View style={styles.picture}>
        <Image source={require("../../assets/display.png")} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleStyle}>Enter your username</Text>
      </View>
      <View style={styles.avatar}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 75 }}
          source={{ uri: `${data.image}` }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter username"
          onChangeText={text=>setUserName(text)}
          onSubmitEditing={()=>storeData(username,userSelectedAvatar)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  picture: {
    top: Dimensions.get("screen").height * 0.05,
    width: Dimensions.get("screen").width * 0.4,
    left: Dimensions.get("screen").width * 0.3,
    height: Dimensions.get("screen").height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 25,
    fontFamily: "Griffy_400Regular",
    color: "#fff",
  },
  avatar: {
    backgroundColor: "#fff",
    marginVertical: 15,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: "#fff",
    left: Dimensions.get("screen").width * 0.3,
  },
  textInput: {
    left: Dimensions.get("screen").width * 0.2,
    width: Dimensions.get("screen").width * 0.6,
  },
});
