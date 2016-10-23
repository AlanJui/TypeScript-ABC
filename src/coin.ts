export abstract class Coin {
    private value: number;
    // 使用 protected 亦可
    // protected value: number;

    constructor(value: number) {
        this.value = value;
    }

    get Value() {
        return this.value;
    }

    abstract getImageUrl(): string;
}

export class Dime extends Coin {
    
    constructor() {
        super(.1);
    }

    getImageUrl(): string {
        return 'img/Dime.png';
    }
}

export class Quarter extends Coin {

    constructor() {
        super(.25);
    }

    getImageUrl (): string {
        return 'img/Quarter.png';
    }
}

export class Half extends Coin {

    constructor() {
        super(.5);
    }

    getImageUrl(): string {
        return 'img/Half.png';
    }
}

export class Dollar extends Coin {

    constructor() {
        super(1);
    }

    getImageUrl(): string {
        return 'img/Dollar.jpg';
    }

}
