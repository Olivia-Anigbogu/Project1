import { View, StyleSheet, Text, Pressable, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from "@react-navigation/native";
import { Linking } from "react-native";
export default function Home({ navigation }) {
    const download1 = () => {
        Linking.openURL("https://manybooks.net/books/get/128487/6")
    }
    const download2 = () => {
        Linking.openURL("https://manybooks.net/books/get/139515/6")
    }
    const download3 = () => {
        Linking.openURL("https://manybooks.net/books/get/144731/6")
    }
    const download4 = () => {
        Linking.openURL("https://manybooks.net/books/get/122133/6")
    }
    const download5 = () => {
        Linking.openURL("https://manybooks.net/books/get/136304/6")
    }
    const download6 = () => {
        Linking.openURL("https://manybooks.net/books/get/132847/6")
    }
    const download7 = () => {
        Linking.openURL("https://manybooks.net/books/get/126529/6")
    }
    const download8 = () => {
        Linking.openURL("https://manybooks.net/books/get/123113/6")
    }
    const download9 = () => {
        Linking.openURL("https://manybooks.net/books/get/122533/6")
    }
    const download10 = () => {
        Linking.openURL("https://manybooks.net/books/get/143802/6")
    }
    const download11 = () => {
        Linking.openURL("https://manybooks.net/books/get/126054/6")
    }
    const download12 = () => {
        Linking.openURL("https://manybooks.net/books/get/124775/6")
    }
    const download13 = () => {
        Linking.openURL("https://manybooks.net/books/get/121066/6")
    }
    const download14 = () => {
        Linking.openURL("https://manybooks.net/books/get/127414/6")
    }
    const download15 = () => {
        Linking.openURL("https://manybooks.net/books/get/126466/6")
    }
    const download16 = () => {
        Linking.openURL("https://manybooks.net/books/get/126049/6")
    }
    const download17 = () => {
        Linking.openURL("https://manybooks.net/books/get/139510/6")
    }
    const download18 = () => {
        Linking.openURL("https://manybooks.net/books/get/123443/6")
    }
    const download19 = () => {
        Linking.openURL("https://manybooks.net/books/get/123478/6")
    }
    const download20 = () => {
        Linking.openURL("https://manybooks.net/books/get/134158/6")
    }
    const download21 = () => {
        Linking.openURL("https://manybooks.net/books/get/122217/6")
    }
    const download22 = () => {
        Linking.openURL("https://manybooks.net/books/get/134558/6")
    }
    const download23 = () => {
        Linking.openURL("https://manybooks.net/books/get/148396/6")
    }
    const download24 = () => {
        Linking.openURL("https://manybooks.net/books/get/123004/6")
    }
    const download25 = () => {
        Linking.openURL("https://manybooks.net/books/get/135651/6")
    }
    const download26 = () => {
        Linking.openURL("https://manybooks.net/books/get/121772/6")
    }
    const download27 = () => {
        Linking.openURL("https://manybooks.net/books/get/151292/6")
    }
    const download28 = () => {
        Linking.openURL("https://manybooks.net/books/get/132848/6")
    }
    const download29 = () => {
        Linking.openURL("https://manybooks.net/books/get/145525/6")
    }
    const download30 = () => {
        Linking.openURL("https://manybooks.net/books/get/125977/6")
    }
    const download31 = () => {
        Linking.openURL("https://manybooks.net/books/get/121576/6")
    }
    const download32 = () => {
        Linking.openURL("https://manybooks.net/books/get/121571/6")
    }
    const download33 = () => {
        Linking.openURL("https://manybooks.net/books/get/151703/6")
    }
    const download34 = () => {
        Linking.openURL("https://manybooks.net/books/get/151702/6")
    }
    const download35 = () => {
        Linking.openURL("https://manybooks.net/books/get/260981/6")
    }
    const download36 = () => {
        Linking.openURL("https://manybooks.net/books/get/255196/6")
    }
    const download37 = () => {
        Linking.openURL("https://manybooks.net/books/get/261126/6")
    }
    const download38 = () => {
        Linking.openURL("https://manybooks.net/books/get/149132/6")
    }
    const download39 = () => {
        Linking.openURL("https://manybooks.net/books/get/122635/6")
    }
    const download40 = () => {
        Linking.openURL("https://manybooks.net/books/get/121575/6")
    }
    const download41 = () => {
        Linking.openURL("https://manybooks.net/books/get/249931/6")
    }
    const download42 = () => {
        Linking.openURL("https://manybooks.net/books/get/247136/6")
    }
    const download43 = () => {
        Linking.openURL("https://manybooks.net/books/get/246356/6")
    }
    const download44 = () => {
        Linking.openURL("https://manybooks.net/books/get/234241/6")
    }
    const download45 = () => {
        Linking.openURL("https://manybooks.net/books/get/133403/6")
    }
    const download46 = () => {
        Linking.openURL("https://manybooks.net/books/get/133537/6")
    }
    const download47 = () => {
        Linking.openURL("https://manybooks.net/books/get/133320/6")
    }
    const download48 = () => {
        Linking.openURL("https://manybooks.net/books/get/127217/6")
    }
    const download49 = () => {
        Linking.openURL("https://manybooks.net/books/get/127828/6")
    }
    const download50 = () => {
        Linking.openURL("https://manybooks.net/books/get/138402/6")
    }
    const download501 = () => {
        Linking.openURL("https://manybooks.net/books/get/123631/6")
    }
    const download502 = () => {
        Linking.openURL("https://manybooks.net/books/get/133404/6")
    }
    const download51 = () => {
        Linking.openURL("https://manybooks.net/books/get/127532/6")
    }
    const download52 = () => {
        Linking.openURL("https://manybooks.net/books/get/127533/6")
    }
    const download53 = () => {
        Linking.openURL("https://manybooks.net/books/get/124687/6")
    }
    const download54 = () => {
        Linking.openURL("https://manybooks.net/books/get/255981/6")
    }
    const download55 = () => {
        Linking.openURL("https://manybooks.net/books/get/231316/6")
    }
    const download56 = () => {
        Linking.openURL("https://manybooks.net/books/get/211796/6")
    }
    const download57 = () => {
        Linking.openURL("https://manybooks.net/books/get/123007/6")
    }
    const download58 = () => {
        Linking.openURL("https://manybooks.net/books/get/151699/6")
    }
    const download59 = () => {
        Linking.openURL("https://manybooks.net/books/get/123447/6")
    }
    const download60 = () => {
        Linking.openURL("https://manybooks.net/books/get/127980/6")
    }
    const download61 = () => {
        Linking.openURL("https://manybooks.net/books/get/126632/6")
    }
    const download62 = () => {
        Linking.openURL("https://manybooks.net/books/get/128406/6")
    }
    const download63 = () => {
        Linking.openURL("https://manybooks.net/books/get/134265/6")
    }
    const download64 = () => {
        Linking.openURL("https://manybooks.net/books/get/123818/6")
    }
    const download65 = () => {
        Linking.openURL("https://manybooks.net/books/get/130505/6")
    }
    const download66 = () => {
        Linking.openURL("https://manybooks.net/books/get/121988/6")
    }
    const download67 = () => {
        Linking.openURL("https://manybooks.net/books/get/196621/6")
    }
    const download68 = () => {
        Linking.openURL("https://manybooks.net/books/get/149251/6")
    }
    const download69 = () => {
        Linking.openURL("https://manybooks.net/books/get/125887/6")
    }
    const download70 = () => {
        Linking.openURL("https://manybooks.net/books/get/142000/6")
    }

    const tab = createMaterialTopTabNavigator();
    const Mystery = () => (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theAbandonedRoom.jpg')} />
                    <Text style={styles.text}>The Abandoned Room{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Charles Wadsworth Camp</Text>{"\n"}<Pressable onPress={download1} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theAccused.jpg')} />
                    <Text style={styles.text}>The Accused{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Harold R. Daniels</Text>{"\n"}<Pressable onPress={download2} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theValleyOfFear.jpg')} />
                    <Text style={styles.text}>The Valley Of Fear{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Arthur Conan Doyle</Text>{"\n"}<Pressable onPress={download3} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theThurtyNinetySteps.jpg')} />
                    <Text style={styles.text}>The Thirty-Nine Steps{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: John Buchan</Text>{"\n"}<Pressable onPress={download4} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            {/* <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/')} />
                    <Text style={styles.text}>Whose Body?{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Dorothy L. Sayers</Text>{"\n"}<Pressable onPress={download5} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View> */}
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theMoonstone.jpg')} />
                    <Text style={styles.text}>The Moonstone{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Wikkie Collins</Text>{"\n"}<Pressable onPress={download6} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theAfterHouse.jpg')} />
                    <Text style={styles.text}>The After House{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Mary Roberts Rinehart</Text>{"\n"}<Pressable onPress={download7} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/aStudyInScarlet.jpg')} />
                    <Text style={styles.text}>A Study In Scarlet{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Arthur Conan Doyle</Text>{"\n"}<Pressable onPress={download8} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theMysteriousAffairOfStyles.jpg')} />
                    <Text style={styles.text}>The Mysterious Affair Of Styles{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Agatha Christie</Text>{"\n"}<Pressable onPress={download9} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theMostDangerousGame.jpg')} />
                    <Text style={styles.text}>The Most Dangerous Game{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Richard Connel</Text>{"\n"}<Pressable onPress={download10} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const Biography = () => (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/autobiographyOfAYogi.jpg')} />
                    <Text style={styles.text}>Autobiography Of A Yogi {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Paramahansa Yogananda</Text>{"\n"}<Pressable onPress={download11} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theStoryOfMyLife.jpg')} />
                    <Text style={styles.text}>The Story Of My Life{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Helen Keller</Text>{"\n"}<Pressable onPress={download12} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/joanOfArc.jpg')} />
                    <Text style={styles.text}>Joan Of Arc{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Lord Gower Ronald Sutherland</Text>{"\n"}<Pressable onPress={download13} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/walden.jpg')} />
                    <Text style={styles.text}>Walden{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Henry David Thoreau</Text>{"\n"}<Pressable onPress={download14} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/tenDaysThatShookTheWorld.jpg')} />
                    <Text style={styles.text}>Ten Days That Shook The World{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: John Reed</Text>{"\n"}<Pressable onPress={download15} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theRightsOfMan.jpg')} />
                    <Text style={styles.text}>The Rights Of Man{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Thomas Paine</Text>{"\n"}<Pressable onPress={download16} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/afterAFewWords.jpg')} />
                    <Text style={styles.text}>After A Few Words{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Randall Garrett</Text>{"\n"}<Pressable onPress={download17} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/myLifeAndWork.jpg')} />
                    <Text style={styles.text}>My Life And Work{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Henry Ford</Text>{"\n"}<Pressable onPress={download18} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theAutobiographyOfBenjaminFranklin.jpg')} />
                    <Text style={styles.text}>The Autobiography Of Benjamin Franklin{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Benjamin Franklin</Text>{"\n"}<Pressable onPress={download19} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/abrahamLincoln.jpg')} />
                    <Text style={styles.text}>Abraham Lincoln{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Thomas Mears Eddy</Text>{"\n"}<Pressable onPress={download20} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const YoungAdults = () => (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/aLittlePrincess.jpg')} />
                    <Text style={styles.text}>A Little Princess{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Frances Hodgson Burnett</Text>{"\n"}<Pressable onPress={download21} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/aliceInWonderland.jpg')} />
                    <Text style={styles.text}>Alice In Wonderland{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Lewis Carroll</Text>{"\n"}<Pressable onPress={download22} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/aPairOfSchoolGirls.jpg')} />
                    <Text style={styles.text}>A Pair Of School Girls{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Angela Brazil</Text>{"\n"}<Pressable onPress={download23} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/olivertwist.jpg')} />
                    <Text style={styles.text}>Oliver Twist{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Charles Dickens</Text>{"\n"}<Pressable onPress={download24} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/beautyAndTheBeast.jpg')} />
                    <Text style={styles.text}>Beauty And The Beast{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Anonymous</Text>{"\n"}<Pressable onPress={download25} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/peterPan.jpg')} />
                    <Text style={styles.text}>Peter Pan{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: J. M. Barrie</Text>{"\n"}<Pressable onPress={download26} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/laughingLAST.jpg')} />
                    <Text style={styles.text}>Laughing Last{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Jane Abbott</Text>{"\n"}<Pressable onPress={download27} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/pinochio.jpg')} />
                    <Text style={styles.text}>Adventures Of Pinnochio{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: C. Collodi</Text>{"\n"}<Pressable onPress={download28} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/allTheWayToFairyLand.jpg')} />
                    <Text style={styles.text}>All The Way To Fairyland{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Evelyn Sharp</Text>{"\n"}<Pressable onPress={download29} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/abcsofscience.jpg')} />
                    <Text style={styles.text}>ABC'S Of Science{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Charles Oliver</Text>{"\n"}<Pressable onPress={download30} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const Romance = () => (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/prideAndPrejudice.jpg')} />
                    <Text style={styles.text}>Pride And Prejudice{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Jane Austen</Text>{"\n"}<Pressable onPress={download31} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/emma.jpg')} />
                    <Text style={styles.text}>Emma {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Jane Austen</Text>{"\n"}<Pressable onPress={download32} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/healingHerHeart.jpg')} />
                    <Text style={styles.text}>Healing Her Heart {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Laura Scott</Text>{"\n"}<Pressable onPress={download33} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theUnveiling.jpg')} />
                    <Text style={styles.text}>The Unveiling {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Tamara Leigh</Text>{"\n"}<Pressable onPress={download34} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/darkDesire.jpg')} />
                    <Text style={styles.text}>Dark Desire {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Summer Cooper</Text>{"\n"}<Pressable onPress={download35} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/dareDevils.jpg')} />
                    <Text style={styles.text}>Dare Devils {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: TK Eldridge</Text>{"\n"}<Pressable onPress={download36} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theMakingOfAMatchmaker.jpg')} />
                    <Text style={styles.text}>The Making Of A Matchmaker {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Tess Thompson</Text>{"\n"}<Pressable onPress={download37} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theDemonGirl.jpg')} />
                    <Text style={styles.text}>The Demon Girl {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Penelope Fletcher</Text>{"\n"}<Pressable onPress={download38} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theWomanInWhite.jpg')} />
                    <Text style={styles.text}>The Woman In White {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Wikkie Collins</Text>{"\n"}<Pressable onPress={download39} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/persuasion.jpg')} />
                    <Text style={styles.text}>Persuasion {"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Jane Austen</Text>{"\n"}<Pressable onPress={download40} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const Horror = () => (
        <ScrollView >
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/mostlyDark.jpeg')} />
                    <Text style={styles.text}>Mostly Dark{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Miranda Kate</Text>{"\n"}<Pressable onPress={download41} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/fostages game.jpeg')} />
                    <Text style={styles.text}>Fostage's Game{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: David C. Cassidy </Text>{"\n"}<Pressable onPress={download42} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/callisto2.0.png')} />
                    <Text style={styles.text}>Callisto 2.0{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Susan English </Text>{"\n"}<Pressable onPress={download43} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/devoured.jpg')} />
                    <Text style={styles.text}>Devoured{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Jason Brant</Text>{"\n"}<Pressable onPress={download44} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theCall.jpg')} />
                    <Text style={styles.text}>The Call of Cthulhu{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: H. P. Lovecraft</Text>{"\n"}<Pressable onPress={download45} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/atThe.jpg')} />
                    <Text style={styles.text}>At The Mountains Of Madness{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: H. P. Lovecraft </Text>{"\n"}<Pressable onPress={download46} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theBestGhostStories.jpg')} />
                    <Text style={styles.text}>The Best Ghost Stories{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: The Modern Library</Text>{"\n"}<Pressable onPress={download47} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/dracula.jpg')} />
                    <Text style={styles.text}>Dracula{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Bram Stoker</Text>{"\n"}<Pressable onPress={download48} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theInvisibleMna.jpg')} />
                    <Text style={styles.text}>The Invinsible Man{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: H. G. Wells</Text>{"\n"}<Pressable onPress={download49} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/clarimonde.jpg')} />
                    <Text style={styles.text}>Clarimonde{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Théophile Gautier</Text>{"\n"}<Pressable onPress={download50} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/yellow.jpg')} />
                    <Text style={styles.text}>The Yellow Wallpaper{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Charlotte Perkins Gilman</Text>{"\n"}<Pressable onPress={download501} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/dunwich.jpg')} />
                    <Text style={styles.text}>The Dunwich Horror{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author:
                        H. P. Lovecraft</Text>{"\n"}<Pressable onPress={download502} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const Humor = () => (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/the$30,000.jpg')} />
                    <Text style={styles.text}>The $30,000 Bequest{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Mark Twain</Text>{"\n"}<Pressable onPress={download51} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/adventures.jpg')} />
                    <Text style={styles.text}>Adventures of Huckleberry Finn{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Mark Twain</Text>{"\n"}<Pressable onPress={download52} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theree.jpg')} />
                    <Text style={styles.text}>Three Men In A Boat{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Jerome K. Jerome</Text>{"\n"}<Pressable onPress={download53} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/callIt.jpeg')} />
                    <Text style={styles.text}>Call It Chemistry{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: D.J. Van Oss</Text>{"\n"}<Pressable onPress={download54} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/troubleTriangle.jpg')} />
                    <Text style={styles.text}>Trouble Triangle{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Travis Casey</Text>{"\n"}<Pressable onPress={download55} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/fields.jpg')} />
                    <Text style={styles.text}>Fields' Guide to Abduction{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Julie Mulhern</Text>{"\n"}<Pressable onPress={download56} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/thepi.jpg')} />
                    <Text style={styles.text}>The Pickwick Papers{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Charles Dickens</Text>{"\n"}<Pressable onPress={download57} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/annie.jpg')} />
                    <Text style={styles.text}>Annie's 1st Break{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Willee Amsden</Text>{"\n"}<Pressable onPress={download58} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/aROOM.jpg')} />
                    <Text style={styles.text}>A Room With A View{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: E. M. Forster</Text>{"\n"}<Pressable onPress={download59} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/ANIDEAL.jpg')} />
                    <Text style={styles.text}>An Ideal Husband{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: JAn Ideal Husband</Text>{"\n"}<Pressable onPress={download60} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const Pyschology = () => (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/analysis.jpg')} />
                    <Text style={styles.text}>The Analysis Of Mind{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Bertrand Russell</Text>{"\n"}<Pressable onPress={download61} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/mind.jpg')} />
                    <Text style={styles.text}>How To Use Your Mind{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Harry Dexter Kitson</Text>{"\n"}<Pressable onPress={download62} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/tenDays.jpg')} />
                    <Text style={styles.text}>Ten Days In A Mad House{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Nellie Bly</Text>{"\n"}<Pressable onPress={download63} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/criminal.jpg')} />
                    <Text style={styles.text}>Criminal Pyschology{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Hans Gross</Text>{"\n"}<Pressable onPress={download64} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/dream.jpg')} />
                    <Text style={styles.text}>Dream Pyschology{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Sigmund Freud</Text>{"\n"}<Pressable onPress={download65} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/theCrowd.jpg')} />
                    <Text style={styles.text}>The Crowd{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author:
                        Gustave le Bon</Text>{"\n"}<Pressable onPress={download66} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/lossOfReason.jpg')} />
                    <Text style={styles.text}>Loss Of Reason{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Miles A. Maxwell</Text>{"\n"}<Pressable onPress={download67} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/leo.jpg')} />
                    <Text style={styles.text}>Leonardo Da Vinci{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Sigmund Freud</Text>{"\n"}<Pressable onPress={download68} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/foundations.jpg')} />
                    <Text style={styles.text}>The Foundations Of Personality{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Abraham Myerson</Text>{"\n"}<Pressable onPress={download69} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.image} source={require('../assets/achiev.jpg')} />
                    <Text style={styles.text}>The Achievements of Luther Trant{"\n"}{"\n"}<Text style={{ fontWeight: "normal" }}>Author: Edwin Balmer</Text>{"\n"}<Pressable onPress={download70} ><Text style={styles.download}>Download</Text></Pressable></Text>
                </View>
            </View>
        </ScrollView>
    )
    const incoming = useRoute();
    const display = incoming.params?.cat
    return (
        <tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 10, color: "black" },
                tabBarStyle: { backgroundColor: 'beige' },
            }}
            initialRouteName={display}
        >
            <tab.Screen
                name="Mystery"
                component={Mystery}
            />
            <tab.Screen
                name="Biography"
                component={Biography}
            />
            <tab.Screen
                name="Kids"
                component={YoungAdults}
            />
            <tab.Screen
                name="Romance"
                component={Romance}
            />
            <tab.Screen
                name="Horror"
                component={Horror}
            />
            <tab.Screen
                name="Humor"
                component={Humor}
            />
            <tab.Screen
                name="Pyschology"
                component={Pyschology}

            />
        </tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 10,
        alignItems: 'right',
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
        paddingTop: 30,
    },
    image: {
        width: 100,
        height: 140,
        margin: 15,
    },
    download: {
        borderRadius: 10,
        padding: 5,
        backgroundColor: "black",
        color: "white",
        marginTop: 20,
    }
})