import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen } from "./Constant";

const Home = (props) => {
    return (
        <Background>
            <View style={styles.innerContainer}>
                <Text style={styles.Container}>Let's start</Text>
                <Text style={styles.AContainer}>Coding</Text>
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" Press={() =>props.navigation.navigate("Login") }/>
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Signup" Press={() =>props.navigation.navigate("Signup") }/>
            </View>
        </Background>
    )
}
const styles = StyleSheet.create({
    Container: {
        color: '#fff',
        fontSize: 64,
    },
    AContainer: {
        color: '#fff',
        fontSize: 64,
        marginBottom:40
    },
    innerContainer: {
        marginHorizontal: 30,
        marginVertical: 100,
    }
})

export default Home;