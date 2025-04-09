class Camera {
    constructor(renderer) {
        this.renderer = renderer;
        this.offset = { x: 0, y: 0 }
    }

    drawRect(rect) {
        this.renderer.ctx.fillRect(rect.x - this.offset.x, rect.y - this.offset.y, rect.w, rect.h);
    }

    drawImage(image, rect, size=false) {
        if (size == true) {
            this.renderer.ctx.drawImage(image, rect.x - this.offset.x, rect.y - this.offset.y, rect.w, rect.h);
        } else {
            this.renderer.ctx.drawImage(image, rect.x - this.offset.x, rect.y - this.offset.y);
        }
    }
}