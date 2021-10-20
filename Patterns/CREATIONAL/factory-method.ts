interface IEnemy {
    doAttack(): void
}

interface IEnemyFactory {
    createEnemy(name): IEnemy;
}

class EnemyA implements IEnemy {
    doAttack(): void {
        console.log("Enemy A attack with force 40")
    }
}

class EnemyB implements IEnemy {
    doAttack(): void {
        console.log("EnemyB attack with force 60")
    }
}

class EnemyC implements IEnemy {
    doAttack(): void {
        console.log("EnemyC attack with force 100")
    }
}

class EnemyFactory implements IEnemyFactory {
    createEnemy(name: any): IEnemy {
        switch(name){
            case 'EnemyA':
                return new EnemyA();
            case 'EnemyB':
                return new EnemyB();
            case 'EnemyC':
                return new EnemyC();
            default:
                return null;
        }
    }
}

(function main() {
    const factory = new EnemyFactory();
    const enemyA = factory.createEnemy('EnemyA');
    const enemyB = factory.createEnemy('EnemyB');
    enemyA.doAttack();
    enemyB.doAttack();
})()