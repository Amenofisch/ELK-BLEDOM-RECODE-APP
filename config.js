module.exports = class Config {
    // Base URL of the API
    static baseUrl = "https://pi.amenofisch.dev";

    // Main Endpoint for changing stuff
    static ledEndpoint = "/led";

    // Config endpoints
    static configEndpoint = "/config";

    // All led endpoints
    static colorEndpoint = this.ledEndpoint + "/color";
    static brightnessEndpoint = this.ledEndpoint + "/brightness";
    static powerEndpoint = this.ledEndpoint + "/power";
    
    static fullColorEndpoint = this.baseUrl + this.colorEndpoint;
    static fullBrightnessEndpoint = this.baseUrl + this.brightnessEndpoint;
    static fullPowerEndpoint = this.baseUrl + this.powerEndpoint;

    // All config endpoints
    static fullDevicesEndpoint = this.baseUrl + this.configEndpoint + "/devices";

}