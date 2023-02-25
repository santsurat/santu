import React from "react";
import {Text ,  TouchableOpacity}from "react-native";

export default function Btn ({btnLabel , Press , bgColor ,textColor}) {
    return(
        <TouchableOpacity 
        onPress={Press}
        style={{backgroundColor:"#fff",
        borderRadius:100,
        alignItems:"center",
        width:300,
        paddingVertical:5,
        marginVertical:10,
        backgroundColor:bgColor}}>
            <Text style={{color:textColor,fontSize:24,fontWeight:"bold", }}>{btnLabel}</Text>
        </TouchableOpacity>
    )

}

