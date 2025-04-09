class World {
    constructor() {
        this.enemies = [];
    }

    update(camera, player) {
        this.enemies.forEach((enemy, i) => {
            enemy.update(camera);
            
            player.items.forEach(item => {
                if (item.id == 1) {
                    if (item.inUse == true && item.collision(enemy) && enemy.iFrames == 0) {
                        enemy.health -= item.damage;
                        enemy.iFrames = 30;
                    }
                }
            });

            if (enemy.collision(player) && player.iFrames == 0) { 
                player.health -= 5;
                player.iFrames = 15;
            }

            if (enemy.health <= 0) {
                this.enemies.splice(i, 1);
                return;
            }
        });
    }
}