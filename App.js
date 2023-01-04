import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import RequestProcessor from './RequestProcessor.js';
import ColorWheelElement from './components/ColorWheelElement.js';
import PowerButton from './components/PowerButton.js';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState({"name": "all"});
    const [serverInfo, setServerInfo] = useState({'server': {'version': 'error'}});

    useEffect(() => {
        RequestProcessor.getDevices().then((devices) => {
            setDevices(devices);
            setIsLoading(false);
        });
        RequestProcessor.getServerInfo().then((info) => {
            console.log(info);
            setServerInfo(info);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={textStyle.title}>ELK-BLEDOM-RECODE</Text>
                <Text style={textStyle.subtitle}>by Amenofisch</Text>
                <Text style={textStyle.subtitle}>Server Name: {serverInfo.server.name}</Text>
                <Text style={textStyle.subtitle}>Server Version: {serverInfo.server.version}</Text> 
            </View>

            <View style={styles.content}>
                {isLoading ? <ActivityIndicator size='large' color='#fff' /> : selectedDevice == null ? <Text style={textStyle.text}>Select a device</Text> : <Text style={textStyle.text}>{selectedDevice.name}</Text>}
                <PowerButton device={selectedDevice} value={true} />
                <PowerButton device={selectedDevice} value={false} />
                <ColorWheelElement device={selectedDevice} />
            </View>

            <View style={styles.footer}>
                <View style={styles.devicesContainer}>
                    <Button title="All Devices" onPress={() => setSelectedDevice({"name": "all"})} />
                    {devices.map((device) =>{
                        return <Button key={device.id} title={device.name} onPress={() => setSelectedDevice(device)} />
                    })}
                </View>
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#7f8c8d',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    header: {
        backgroundColor: '#2c3e50',
        borderRadius: 10,
        padding: 20,
        margin: 5,
    },
    footer: {
        backgroundColor: '#2c3e50',
        borderRadius: 10,
        padding: 20,
        margin: 5,
        minHeight: 150,
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2c3e50',
        borderRadius: 15,
        margin: 5,
    },
    devicesContainer: {

    },
});

const textStyle = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});