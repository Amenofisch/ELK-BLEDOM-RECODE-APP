import config from "./config.js";

module.exports = class RequestProcessor {
    static async sendRequest(url, method, body) {
        return await fetch(url, {
            method: method,
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    static async sendGetRequest(url) {
        return await this.sendRequest(url, "GET");
    }

    static async sendPostRequest(url, body) {
        return await this.sendRequest(url, "POST", body);
    }

    static async setColorForAllDevices(color) {
        let response = await this.sendPostRequest(config.fullColorEndpoint + "/all", {
            value: color.toString()
        });

        return response;
    }

    static async setBrightnessForAllDevices(brightness) {
        let response = await this.sendPostRequest(config.fullBrightnessEndpoint + "/all", {
            value: brightness
        });

        return response;
    }

    static async setPowerForAllDevices(power) {
        let response = await this.sendPostRequest(config.fullPowerEndpoint + "/all", {
            value: power
        });

        return response;
    }

    static async setColorForArrayOfDevices(devices, color) {
        let response = await this.sendPostRequest(config.fullColorEndpoint, {
            value: color,
            devices: devices
        });

        return response;
    }

    static async setBrightnessForArrayOfDevices(devices, brightness) {
        let response = await this.sendPostRequest(config.fullBrightnessEndpoint, {
            value: brightness,
            devices: devices
        });

        return response;
    }

    static async setPowerForArrayOfDevices(devices, power) {
        let response = await this.sendPostRequest(config.fullPowerEndpoint, {
            value: power,
            devices: devices
        });

        return response;
    }

    static async setColorForDevice(device, color) {
        return await this.setColorForArrayOfDevices([device], color);
    }

    static async setBrightnessForDevice(device, brightness) {
        return await this.setBrightnessForArrayOfDevices([device], brightness);
    }

    static async setPowerForDevice(device, power) {
        return await this.setPowerForArrayOfDevices([device], power);
    }

    static async getDevices() {
        let response = await this.sendGetRequest(config.fullDevicesEndpoint);
        let json = await response.json();

        return json;
    }

    static async getDevice(id) {
        let devices = await this.getDevices();
        let device = devices.find(device => device.id == id);

        return device;
    }

    static async getDeviceByName(name) {
        let devices = await this.getDevices();
        let device = devices.find(device => device.name == name);

        return device;
    }
    
    static async getServerInfo() {
        let response = await this.sendGetRequest(config.baseUrl + "/config");
        return response.json();
    }
}