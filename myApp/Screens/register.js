import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, ImageBackground, TextInput, Pressable, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register({ navigation }) {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [response, setResponse] = useState('');
  const [fname, setFname] = useState('');

  // This function is called when the user clicks on the "Sign Up" button
  const submit = () => {
    fetch('http://localhost/Project1/myApp/API/register.php',
      {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: Name,
          PhoneNumber: PhoneNumber,
          Email: Email,
          Password: Password,
        })
      }).then((res) => res.json())
      .then((response) => {
        setResponse(response.msg)
        setFname(response.Name)

      })
      .catch((error) => {
        alert(error)
      })

  }

  // This function is called when the user clicks on the "Click Here To Login" button
  const goToLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <ImageBackground source={require('../assets/books.jpg')} style={styles.container}>
      <ScrollView style={styles.firstView}>
        <Text style={styles.text}>Registration</Text>
        <View style={styles.buttonStyles}>
          <View style={styles.textBox}>
            <TextInput style={styles.tex} placeholder='Name' onChangeText={setName} />
          </View>
          <View style={styles.textBox}>
            <TextInput style={styles.tex} placeholder='Phone Number' onChangeText={setPhoneNumber} />
          </View>
          <View style={styles.textBox}>
            <TextInput style={styles.tex} placeholder='Email' onChangeText={setEmail} />
          </View>
          <View style={styles.textBox}>
            <TextInput style={styles.tex} placeholder='Password' secureTextEntry={true} onChangeText={setPassword} />
          </View>
          <br />

          {/* This is the "Sign Up" button */}
          <TouchableOpacity>
            <Pressable onPress={submit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </Pressable>
          </TouchableOpacity>
          <br />
          {/* This is where the response message will be displayed */}
          <View>
            <Text style={{ color: "brown", fontWeight: "bold", textAlign: "center", fontStyle: "" }}>{response} {fname}</Text>
          </View>

          {/* This is the "Click Here To Login" button */}
          <Pressable onPress={goToLogin}>
            <Text style={{ color: "brown", fontWeight: "bold", textAlign: "center", fontStyle: "", textDecorationLine: "underline" }}>Click Here To Login</Text>
          </Pressable>
        </View>
      </ScrollView>


    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  textOne: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 120,
  },
  firstView: {
    backgroundColor: 'white',
    height: "66%",
    width: "100%",
    position: "absolute",
    bottom: 0.5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tex: {
    color: "black",
    fontSize: 14,
    fontStyle: "bold",
    padding: 10,
  },
  textBox: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "brown",
    borderRadius: 30,
    padding: 10,
    height: 60,
    marginTop: 15,
    fontSize: 20,
    marginBottom: 15,
  },
  buttonStyles: {
    margin: 20,
    padding: 30,
    borderRadius: 30,
  },
  buttonDesign: {
    color: "white",
    fontSize: 20,
    textAlign: "center",

  },
  button: {
    borderRadius: 30,
    padding: 10,
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
})
