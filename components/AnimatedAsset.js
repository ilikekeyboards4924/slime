class AnimatedAsset extends Rect {
    constructor(keyframes, x, y, w, h) {
      super(x, y, w, h);
      this.keyframes = keyframes;

      this.currentFrame = 0;
      this.currentFrameOffset = 0;
    }
  
    stepFrame() { // step through each keyframe in an animation
      this.currentFrame = (this.currentFrame+1)%this.keyframes.length; // any animation will loop if you go above the length of its keyframes list
    }
  }