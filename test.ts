// 在此处添加您的代码
import WaveSprite = fightext_projectile.WaveSprite
import runAnimation = fightext_animation.runAnimation
sprites.onDestroyed(SpriteKind.p1atk, function(sprite: Sprite) {
        let b = <WaveSprite>sprite
        b.isDestroyed = true
        if(b.blastAnim != undefined && b.blastAnim != null){
            runAnimation(b, b.blastAnim)
        }
        if(b.attachOwner){
            for(let i = 0; i < b.own.attachBullet.length; ++i){
                if(b.own.attachBullet[i] == b){
                    b.own.attachBullet.removeAt(i)
                    break
                }
            }
        }
    })
    sprites.onDestroyed(SpriteKind.p2atk, function(sprite: Sprite) {
        let b = <WaveSprite>sprite
        b.isDestroyed = true
        if(b.blastAnim != undefined && b.blastAnim != null){
            runAnimation(b, b.blastAnim)
        }
        if(b.attachOwner){
            for(let i = 0; i < b.own.attachBullet.length; ++i){
                if(b.own.attachBullet[i] == b){
                    b.own.attachBullet.removeAt(i)
                    break
                }
            }
        }
    })
myfighter_felix_dlc.bat()
playGame.characterMenus()