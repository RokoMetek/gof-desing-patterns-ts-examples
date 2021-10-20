

interface IComputer {
    cpu: string,
    gpu: string,
    hdd: string,
}

export class ComputerBUilder {
    private readonly _computer: IComputer
    constructor() {
        this._computer = {
            cpu: null,
            gpu: null,
            hdd: null
        }
    }

    cpu(cpu: string): ComputerBUilder {
        this._computer.cpu = cpu;
        return this;
    }

    gpu(gpu: string): ComputerBUilder {
        this._computer.gpu = gpu;
        return this;
    }

    hdd(hdd: string): ComputerBUilder {
        this._computer.hdd = hdd;
        return this;
    }

    build(): IComputer {
        return this._computer
    }
}

(function main() {
    const CustomComputer: IComputer = new ComputerBUilder()
        .cpu("Intel i9k")
        .gpu("GTX 1070Ti")
        .hdd("Samsung EVO970 1TB")
        .build();
})()