export default class mainScene extends Phaser.Scene{
    constructor(){
        super('mainScene')
        this.ground;
        this.platforms;
        this.player;

    }
    preload(){
        this.load.image('sky','../../assets/sky.png')
        this.load.image('ground','../assets/ground.png')
        this.load.image('platform','../assets/platform.png')
        this.load.spritesheet('player', '../player/player.png',{frameWidth:32,frameHeight:32})
    }

    create(){
        this.add.image(400,300,'sky')

        this.ground = this.physics.add.staticGroup()
        this.ground.create(400,600,'ground')
        
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(200,350,'platform')
        this.platforms.create(50,500,'platform')
        this.platforms.create(550,350,'platform')
        this.platforms.create(600,500,'platform')

      
         this.player =this.physics.add.sprite(0,0,'player')
         this.player.setCollideWorldBounds(true);
         this.player.setBounce(0.2)

         this.cursor = this.input.keyboard.createCursorKeys();

         this.physics.add.collider(this.player, this.platforms)
         this.physics.add.collider(this.player ,this.ground);
}

    update(){
        if(this.cursor.left.isDown){
            this.player.setVelocityX(-160)
        }
        else if (this.cursor.right.isDown) {
            this.player.setVelocityX(160);

        }
        else {
            this.player.setVelocityX(0)
        }
        if(this.cursor.up.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-330);
        }

    }
}