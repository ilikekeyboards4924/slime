class Demon extends AnimatedAsset {
    constructor(keyframes,x,y,w,h) {
        super(keyframes,x,y,w,h);

        this.health = 10;
        this.iFrames = 0;
    }

    update(camera) {
        this.draw(camera);

        if (this.iFrames > 0) this.iFrames -= 1;
    }

    draw(camera) {
        camera.drawImage(this.keyframes[this.currentFrame], this, true);
    }
}