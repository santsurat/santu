import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors } from "react-native/Libraries/NewAppScreen";


const DateTimePickerScreen = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selecedDate, setSelectedDate] = useState('Select Date');
    const [selectedTime ,setSelectedTime] =useState ('Select Time');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split("T");
        const x1 = x[0].split("-");
        console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
        setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toLocaleTimeString();
        setSelectedTime(x);
        console.log(x);
        hideTimePicker();
    };
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.innerContainer} onPress={() => { showDatePicker() }}>
                <Text style={styles.DateContainer}>{selecedDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerContainer} onPress={() => { showTimePicker() }}>
                <Text style={styles.DateContainer}>{selectedTime}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",

    },
    innerContainer: {
        width: "75%",
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c8d6e5",
        margin: 10,
        fontWeight: 'bold',
    },
    DateContainer: {
        color: '#006A42',
        fontWeight: 'bold'
    }
})

export default DateTimePickerScreen;