interface IArchiver {
    archive(): void
    clone(): any;
}

class ArchiverZip implements IArchiver {
    constructor(private identity: string) {}
    archive(): void {
        console.log("Archive This Archiver with ziš")
    }
    clone(): ArchiverZip {
        console.log("Clone Archiver");
        return Object.assign({}, this);
    }
}

class ArchiverRar implements IArchiver {
    constructor(private identity: string) {}
    archive(): void {
        console.log("Archive This Archiver with Rar")
    }
    clone(): ArchiverRar {
        console.log("Clone Archiver");
        return Object.assign({}, this);
    }
}

abstract class ArchiverFactory {
    abstract createArchiver(brand): IArchiver;
}

class MyArchiverFactor extends ArchiverFactory {
    private archivers: { [archiver: string]: IArchiver; } = {}
    constructor() {
        super()
        this.archivers['Zip'] = new ArchiverZip("zip");
        this.archivers['Rar'] = new ArchiverRar("rar");
    }
    createArchiver(brand: any): IArchiver {
        return this.archivers[brand].clone();
    }
}

(function main() {
    const factory = new MyArchiverFactor();
    let zip = factory.createArchiver('Zip');
    let rar =factory.createArchiver('Rar');
})()