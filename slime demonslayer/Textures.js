class Textures {
    constructor() {
        this.player = [];
        
        (() => {
            let image = new Image(64, 64);
            image.src = './textures/slime.png';
            this.player.push(image);    
        })();

        (() => {
            let image = new Image(64, 56);
            image.src = './textures/slime-stabbing.png';
            this.player.push(image);
        })();

        
        this.weapon = [];

        (() => {
            let image = new Image(64, 8);
            image.src = './textures/weapon/weapon-left.png';
            this.weapon.push(image);
        })();

        (() => {
            let image = new Image(64, 8);
            image.src = './textures/weapon/weapon-right.png';
            this.weapon.push(image);
        })();


        this.demon = [];

        (() => {
            let image = new Image(64, 64);
            image.src = './textures/demon.png';
            this.demon.push(image);
        })();
    }
}