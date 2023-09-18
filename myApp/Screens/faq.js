import * as React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function FAQ({ navigation }) {
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <ScrollView style={styles.container}>
      <Ionicons name="arrow-back" size={20} onPress={goToProfile}>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Frequently Asked Questions(FAQ)
        </Text>
      </Ionicons>
      <br />
      <View
        style={{
          borderBottomWidth: 1,
          width: "100%",
          backgroundColor: "black",
        }}
      ></View>
      <br />
      <View>
        <Ionicons name="book-sharp" size={18} style={{ marginLeft: 10 }}>
          <Text style={styles.question}>Why can't I edit my profile?</Text>
        </Ionicons>
        <Text style={styles.answer}>
          You can edit your profile perfectly but just ensure that your phone
          number remains constant ie does not change.
        </Text>
        <Ionicons name="book-sharp" size={18} style={{ marginLeft: 10 }}>
          <Text style={styles.question}>
            How many books can I download at a time?
          </Text>
        </Ionicons>
        <Text style={styles.answer}>
          You can download as many books as you can.
        </Text>
        <Ionicons name="book-sharp" size={18} style={{ marginLeft: 10 }}>
          <Text style={styles.question}>Can I upload books on Readmore?</Text>
        </Ionicons>
        <Text style={styles.answer}>No, you can't.</Text>
        <Ionicons name="book-sharp" size={18} style={{ marginLeft: 10 }}>
          <Text style={styles.question}>
            Why can't I upload books on Readmore?
          </Text>
        </Ionicons>
        <Text style={styles.answer}>
          Due to our policy, we are trying to restrict some user activities.
          Hence, we want to be in control of the content of the application.
        </Text>
        <Ionicons name="book-sharp" size={18} style={{ marginLeft: 10 }}>
          <Text style={styles.question}>
            Why don't I receive notifications?
          </Text>
        </Ionicons>
        <Text style={styles.answer}>
          You can, check your settings and adjust it.
        </Text>
        <Ionicons name="book-sharp" size={18} style={{ marginLeft: 10 }}>
          <Text style={styles.question}>
            How long will it take for more books to be uploaded?
          </Text>
        </Ionicons>
        <Text style={styles.answer}>
          We upload new books once a fort night.
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  question: {
    fontWeight: "bold",
    padding: 10,
  },
  answer: {
    fontWeight: "100",
    fontStyle: "italic",
    padding: 20,
  },
});
