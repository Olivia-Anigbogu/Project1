import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
export default function Index({ navigation }) {
    const goToRegister = () => {
        navigation.navigate("Register")
    }
    const goToLogin = () => {
        navigation.navigate("Login")
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.mainText}>ReadMore</Text>
                    <Text style={styles.subText}>Read anytime, anywhere with our convenient book app.</Text>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Image style={styles.image} source={require("../assets/books.jpg")}></Image>
                    <br />
                    <br />
                    <Text style={styles.TextThree}>Keep your library with you where-ever you go.</Text>
                    <Text style={styles.TextFour}>Access your favourite books with just a click on our mobile app.<br />Explore a world of books at your fingertips.</Text>
                </View>
                <TouchableOpacity>
                    <Pressable onPress={goToRegister}>
                        <View style={styles.textBox}>
                            <Text style={styles.TextFive}>Join for free</Text>
                        </View>
                    </Pressable>
                </TouchableOpacity>
                <View>
                    <Text style={styles.TextSix}>Have an account already?</Text>
                    <TouchableOpacity>
                        <Pressable onPress={goToLogin}>
                            <Text style={styles.TextSeven}>Sign in</Text>
                        </Pressable>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    mainText: {
        fontSize: 40,
        textAlign: "center",
        color: "coral",
        fontStyle: "italic",
    },
    subText: {
        textAlign: "center",
        fontSize: 11,
        opacity: 0.6,
    },
    image: {
        width: "100%",
        height: 380,
    },
    TextThree: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 25,
    },
    TextFour: {
        marginTop: 4,
        textAlign: "center",
        opacity: 0.6,
    },
    textBox: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "brown",
        borderRadius: 30,
        padding: 10,
        height: 60,
        marginTop: 40,
        fontSize: 20,
        marginBottom: 15,
        alignSelf: "center",
        backgroundColor: "black",
    },
    TextFive: {
        color: "white",
        textAlign: "center",
        padding: 8,
    },
    TextSix: {
        textAlign: "center",
    },
    TextSeven: {
        textAlign: "center",
        textDecorationLine: "underline",
        fontStyle: "italic",
        color: "coral",
    },
})

