import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn"
import { darkGreen } from "./Constant";



const Signup = (props) => {
    return (
        <Background>
            <View style={styles.innerContainer}>
                <Text style={styles.Container}>Register</Text>
                <Text style={styles.aContainer}>Create an account</Text>
            </View>
            <View style={styles.AContainer}>
               
                <Field placeholder="Firstname" />
                <Field placeholder="Lastname" />
                <Field placeholder="Email/Username" keyboardType={"email-address"} />
                <Field placeholder="Contact number"/>
                <Field placeholder="Password" secureTextEntry={true} />
                <Field placeholder="Confirm Password" secureTextEntry={true} />
              
                <View >
                    <Text style={styles.DContainer}>By signing in ,you-agree to our ?</Text>
                    <Text style={styles.IContainer}>Terms & Conditions</Text>
                </View>
                <View style={styles.EContainer}>
                    <Btn bgColor={darkGreen} textColor='white' btnLabel="Signup" Press={() => alert("Account created")} />
                </View>
                <View style={styles.HContainer}>
                    <Text style={styles.FContainer}>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <Text style={styles.GContainer}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    )
}
const styles = StyleSheet.create({
    Container: {
        color: "#fff",
        fontSize: 64,
        fontWeight: "bold",
    },
    innerContainer: {
        alignItems: 'center',
        width: 370,
    },
    aContainer: {
        color: "#fff",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 20
    },
   
    AContainer: {
        backgroundColor: '#fff',
        height: 700,
        width: 400,
        borderTopLeftRadius: 130,
        padding:20
    },
    BContainer: {
        color: "#000000",
        paddingTop: 100,
        textAlign: "center",
        fontSize: 40,
        color: "#006A42",
        fontWeight: "bold",
        marginRight: 5,
    },
    CContainer: {
        color: "#8395a7",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20
    },
    DContainer: {
        color: "#000000",
        paddingLeft:40
    },
    EContainer: {
        marginLeft: 20,
        marginRight:20,
       
       },
    FContainer: {
        color: "#000000",
        fontSize: 20
    },
    GContainer: {
        color: "#006A42",
        fontSize: 18,
        fontWeight: "bold",
       
    },
    HContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    
    },
    IContainer: {
        color: "#006A42",
        fontSize: 16, 
        paddingLeft:40   
    },
})

export default Signup;