interface IWeapon {
    useWeapon(): string
}

class Sword implements IWeapon {
    useWeapon(): string {
        return "This is excalibur!!!"
    }
}

class MagicWand implements IWeapon {
    useWeapon(): string {
        return "This is Magic Wand and you Shall Not Pass!!!"
    }
}

class Shield implements IWeapon {
    useWeapon(): string {
        return "This is shidld and you can't do nothing to me"
    }
}


interface IArmor {
    useArmor(): string
    useArmorWithWeapon(collap: IWeapon): string
}

class ElfArmor implements IArmor {
    useArmor(): string {
        return "This is ELF Armor and you gain magic powers"
    }
    useArmorWithWeapon(collap: IWeapon): string {
        const res = collap.useWeapon();
        return `This is result of ElfArmor collabing with ${res}`
    }
}

class DwarfArmor implements IArmor {
    useArmor(): string {
        return "This is DWARF Armor and you gain extra strength"
    }
    useArmorWithWeapon(collap: IWeapon): string {
        const res = collap.useWeapon();
        return `This is result of DWARF collabing with ${res}`
    }
}

interface IAbstractFactory {
    createWeapon(): IWeapon
    createArmor(): IArmor
}


class WizzardFactory implements IAbstractFactory {
    createWeapon(): IWeapon {
        return new MagicWand();
    }
    createArmor(): IArmor {
        return new ElfArmor();
    }
}

class WarriorFacotry implements IAbstractFactory {
    createWeapon(): IWeapon {
        return new Sword();
    }
    createArmor(): IArmor {
        return new DwarfArmor();
    }
}

(function main() {
    let factory: IAbstractFactory;
    const sword = factory.createWeapon();
    const armor = factory.createArmor();

    console.log(sword.useWeapon())
    console.log(armor.useArmorWithWeapon(sword))

    const warrior = new WarriorFacotry();
    console.log(warrior.createArmor().useArmorWithWeapon(sword))

})();