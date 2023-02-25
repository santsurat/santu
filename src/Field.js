import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { darkGreen } from "./Constant";

const Field = (props) => {
    return (
        <TextInput {...props} style={styles.Container} placeholderTextColor={darkGreen} >

        </TextInput>
    )
}
const styles = StyleSheet.create({
    Container: {
        borderRadius: 100,
        color: "#006A42",
        paddingHorizontal: 10,
        width: "75%",
        backgroundColor:"#c8d6e5",
        marginLeft:40,
        marginVertical:10
    }
})

export default Field;