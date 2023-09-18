import { StatusBar } from 'expo-status-bar'; // This imports the StatusBar component from the expo-status-bar library
import { Image, ImageBackground } from 'react-native'; // This imports the Image and ImageBackground components from the react-native library
import { StyleSheet, Text, View, Pressable } from 'react-native'; // This imports the StyleSheet, Text, View and Pressable components from the react-native library
export default function Genres({ navigation }) { // This defines and exports a function component named Genres that takes a navigation prop
  const goToHome = () => { // This defines a function that navigates to the Home screen
    navigation.navigate("Home") // This calls the navigate method of the navigation prop with the Home screen name
  }
  const goToPsy = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Pyschology' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  const goToHor = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Horror' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  const goToKids = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Kids' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  const goToBio = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Biography' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  const goToRom = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Romance' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  const goToHum = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Humor' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  const goToMyst = () => { // This defines a function that navigates to the Home screen with a category parameter
    navigation.navigate("Home", { 'cat': 'Mystery' }) // This calls the navigate method of the navigation prop with the Home screen name and an object with the category value
  }
  return (
    <View style={styles.container}>
     {/* This returns a View component with a container style that wraps all other components */}
      <View style={styles.header}> 
      {/* This renders a View component with a header style that contains two components */}
        <Pressable onPress={goToHome}> 
         {/* This renders a Pressable component that triggers the goToHome function when pressed */}
          <Image style={styles.Arrowimage} source={require("../assets/arrow.png")}></Image> 
          {/* This renders an Image component with an Arrowimage style and an arrow icon as its source */}
        </Pressable>
        <Text style={styles.text}>Genres</Text>
        {/* This renders a Text component with a text style and Genres as its content */}

      </View>
      <Text style={styles.textThree}>All Genres</Text>
       {/* This renders a Text component with a textThree style and All Genres as its content */}
      <View style={styles.Main}>
      {/* This renders a View component with a Main style that contains several components */}
        <Pressable onPress={goToKids}>
        {/* This renders a Pressable component that triggers the goToKids function when pressed */}
          <View> 
           {/* This renders a View component that wraps three components */}
            <Image style={styles.android} source={require("../assets/children.png")}></Image>
             {/* This renders an Image component with an android style and a children icon as its source */}
            <View>
            {/* This renders a View component that wraps three components */}
              <Text style={styles.subText}>Kids</Text>
              {/* This renders a Text component with a subText style and Kids as its content */}
              <Text style={styles.nextText}>10 Books </Text>
              {/* This renders a Text component with a nextText style and 10 Books as its content */}
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>
              {/* This renders an Image component with a rightArrow style and a right-arrow icon as its source */}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={goToPsy}>
        {/* This renders a Pressable component that triggers the goToPsy function when pressed */}
          <View style={{ backgroundColor: "white" }}>
          {/* This renders a View component with a white background color that wraps three components */}
            <Image style={styles.android} source={require("../assets/school.png")}></Image>
            {/* This renders an Image component with an android style and a school icon as its source */}
            <View>
            {/* This renders a View component that wraps three components */}
              <Text style={styles.subText}> Pyschology</Text> 
              {/* This renders a Text component with a subText style and Pyschology as its content */}
              <Text style={styles.nextText}>10 Books </Text>
              {/* This renders a Text component with a nextText style and 10 Books as its content */}
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>
              {/* This renders an Image component with a rightArrow style and a right-arrow icon as its source */}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={goToBio}>
        {/* This renders a Pressable component that triggers the goToBio function when pressed */}
          <View style={{ backgroundColor: "white" }}>
          {/* This renders a View component with a white background color that wraps three components */}
            <Image style={styles.android} source={require("../assets/biography.png")}></Image>
             {/* This renders an Image component with an android style and a biography icon as its source */}
            <View>
            {/* This renders a View component that wraps three components */}
              <Text style={styles.subText}> Biography</Text> 
              {/* This renders a Text component with a subText style and Biography as its content */}
              <Text style={styles.nextText}>10 Books </Text>
              {/* This renders a Text component with a nextText style and 10 Books as its content */}
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>
              {/* This renders an Image component with a rightArrow style and a right-arrow icon as its source */}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={goToRom}>
        {/* This renders a Pressable component that triggers the goToRom function when pressed */}
          <View style={{ backgroundColor: "white" }}>
          {/* This renders a View component with a white background color that wraps three components */}
            <Image style={styles.android} source={require("../assets/love.png")}></Image>
            {/* This renders an Image component with an android style and a love icon as its source */}
            <View> 
             {/* This renders a View component that wraps three components */}
              <Text style={styles.subText}>Romance</Text>
              {/* This renders a Text component with a subText style and Romance as its content */}
              <Text style={styles.nextText}>11 Books </Text>
               {/* This renders a Text component with a nextText style and 11 Books as its content */}
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>
              {/* This renders an Image component with a rightArrow style and a right-arrow icon as its source */}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={goToHor}>
         {/* This renders a Pressable component that triggers the goToHor function when pressed */}
          <View style={{ backgroundColor: "white" }}>
          {/* This renders a View component with a white background color that wraps three components */}
            <Image style={styles.android} source={require("../assets/inspiration.png")}></Image>
             {/* This renders an Image component with an android style and an inspiration icon as its source */}
            <View>
            {/* This renders a View component that wraps three components */}
              <Text style={styles.subText}> Horror</Text> 
              {/* This renders a Text component with a subText style and Horror as its content */}
              <Text style={styles.nextText}>12 Books </Text>
              {/* This renders a Text component with a nextText style and 12 Books as its content */}
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>
              {/* This renders an Image component with a rightArrow style and a right-arrow icon as its source */}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={goToHum}>
          <View>
            <Image style={styles.android} source={require("../assets/career-promotion.png")}></Image>
            <View>
              <Text style={styles.subText}>Humor</Text>
              <Text style={styles.nextText}>10 Books </Text>
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>

            </View>

          </View>
        </Pressable>
        <Pressable onPress={goToMyst}>
          <View>
            <Image style={styles.android} source={require("../assets/mystery.png")}></Image>
            <View>
              <Text style={styles.subText}>Mystery</Text>
              <Text style={styles.nextText}>10 Books </Text>
              <Image style={styles.rightArrow} source={require("../assets/right-arrow.png")}></Image>

            </View>

          </View>
        </Pressable>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 3,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "beige",
    flex: 0.1,
    flexDirection: "column",
  },
  Arrowimage: {
    width: 20,
    height: 20,
    alignContent: "left",
    padding: 10,
    top: 33,
    marginLeft: 10,
  },
  text: {
    color: "black",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  Searchimage: {
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    padding: 10,
    bottom: 33,
    marginRight: 10,
  },
  textTwo: {
    color: "black",
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
  textThree: {
    color: "black",
    marginLeft: 10,
    padding: 20,
    fontWeight: "bold",
  },
  Main: {
    backgroundColor: "white",
    flex: 0.1,
    flexDirection: "column",
  },
  android: {
    height: 30,
    width: 30,
    marginLeft: 20,
    top: 30,
  },
  subText: {
    fontWeight: "bold",
    marginLeft: 90,
  },
  nextText: {
    marginLeft: 90,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  rightArrow: {
    height: 20,
    width: 20,
    bottom: 45,
    alignSelf: "flex-end",
  },
});