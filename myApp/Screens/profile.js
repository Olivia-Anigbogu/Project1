import * as React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

// Define the Profile component
export default function Profile({ navigation }) {
  // Extract the parameters passed to the component using useRoute
  const unpack = useRoute();
  const Name = unpack.params?.res.Name;
  const Email = unpack.params?.res.Email;
  const PhoneNumber = unpack.params?.res.PhoneNumber;
  const Password = unpack.params?.res.Password;
  const editProfile = () => {
    navigation.navigate("EditProfile");
  };
  const goToIndex = () => {
    navigation.navigate("Index");
  };
  const goToPrivacy = () => {
    navigation.navigate("Privacy");
  };
  const goToFAQ = () => {
    navigation.navigate("FAQ");
  };
  // Return a JSX element
  return (
    // Display an image of books as the background
    <ImageBackground
      source={require("../assets/books.jpg")}
      style={styles.container}
    >
      <ScrollView style={styles.mainView}>
        {/* Display "Welcome {Name}" in bold font */}
        <Text style={styles.text}>Welcome {Name}</Text>
        <View style={{ padding: "20px" }}>
          {/* Display the user's name */}
          <Ionicons name="person">
            {" "}
            <Text style={styles.email}>Name</Text>
          </Ionicons>
          <Text
            style={{
              marginTop: 10,
              paddingLeft: "20px",
              textTransform: "capitalize",
            }}
          >
            {Name}
          </Text>
        </View>
        {/* Display a horizontal line */}
        <View
          style={{
            borderBottomWidth: 1,
            width: "92%",
            alignSelf: "center",
            backgroundColor: "red",
          }}
        ></View>
        <View style={{ padding: "20px" }}>
          {/* Display the user's email address */}
          <Ionicons name="mail">
            <Text style={styles.email}> Email Address</Text>
          </Ionicons>
          <Text style={{ marginTop: 10, paddingLeft: "20px" }}>{Email}</Text>
        </View>
        {/* Display a horizontal line */}
        <View
          style={{
            borderBottomWidth: 1,
            width: "92%",
            alignSelf: "center",
            backgroundColor: "red",
          }}
        ></View>
        <View style={{ padding: "20px" }}>
          {/* Display the user's mobile number */}
          <Ionicons name="phone-portrait">
            <Text style={styles.email}> Mobile Number</Text>
          </Ionicons>
          <Text style={{ marginTop: 10, paddingLeft: "20px" }}>
            {PhoneNumber}
          </Text>
        </View>
        {/* Display a horizontal line */}
        <View
          style={{
            borderBottomWidth: 1,
            width: "92%",
            alignSelf: "center",
            backgroundColor: "red",
          }}
        ></View>
        {/* <View style={{padding:'20px'}}> */}
        {/* Display the user's password */}
        {/* <Ionicons name='eye'>
            <Text style={styles.email}> Password</Text>
          </Ionicons>
          <Text style={{marginTop:10, paddingLeft:'20px', textDecorationLine:"line-through",}}>{Password} </Text>
        </View> */}
        {/* Display a horizontal line */}
        <View
          style={{
            borderBottomWidth: 1,
            width: "92%",
            alignSelf: "center",
            backgroundColor: "red",
          }}
        ></View>
        {/* Display an "Edit Profile" button */}
        <TouchableOpacity>
          <Pressable onPress={editProfile}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </View>
          </Pressable>
        </TouchableOpacity>
        <Text>
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.lastText}>Others</Text>
        <Pressable onPress={goToFAQ}>
          <View>
            <Text
              style={{
                marginTop: 10,
                paddingLeft: "20px",
                paddingBottom: "20px",
              }}
            >
              Faq
            </Text>
          </View>
          {/* Display a horizontal line */}
          <View
            style={{
              borderBottomWidth: 1,
              width: "92%",
              alignSelf: "center",
              backgroundColor: "red",
            }}
          ></View>
          <Text>{"\n"}</Text>
        </Pressable>
        <Pressable onPress={goToPrivacy}>
          <View>
            <Text
              style={{
                marginTop: 10,
                paddingLeft: "20px",
                paddingBottom: "20px",
              }}
            >
              Privacy Policy
            </Text>
          </View>
          {/* Display a horizontal line */}
          <View
            style={{
              borderBottomWidth: 1,
              width: "92%",
              alignSelf: "center",
              backgroundColor: "red",
            }}
          ></View>
          <Text>{"\n"}</Text>
        </Pressable>
        <Pressable onPress={goToIndex}>
          <View>
            <Text
              style={{
                marginTop: 10,
                paddingLeft: "20px",
                paddingBottom: "20px",
              }}
            >
              Log Out
            </Text>
          </View>
          {/* Display a horizontal line */}
          <View
            style={{
              borderBottomWidth: 1,
              width: "92%",
              alignSelf: "center",
              backgroundColor: "red",
            }}
          ></View>
          <Text>{"\n"}</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}

// Define styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    backgroundColor: "beige",
    height: "70%",
    width: "100%",
    position: "absolute",
    bottom: 0.5,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  email: {
    color: "gray",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "black",
    top: "70%",
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  lastText: {
    padding: "20px",
    fontSize: 20,
    fontStyle: "italic",
  },
});
