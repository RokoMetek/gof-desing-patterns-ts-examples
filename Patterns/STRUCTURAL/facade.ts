

class CDPlayer {
    on() {
        console.log("Turn on CDPlayer");
    }
    off() {
        console.log("Turn off CDPlayer");
    }
    play() {
        console.log("Play CDPlayer disc...")
    }
}

class TVPlayer {
    on() {
        console.log("Turn on TVPlayer");
    }
    off() {
        console.log("Turn off TVPlayer");
    }
    play() {
        console.log("Play TVPlayer...")
    }

    setProgram(program: number) {
        console.log("Setting to program " + program)
    }

    setVolumen(volumen: number) {
        console.log("Setting volumen to " + volumen);
    }
}

class Lights {
    on() {
        console.log("Turn on Lights");
    }
    off() {
        console.log("Turn off Lights");
    }
    dimm() {
        console.log("Dimm Lights");
    }
}



class ChillHomeFacade {
    private cdPlayer: CDPlayer;
    private tvPlayer: TVPlayer;
    private lights: Lights;


    constructor(cdPlayer: CDPlayer, tvPlayer: TVPlayer, lights: Lights) {
        this.cdPlayer = cdPlayer;
        this.tvPlayer = tvPlayer;
        this.lights = lights;
    }

    public watchTV(program: number, volumen: number) {
        this.cdPlayer.off();
        this.lights.dimm();
        
        this.tvPlayer.on();
        this.tvPlayer.setProgram(program);
        this.tvPlayer.setVolumen(volumen);
    }

    public listenMusic() {
        this.cdPlayer.on();
        this.cdPlayer.play();

        this.tvPlayer.setVolumen(0);
        this.lights.off();
    }
}



(function main() {

    let cdPlayer: CDPlayer = new CDPlayer();
    let tvPlayer: TVPlayer = new TVPlayer();
    let lights: Lights = new Lights();

    let chillHome: ChillHomeFacade = new ChillHomeFacade(cdPlayer, tvPlayer, lights);
    chillHome.watchTV(2, 20);


})()