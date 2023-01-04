import RequestProcessor from '../RequestProcessor';
import { Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const PowerButton = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const proccessReq = (value, device) => {
        setIsLoading(true);
        device.name == 'All' ? RequestProcessor.setPowerForAllDevices(value) : RequestProcessor.setPowerForDevice(device.id, value);
        setIsLoading(false);
    }

    return (
        <>
            <Button style={styles.button} title={props.value ? 'ON' : 'OFF'} color={props.value ? "#2ecc71" : "#e74c3c"} onPress={() => proccessReq(props.value, props.device)} />
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