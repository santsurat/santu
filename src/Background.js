import React from "react";
import {View ,  ImageBackground , StyleSheet } from "react-native";

const Background  = ({children}) => {
    return(
       <View>
        <ImageBackground source={require("./assets/nature1.jpg")} style={styles.container} />
        <View style={styles.innerContainer}>
            {children}
        </View>
       </View>
    )
}
const styles = StyleSheet.create({
container:{
    height:'100%',
},
innerContainer:{
    position:"absolute",
},
})
export default Background;