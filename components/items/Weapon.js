class Weapon extends Item {
    constructor(keyframes,x,y,w,h,user) {
        super(keyframes,x,y,w,h,user);

        this.useTime = 15;
        this.cooldown = 15;

        this.damage = 15;
        this.id = 1;
    }

    update(camera, frameCounter) {
        this.draw(camera);

        let arbitraryOffset = 30;        

        if (this.user.direction == 'left') {
            this.currentFrame = 0;
            this.x = this.user.x + this.user.w/2 - this.w - arbitraryOffset;
            this.y = this.user.y + this.user.h*2/4;
        }
        
        if (this.user.direction == 'right') {
            this.currentFrame = 1;
            this.x = this.user.x + this.user.w/2 + arbitraryOffset;
            this.y = this.user.y + this.user.h*2/4;
        }
        
    
        if (frameCounter - this.startUsingFrame > this.useTime) { this.inUse = false; }
        if (frameCounter - this.startUsingFrame > this.cooldown + this.useTime) { this.alreadyUsed = false; }
        if (this.inUse == true) {
            // check for collisions with enemies when inUse (i dont think this is getting used)
        }
    }
}