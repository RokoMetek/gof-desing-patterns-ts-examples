interface Device {
    isEnabled();
    enable();
    disable();
    getVolume();
    setVolume(volume: number);
    getChannel();
    setChannel(channel: number);
    printStatus();
}

class TV implements Device {
    private enabled: Boolean = false;
    private volume: number = 20;
    private channel = 1;

    isEnabled() {
        return this.enabled
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(volume: number) {
        this.volume = volume;
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel: number) {
        this.channel = channel;
    }
    printStatus() {
        console.log("Enabled TV: ", this.enabled);
        console.log("Volumen TV: ", this.volume);
        console.log("Channel TV: ", this.channel);
    }
}


class Radio implements Device {
    private enabled: Boolean = false;
    private volume: number = 50;
    private channel = 22;

    isEnabled() {
        return this.enabled
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(volume: number) {
        this.volume = volume;
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel: number) {
        this.channel = channel;
    }
    printStatus() {
        console.log("Enabled Radio: ", this.enabled);
        console.log("Volumen Radio: ", this.volume);
        console.log("Channel Radio: ", this.channel);
    }

}


interface Remote {
    power();
    volumeUp();
    volumeDown();
    channelUp();
    channelDown();
}


class BasicRemote implements Remote {

    protected device: Device;
    constructor(device: Device) {
        this.device = device;
    }

    power() {
        console.log("Remote: Power toggle")
        if(this.device.enable) {
            this.device.disable;
        } else {
            this.device.enable;
        }
    }
    volumeUp() {
        console.log("Remote: Volume up")
        this.device.setVolume(this.device.getVolume() + 1);
    }
    volumeDown() {
        console.log("Remote: Volume down")
        this.device.setVolume(this.device.getVolume() - 1);
    }
    channelUp() {
        console.log("Remote: Channel up")
        this.device.setVolume(this.device.getChannel() + 1);
    }
    channelDown() {
        console.log("Remote: Channel down")
        this.device.setVolume(this.device.getChannel() - 1);
    }


}

class AdvancedRemote extends BasicRemote {
    constructor(device: Device) {
        super(device);
    }
    mute() {
        console.log("Remote: Mute");
        this.device.setVolume(0);
    }
}



function testDevice(device: Device) {
    console.log("Basic Remote Test: ")
    let br: BasicRemote = new BasicRemote(device);
    br.power();
    device.printStatus();


    console.log("Advanced Remote Test: ")
    let ar: AdvancedRemote = new AdvancedRemote(device);
    ar.power();
    ar.mute();
    device.printStatus();
}


(function main() {

    testDevice(new TV());
    testDevice(new Radio());

})()