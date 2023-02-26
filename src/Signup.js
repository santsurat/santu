import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView , TextInput} from "react-native";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn"
import { darkGreen } from "./Constant";
import DateTimePickerScreen from "./DateTimePickerScreen";




const Signup = (props) => {
    return (

        <Background>
 
            <View style={styles.innerContainer}>
                <Text style={styles.Container}>Register</Text>
                <Text style={styles.aContainer}>Create an account</Text>
            </View>
            <ScrollView style={styles.AContainer}>
           
                    <TextInput style={styles.BContainer} placeholder="Firstname" />
                    <TextInput  style={styles.BContainer}placeholder="Lastname" />
                    <TextInput  style={styles.BContainer}placeholder="Email/Username" keyboardType={"email-address"} />
                    <TextInput  style={styles.BContainer}placeholder="Contact number" />
                    <TextInput  style={styles.BContainer}placeholder="Password" secureTextEntry={true} />
                    
                    <DateTimePickerScreen />
                    
                    <Text style={styles.DContainer}>By signing in ,you-agree to our ?</Text>
                    <Text style={styles.IContainer}>Terms & Conditions</Text>
                    <View style={styles.EContainer}>
                        <Btn bgColor={darkGreen} textColor='white' btnLabel="Signup" Press={() => alert("Account created")} />
                    </View>
                   
                    <View style={styles.HContainer}>
                        <Text style={styles.FContainer}>Already have an account ?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles.GContainer}>Login</Text>
                        </TouchableOpacity>
                        </View>
                        </ScrollView>
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
        height: 800,
        width: 400,
        borderTopLeftRadius: 120,
       padding:10
    },
    BContainer:{
      backgroundColor:"#c8d6e5",
      borderRadius:20,
      margin:5,
      width:300,
      marginHorizontal:40
    },
    DContainer: {
        color: "#000000",
        marginHorizontal:40
    },
    EContainer: {
        marginLeft: 41,
        marginRight: 30,

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
        paddingLeft: 40
    },
})

export default Signup;