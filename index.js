// demon-fighting slime
// game ends with you fighting satan

// 10 levels

// fight demons with a sword
// maybe upgrade swords throughout the course of the game

let frameCounter = 0;

const canvas = document.querySelector('canvas');
const controller = new Controller(canvas);
const renderer = new Renderer(canvas);
renderer.resize();

const textures = new Textures();

const camera = new Camera(renderer);
const player = new Player(textures.player, 0, 400, 64, 64, controller);

const world = new World();
// world.enemies.push(new Demon(textures.demon, 700, 880-64, 64, 64));

for (let i = 0; i < 10; i++) {
    let demon = new Demon(textures.demon, Math.floor(Math.random()*(canvas.width-64)), Math.floor(Math.random()*(canvas.height-64)), 64, 64);
    world.enemies.push(demon);
}

player.items.push(new Weapon(textures.weapon, 0, 0, 72, 21, player));


document.addEventListener('keydown', event => controller.keyHandler(event));
document.addEventListener('keyup', event => controller.keyHandler(event));

setInterval(() => {
    renderer.update();

    renderer.drawColor(255,0,0);
    camera.drawImage(player.keyframes[player.currentFrame], player, true);

    player.update(camera, frameCounter);

    world.update(camera, player);


    frameCounter++;
}, 1000/60);