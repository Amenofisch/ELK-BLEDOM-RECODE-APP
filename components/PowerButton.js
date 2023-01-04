import RequestProcessor from '../RequestProcessor';
import { Button, StyleSheet } from 'react-native';
import config from '../config';
import React, { useState, useEffect } from 'react';

const PowerButton = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const proccessReq = (value, device) => {
        setIsLoading(true);
        device.name == "all" ? RequestProcessor.setPowerForAllDevices(value) : RequestProcessor.setPowerForDevice(device.id, value);
        setIsLoading(false);
    }

    return (
        <>
            <Button title={props.value.toString()} color={props.value ? "#2ecc71" : "#e74c3c"} onPress={() => proccessReq(props.value, props.device)} />
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 20,
        margin: 5,
    },
});

export default PowerButton;