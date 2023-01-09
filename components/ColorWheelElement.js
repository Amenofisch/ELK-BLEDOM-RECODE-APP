import { useState } from 'react';
import RequestProcessor from '../RequestProcessor.js';
import { ColorPicker } from 'react-native-color-picker';

const ColorWheelElement = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const proccessReq = (color, device) => {
        setIsLoading(true);
        device.name == 'All' ? RequestProcessor.setColorForAllDevices(color) : RequestProcessor.setColorForDevice(device.id, color);
        setIsLoading(false);
    }

    return (
        <>
            <ColorPicker onColorSelected={(color) => proccessReq(color, props.device)} style={{ flex: 1 }} hideSliders={true} />
        </>
    )
}

export default ColorWheelElement;