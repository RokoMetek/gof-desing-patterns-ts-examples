abstract class CrossCompiler {
    compile(): void {
        this.collectSources();
        this.reserveRam();
        this.compileToTarget();
        this.afterCompileHook();
        this.compilationStatusNotification();
    }

    protected abstract collectSources(): void;

    protected reserveRam(): void {
        console.log("reserveRam Default");
    }

    protected abstract compileToTarget(): void;

    public afterCompileHook(): void {
        console.log("afterCompileHook Nothing by Default");
    }
    private compilationStatusNotification(): void {
        console.log("compilationStatusNotification");
    }


}


class AndroidCompiler extends CrossCompiler {
    protected compileToTarget(): void {
        console.log("compileToTarget Android");
    }
    protected collectSources(): void {
        console.log("collectSources Android");
    }
}

class IPhoneCompiler extends CrossCompiler {
    protected compileToTarget(): void {
        console.log("compileToTarget IPhone");
    }
    protected collectSources(): void {
        console.log("collectSources IPhone");
    }

    protected reserveRam() {
        console.log("reserveRam IPhone");
    }
}


(function main() {

    let androidCompiler = new AndroidCompiler();
    androidCompiler.compile();

    let iPhoneCompiler = new IPhoneCompiler();
    iPhoneCompiler.compile();


})();

