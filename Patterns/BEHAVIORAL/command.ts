interface Command {
    execute(): void
}


class RemoteController {
    private command: Command


    setCommand(command: Command) {
        this.command = command
    }

    public pressButton() {
        this.command.execute()
    }

}


class LightOnCommand implements Command {
    private light: Light;
    
    constructor(light: Light) {
        this.light = light;
    }
    
    execute(): void {
        this.light.switchOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.switchOff();
    }
}


class Light {
    private isOn: boolean;
    public switchOn() {
        this.isOn = true;
    }
    public switchOff() {
        this.isOn = false;
    }
}


(function main() {
    
    let remote = new RemoteController()
    let light = new Light();

    let lightOn = new LightOnCommand(light);
    let lightOf = new LightOffCommand(light);

    remote.setCommand(lightOn);
    remote.pressButton();

    remote.setCommand(lightOf);
    remote.pressButton();

})();