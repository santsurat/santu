import React from "react";
import { View, Text, StyleSheet,  TouchableOpacity } from "react-native";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn"
 import { darkGreen } from "./Constant";



const Login = (props) => {
    return (
        <Background>
            <View style={styles.innerContainer}>
                <Text style={styles.Container}>Login</Text>
            </View>
            <View style={styles.AContainer}>
                <Text style={styles.BContainer}>Welcome Back</Text>
                <Text style={styles.CContainer}>Login to your account</Text>
                <Field placeholder="Email/Username" keyboardType={"email-address"} />
                <Field placeholder="Password" secureTextEntry={true} />
                <View>
                    <Text style={styles.DContainer}>Forgot Password ?</Text>
                </View>
                <View style={styles.EContainer}>
               <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" Press={() =>alert("Logged In")}/>
              </View>
              <View style={styles.HContainer}>
                <Text style={styles.FContainer}>Don't have an account ?</Text>
                <TouchableOpacity onPress={() =>props.navigation.navigate("Signup")}>
                    <Text style={styles.GContainer}>Signup</Text>
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
        marginVertical: 10
    },
    AContainer: {
        backgroundColor: '#fff',
        height: 700,
        width: 400,
        borderTopLeftRadius: 130,
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
        marginTop: 10,
        fontWeight: "bold",
        paddingLeft: 205,

    },
    EContainer:{
        marginLeft:40, 
        marginRight:40
    },
    FContainer:{
        color:"#000000",
        fontSize:20
    },
    GContainer:{
        color:"#006A42",
        fontSize:18,
        fontWeight:"bold",
    },
    HContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
})

export default Login;