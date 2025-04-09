class Item extends AnimatedAsset {
    constructor(keyframes,x,y,w,h,user) {
        super(keyframes,x,y,w,h);

        this.id = 0;

        this.user = user;

        this.inUse = false;
        this.alreadyUsed = false;
        this.startUsingFrame = 0;
        this.useTime = 0; // how long you use the item in frames
        this.cooldown = 0;
    }

    draw(camera) {
        if (this.inUse) {
            camera.drawImage(this.keyframes[this.currentFrame], this, true);
        }
    }

    use(frameCounter) {
        this.startUsingFrame = frameCounter;
        this.inUse = true;
    }
}