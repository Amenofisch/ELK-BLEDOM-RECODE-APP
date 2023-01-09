import { useState } from 'react';
import RequestProcessor from '../RequestProcessor.js';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';

const ColorButton = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const proccessReq = (color, device) => {
        setIsLoading(true);
        device.name == 'All' ? RequestProcessor.setColorForAllDevices(color) : RequestProcessor.setColorForDevice(device.id, color);
        setIsLoading(false);
    }

    return (
        <>
            <TouchableOpacity style={[styles.button, {backgroundColor: props.color}]} onPress={() => proccessReq(props.color, props.device)}>{props.title}</TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        width: 30,
        height: 30,
    }
})

export default ColorButton;

