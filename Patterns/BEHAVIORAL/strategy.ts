
interface CompressionStrategy {
    compressFile(file: string): void;
}

class RarCompressionStrategy implements CompressionStrategy {
    compressFile(file: string): void {
        console.log(`Compressing ${file} to RAR`);
    }
}


class ZipCompressionStrategy implements CompressionStrategy {
    compressFile(file: string): void {
        console.log(`Compressing ${file} to ZIP`);
    }
}


class CompressionContext {
    private strategy: CompressionStrategy;

    public setCompressionStrategy(strategy: CompressionStrategy) {
        this.strategy = strategy;
    }

    public createArchive(file: string) {
        this.strategy.compressFile(file);
    }

    public createArchiveWithStrategy(file: string, strategy: CompressionStrategy) {
        strategy.compressFile(file);
    }
}



(function main() {
    const context = new CompressionContext();
    context.setCompressionStrategy(new RarCompressionStrategy());
    context.createArchive('file.txt');

    context.createArchiveWithStrategy('file.txt', new RarCompressionStrategy());
    context.createArchiveWithStrategy('file.txt', new ZipCompressionStrategy());

})();