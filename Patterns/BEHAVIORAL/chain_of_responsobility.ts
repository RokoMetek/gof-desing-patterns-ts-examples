interface DisposableChain {
    setNextLink(nextChain: DisposableChain);
    dispense(currency: Currency);
}


class Currency {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    getAmount() {
        return this.amount;
    }
}

class Dollar50Dispencer implements DisposableChain {
    private nextChain: DisposableChain;

    setNextLink(nextChain: DisposableChain) {
        this.nextChain = nextChain;
    }
    dispense(currency: Currency) {
        if (currency.getAmount() >= 50) {
            console.log("Dispensing 50");
            return currency.getAmount() - 50;
        }
        return this.nextChain.dispense(currency);
    }
}

class Dollar20Dispencer implements DisposableChain {
    private nextChain: DisposableChain;

    setNextLink(nextChain: DisposableChain) {
        this.nextChain = nextChain;
    }
    dispense(currency: Currency) {
        if (currency.getAmount() >= 20) {
            console.log("Dispensing 20");
            return currency.getAmount() - 20;
        }
        return this.nextChain.dispense(currency);
    }
}

class Dollar10Dispencer implements DisposableChain {
    private nextChain: DisposableChain;

    setNextLink(nextChain: DisposableChain) {
        this.nextChain = nextChain;
    }
    dispense(currency: Currency) {
        if (currency.getAmount() >= 10) {
            console.log("Dispensing 10");
            return currency.getAmount() - 10;
        }
        return this.nextChain.dispense(currency);
    }
}

//CLIENT
(function main() {
    const currency = new Currency(100);
    const dollar50Dispencer = new Dollar50Dispencer();
    const dollar20Dispencer = new Dollar20Dispencer();
    const dollar10Dispencer = new Dollar10Dispencer();

    dollar50Dispencer.setNextLink(dollar20Dispencer);
    dollar20Dispencer.setNextLink(dollar10Dispencer);

    const amount = dollar50Dispencer.dispense(currency);
    console.log(amount);
})();