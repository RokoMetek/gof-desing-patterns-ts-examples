
interface NormalPhone {
    useNormalCharge(): void;
}

interface SuperPhone {
    useSuperCharge() : void;
}



class Phone1 implements SuperPhone {
    useSuperCharge() {
        console.log("Use super charge.....");
    }
}

class Phone2 implements NormalPhone {
    useNormalCharge() {
        console.log("Use Normal charger....");
    }
}


class NormalToSuperAdapter implements SuperPhone {


    normalPhone: NormalPhone;
    constructor(normalPhone: NormalPhone) {
        this.normalPhone = normalPhone;
    }

    useSuperCharge(): void {
        console.log("Want to use super charger with normal charger...");
        this.normalPhone.useNormalCharge();
    }
}


(function main() {

    let nPhone = new Phone2();
    let chargeAdapter = new NormalToSuperAdapter(nPhone);
    chargeAdapter.useSuperCharge();

})()