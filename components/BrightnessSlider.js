import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { View, Text } from 'react-native';
import RequestProcessor from '../RequestProcessor.js';

const BrightnessSlider = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const proccessReq = (value, device) => {
        setIsLoading(true);
        device.name == 'All' ? RequestProcessor.setBrightnessForAllDevices(value) : RequestProcessor.setBrightnessForDevice(device.id, value); // TODO: Find a better way for this
        setIsLoading(false);
    }

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white' }}>Brightness</Text>
                <Text style={{ color: 'white' }}>{props.value}</Text>
            </View>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onSlidingComplete={(value) => proccessReq(Math.round(value), props.device)}
            />
        </>
    )
}

export default BrightnessSlider;