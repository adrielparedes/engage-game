class Game extends Phaser.Game {
    constructor() {
        super(
            window.innerWidth,
            window.innerHeight,
            Phaser.AUTO,
            'phaser-engage',
            null,
            false,
            true
        );

        this.state.add('BootState'    , BootState    , false);
        this.state.add('PreloadState' , PreloadState , false);
        this.state.add('SplashState'  , SplashState  , false);
        this.state.add('PlayState'    , PlayState    , false);

        this.state.start('BootState');
    }
}
