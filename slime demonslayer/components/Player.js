class Player extends AnimatedAsset {
    constructor(keyframes,x,y,w,h,controller) {
        super(keyframes,x,y,w,h);
        this.controller = controller;

        this.vel = { x: 0, y: 0 };
        this.direction = 'right';

        this.ghost = { w: 0, h: 0 };

        this.alreadyJumped = false;

        this.items = [];
        this.selectedItem = 0;

        this.health = 100;
        this.iFrames = 0; // immunity frames
    }

    update(camera, frameCounter) {
        this.ghost.w = this.w;
        this.ghost.h = this.h;

        this.w = this.keyframes[this.currentFrame].width;
        this.h = this.keyframes[this.currentFrame].height;

        if (this.ghost.h != this.h) {
            console.log(this.ghost.h - this.h);
        } 

        if (this.ghost.h > this.h) {
            this.y += this.ghost.h - this.h;
        } else if (this.ghost.h < this.h) {
            this.y += this.ghost.h - this.h;
        }
        
        this.move();
        this.action(frameCounter);

        this.items.forEach(item => {
            item.update(camera, frameCounter);
        });

        if (this.vel.x < 0) this.direction = 'left';
        if (this.vel.x > 0) this.direction = 'right';

        if (this.iFrames > 0) this.iFrames -= 1;

        if (this.items[this.selectedItem].id == 1) {
            if (this.items[this.selectedItem].inUse == true) {
                this.currentFrame = 1;
            } else {
                this.currentFrame = 0;
            }
        }
    }

    move() {
        if (this.controller.keys['a'] == true) { this.vel.x = -5; }
        if (this.controller.keys['d'] == true) { this.vel.x = 5; }
        if (!this.controller.keys['a'] && !this.controller.keys['d']) { this.vel.x = 0; }
        if (this.controller.keys['a'] == true && this.controller.keys['d'] == true) { this.vel.x = 0; }

        this.x += this.vel.x;
        if (this.x < 0) { this.x = 0; }
        if (this.x > this.controller.canvas.width - this.w) { this.x = this.controller.canvas.width - this.w; }

        // if (this.controller.keys['w'] == true && this.alreadyJumped == false) { this.vel.y = -5; this.alreadyJumped = true;  }
        if (this.controller.keys['w'] == true) { this.vel.y = -5;  }

        this.vel.y += 0.1;

        this.y += this.vel.y
        if (this.y < 0) { this.y = 0; }
        if (this.y > this.controller.canvas.height - this.h) { this.y = this.controller.canvas.height - this.h; this.vel.y = 0; this.alreadyJumped = false; }
    }

    action(frameCounter) {
        if (this.controller.keys[' '] == true && !this.items[this.selectedItem].alreadyUsed) { 
            this.items[this.selectedItem].use(frameCounter);
            this.items[this.selectedItem].alreadyUsed = true;
        }
    }
}