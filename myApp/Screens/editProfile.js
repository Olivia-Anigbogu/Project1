import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { View, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity, Pressable, ScrollView } from "react-native";

export default function EditProfile({ navigation }) {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [PhoneNumber, setPhoneNumber] = useState("");
  const unpack = useRoute();
  let newName = unpack.params?.res.Name;
  let newPassword = unpack.params?.res.Password;
  let newPhoneNumber = unpack.params?.res.PhoneNumber;
  let newEmail = unpack.params?.res.Email;

  const submit = () => {
    fetch("http://localhost/Project1/myApp/API/update.php", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: Name ? Name : newName,
        Password: Password ? Password : newPassword,
        PhoneNumber: PhoneNumber ? PhoneNumber : newPhoneNumber,
        Email: Email ? Email : newEmail,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.PhoneNumber) {
          alert("Updated Successfully ");
          newName = res.Name;
          newPassword = res.Password;
          newPhoneNumber = res.PhoneNumber;
          newEmail = res.Email;

          navigation.navigate("Profile", { res });
        } else {
          alert("There was a slight error");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ImageBackground source={require('../assets/books.jpg')} style={styles.container}>
      <ScrollView style={styles.mainView}>
        <Text style={styles.text}>Edit Profile </Text>
        <View style={{ padding: '20px' }}>

          <Ionicons name='person'> <Text style={styles.email}>Name </Text></Ionicons>
          <TextInput style={{ marginTop: 10, paddingLeft: '20px', textTransform: "capitalize" }} placeholder={newName} onChangeText={setName} />
        </View>

        <View style={{ borderBottomWidth: 1, width: '92%', alignSelf: "center", backgroundColor: "red" }}></View>
        <View style={{ padding: '20px' }}>

          <Ionicons name='mail'>
            <Text style={styles.email}> Email Address</Text>
          </Ionicons>
          <TextInput style={{ marginTop: 10, paddingLeft: '20px' }} placeholder={newEmail} onChangeText={setEmail} />
        </View>

        <View style={{ borderBottomWidth: 1, width: '92%', alignSelf: "center", backgroundColor: "red" }}></View>
        <View style={{ padding: '20px' }}>

          <Ionicons name='phone-portrait'>
            <Text style={styles.email}> Mobile Number</Text>
          </Ionicons>
          <TextInput style={{ marginTop: 10, paddingLeft: '20px' }} placeholder={newPhoneNumber} onChangeText={setPhoneNumber} />
        </View>

        <View style={{ borderBottomWidth: 1, width: '92%', alignSelf: "center", backgroundColor: "red" }}></View>
        <View style={{ padding: '20px' }}>

          <Ionicons name='phone-portrait'>
            <Text style={styles.email}> Password</Text>
          </Ionicons>
          <TextInput style={{ marginTop: 10, paddingLeft: '20px' }} placeholder={newPassword} onChangeText={setPassword} secureTextEntry={true} />
        </View>

        <View style={{ borderBottomWidth: 1, width: '92%', alignSelf: "center", backgroundColor: "red" }}></View>
        <TouchableOpacity>
          <Pressable onPress={submit} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </Pressable>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    backgroundColor: 'beige',
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
  },
  email: {
    color: "gray",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "black",
    top: "70%",
    width: '50%',
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});