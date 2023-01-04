import { useState } from 'react';
import { Button } from 'react-native';
import config from '../config.js';
import RequestProcessor from '../RequestProcessor.js';
import { ColorPicker } from 'react-native-color-picker';

const ColorWheelElement = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [color, setColor] = useState('');

    const proccessReq = (color, device) => {
        console.log(color + " " + device.name)
        setIsLoading(true);
        device.name == "all" ? RequestProcessor.setColorForAllDevices(color) : RequestProcessor.setColorForDevice(device.id, color);
    }

    return (
        <>
            <ColorPicker onColorSelected={(color) => proccessReq(color, props.device)} style={{ flex: 1 }} hideSliders={true} />
        </>
    )
}

export default ColorWheelElement;