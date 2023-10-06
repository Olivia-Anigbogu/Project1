import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';

export default function Login({ navigation }) {
    // Define state variables for email and password
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    // Define a function to submit the login form
    const submit = () => {
        fetch('http://localhost/Project1/myApp/API/login.php',
            {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Email: Email,
                    Password: Password,
                })
            })
            .then((response) => response.json())
            .then((res) => {
                // If the login was successful, navigate to the profile page with user details
                if (res.msg == 'Success') {
                    navigation.navigate("Profile", { res })
                }
                else {
                    // If the login failed, show an error message
                    alert(res.msg)
                }
            })
            .catch((error) => {
                // If there was an error with the request, show an error message
                alert(error)
            })
    }

    // Define a function to navigate to the registration page
    const goToRegister = () => {
        navigation.navigate("Register")
    }

    return (
        <ImageBackground source={require('../assets/books.jpg')} style={styles.container}>
            <ScrollView style={styles.firstView}>
                <Text style={styles.text}>Sign in</Text>
                <View style={styles.buttonStyles}>

                    <View style={styles.textBox}>
                        <TextInput style={styles.tex} placeholder='Email' onChangeText={setEmail} />
                    </View>

                    <View style={styles.textBox}>
                        <TextInput style={styles.tex} placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
                    </View><Text>{"\n"}</Text>
                    <TouchableOpacity>
                        <Pressable onPress={submit}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Sign in  {"\n"}</Text>
                            </View>
                        </Pressable>
                    </TouchableOpacity>
                  
                    <View>
                        <TouchableOpacity>
                            <Pressable onPress={goToRegister}>
                                <Text style={styles.textdec}>Not yet registered? Click here</Text>
                            </Pressable>
                        </TouchableOpacity>
                    </View>
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
    },
    textOne: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        margin: 120,
        textAlign: "center",
        fontStyle: "italic",
    },
    firstView: {
        backgroundColor: 'white',
        height: "66%",
        width: "100%",
        position: "absolute",
        bottom: 0.5,
        borderRadius: 15,
    },
    tex: {
        color: "black",
        fontSize: 14,
        fontStyle: "bold",
        padding: 10
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
    textdec: {
        textDecorationLine: "underline",
        fontStyle: "italic",
        color: "brown",
        textAlign: "center"
    },
    textdecTwo: {
        textDecorationLine: "underline",
        fontStyle: "italic",
        color: "dodgerblue",
    },
    image: {
        height: 30,
        width: 30,
        top: 190,
        margin: 10,
        opacity: 0.6,
    },
    imageTwo: {
        height: 30,
        width: 30,
        top: 250,
        margin: 10,
        opacity: 0.6,
    }
})