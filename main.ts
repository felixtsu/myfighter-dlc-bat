namespace myfighter_felix_dlc {
    function BFanim (projectile: Sprite) {
        if (projectile.vx >= 0) {
            animation.runImageAnimation(
            projectile,
            [img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ...........fff..
                fff........ccfff
                cbbcf...cc..ccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3bff
                .ccbcbfcbbbbbbc.
                .cbbcbbcbbbbbbc.
                .cbcccbbb1bbb1bc
                ..cccccbbbbbbbbc
                ...cfbbbbcbbbcbf
                ..ccfbbbb1fff1bf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ........cc..cc..
                ......ccc3cc3c..
                .....cccb3cb3bc.
                ....ffbbbbbbbbc.
                ....ffbbbbbbbbcc
                ...fffcbb1bbb1bc
                ...ffffbbbbbbbbc
                ...bbbccbcbbbcbf
                ...ccccfb1fff1bf
                ...ccbbfbbbbbbf.
                ...cbbccbbbbbfcc
                ..cbbccffffffccc
                .ccccc......ccc.
                cccc.......ccc..
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                .fff........fff.
                .cbbcf.......cff
                ..cbbcf......ccf
                ..cccbf.......fc
                ..ccbbff.....ffc
                ..cbbcbfcc.ccfff
                ..cbccbfcccccfff
                ...cccbcb3cc3cf.
                ...ccccbb3cb3bc.
                ....ccbbbbbbbbcc
                ...cfbbbb1bbb1bc
                ..ccfbbbbbbbbbbf
                ....fbbbbcbbbcbf
                ....fcbbb1fff1f.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `],
            100,
            false
            )
        } else {
            animation.runImageAnimation(
            projectile,
            [img`
                ..fff........fff
                .ffcc......fcbbc
                ffcc......fcbbc.
                fcfc......fbccc.
                fffcc.cc.fcbbcc.
                ffc3cc3ccfbcbbc.
                ffb3bc3bcfbccbc.
                .cbbbbbbcbbccc..
                .c1bbb1bbcccc...
                cbbbbbbbbbcc....
                cbcbbbcbbbbf....
                fb1fff1bbbbfc...
                fbbbbbbbbbbfcc..
                .fbbbbbbbbcf....
                ..fbbbbbbcf.....
                ...fffffff......
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ..fff...........
                fffcc........fff
                ffcc..cc...fcbbc
                ffc3cc3ccffbbbc.
                ffb3bc3bcfbbccc.
                .cbbbbbbcfbcbcc.
                .cbbbbbbcbbcbbc.
                cb1bbb1bbbcccbc.
                cbbbbbbbbccccc..
                fbcbbbcbbbbfc...
                fb1fff1bbbbfcc..
                .fbbbbbbbbcf....
                ..fbbbbbbcf.....
                ...fffffff......
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ..cc..cc........
                ..c3cc3ccc......
                .cb3bc3bccc.....
                .cbbbbbbbbff....
                ccbbbbbbbbff....
                cb1bbb1bbcfff...
                cbbbbbbbbffff...
                fbcbbbcbccbbb...
                fb1fff1bfcccc...
                .fbbbbbbfbbcc...
                ccfbbbbbccbbc...
                cccffffffccbbc..
                .ccc......ccccc.
                ..ccc.......cccc
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                .fff........fff.
                ffc.......fcbbc.
                fcc......fcbbc..
                cf.......fbccc..
                cff.....ffbbcc..
                fffcc.ccfbcbbc..
                fffcccccfbccbc..
                .fc3cc3bcbccc...
                .cb3bc3bbcccc...
                ccbbbbbbbbcc....
                cb1bbb1bbbbfc...
                fbbbbbbbbbbfcc..
                fbcbbbcbbbbf....
                .f1fff1bbbcf....
                ..fbbbbbbcf.....
                ...fffffff......
                ................
                ................
                ................
                ................
                ................
                ................
                `],
            100,
            false
            )
        }
    }
    export function bat(){

        fightext_character.basicSet(img`
            fff........fff..
            cbbcf......ccff.
            .cbbcf......ccff
            .cccbf......cfcf
            .ccbbcf.cc.ccfff
            .cbbcbfcc3cc3cff
            .cbccbfcb3cb3bff
            ..cccbbcbbbbbbc.
            ...ccccbb1bbb1c.
            ....ccbbbbbbbbbc
            ....fbbbbcbbbcbc
            ...cfbbbb1fff1bf
            ..ccfbbbbbbbbbbf
            ....fcbbbbbbbbf.
            .....fcbbbbbbf..
            ......fffffff...
            ................
            ................
            ................
            ................
            ................
            ................
            `, "大蝙蝠", function (player3) {
            fightext_character.setAtkImage(player3, fightext_character.atkimgKind.hand1, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbcb1bbb1cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                ........................................
                ........................................
                ..................................555...
                ..................................5.5...
                .................................5...5..
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                .................................5...5..
                ..................................5.5...
                ..................................555...
                ........................................
                ........................................
                `)
            fightext_character.setAtkImage(player3, fightext_character.atkimgKind.hand2, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbcb1bbb1cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                ........................................
                ........................................
                ..................................555...
                ..................................5.5...
                .................................5...5..
                ................................5..4..5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ................................5.4.4.5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                .................................5.4.5..
                ..................................5.5...
                ..................................555...
                ........................................
                ........................................
                `)
            fightext_character.setAtkImage(player3, fightext_character.atkimgKind.leg1, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbcb1bbb1cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            fightext_character.setAtkImage(player3, fightext_character.atkimgKind.leg2, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbc22bb22cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            fightext_character.setStImage(player3, fightext_character.stimgKind.Defence, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `)
            fightext_character.setStImage(player3, fightext_character.stimgKind.Hitover, img`
                ...fffffff......
                ..fbbbbbbcf.....
                .f2222bbbbcf....
                ff2222fbbbbfcc..
                ff1ff1fbbbbfc...
                cb1ff1cbbbbf....
                cbbbbbbbbbcc....
                .c1bbb1bbcccc...
                .c1bbb1bcbbccc..
                ffb3bc3bcfbccbc.
                ffc3cc3ccfbcbbc.
                fffcc.cc.fcbbcc.
                fcfc......fbccc.
                ffcc......fcbbc.
                .ffcc......fcbbc
                ..fff........fff
                ................
                ................
                ................
                ................
                `)
            fightext_character.setStImage(player3, fightext_character.stimgKind.Lie, img`
                . . . . . . . . . . . . . . . . 
                . . c c c . . . . . . . c c c c 
                . c c c . . . . . . c c c c c . 
                c c c f f f f f f c c b b c . . 
                c c f b b b b b c c b b c . . . 
                . f b b b b b b f b b c c . . . 
                f b 1 f f f 1 b f c c c c . . . 
                f b c b b b c b c c b b b . . . 
                c b b b b b b b b f f f f . . . 
                c b 1 1 b b 1 1 b c f f f . . . 
                c c b b b b b b b b f f . . . . 
                . c b b b b b b b b f f . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            fightext_character.setStImage(player3, fightext_character.stimgKind.Stand, img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `)
            fightext_character.setStImage(player3, fightext_character.stimgKind.Quickst, img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b 1 1 b b b 1 1 c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `)
            fightext_character.setWalkImage(player3, fightext_character.aniKind.Hurt, [img`
                . f f f . . . . . . 5 . f f f . 
                . c b b c f . . . . 5 . . c f f 
                . . c b b c f . . . 5 . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . 5 . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b 1 1 b b b 1 1 c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                f f f . . . . . 2 . . f f f . . 
                c b b c f . . . 2 . . c c f f . 
                . c b b c f . . 2 . . . c c f f 
                . c c c c f . . . . . . c f c f 
                . c c b b b f . 2 c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b 1 b b b 1 c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b b 2 2 2 2 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                f f f . . . . . . . . f f f . . 
                c b b c f . 9 . . . . c c f f . 
                . c b b c f . 9 . . 9 . c c f f 
                . c c c 9 f . 9 . 9 . . c f c f 
                . c c b b 9 f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b 1 b b b 1 c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b b 2 2 2 2 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . 9 . . . . f f f . . 
                f f f . . . . 9 . . . c c f f f 
                c b b c 9 9 . . c c . c c c f f 
                . c b b b f 9 c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 c f f 
                . c c b c 9 f c b b b b b b c f 
                . c b 9 c b b c b 1 b b b 1 c c 
                . c b c c c b b b b b b b b b c 
                . . c c c c c b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f c 
                . . . c f b b b b f f f f f f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b 2 2 2 2 2 f . 
                . . . . . f c b b b 2 2 2 f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . 9 . . . . . . . . . . 
                . . 9 . . . 9 . . . . . . . . . 
                . . . . 9 . . . c c . c c . . . 
                . . . . . 9 c c c 3 c c 3 f . . 
                . . . 9 . c c c b 3 c b 3 c f . 
                . . . . f f b b b b b b b b c f 
                . . . . f f b b b 1 b b b 1 c c 
                . . . f f f c b b b b b b b b c 
                . . . f f f f b b c 1 f f 1 b c 
                . . . b b b c c b f 1 f f 1 f f 
                . . . c c c c f b f f f f f f f 
                . . c c c b b f b f 2 2 2 2 f f 
                . . . c b b c c b 2 2 2 2 2 f . 
                . . c b b c c f f b 2 2 2 f . . 
                . c c c c c f f f f f f f . . . 
                c c c c . . . . . . . . . . . . 
                `])
            fightext_character.setWalkImage(player3, fightext_character.aniKind.Stand, [img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ...........fff..
                fff........ccfff
                cbbcf...cc..ccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3bff
                .ccbcbfcbbbbbbc.
                .cbbcbbcbbbbbbc.
                .cbcccbbb1bbb1bc
                ..cccccbbbbbbbbc
                ...cfbbbbcbbbcbf
                ..ccfbbbb1fff1bf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ........cc..cc..
                ......ccc3cc3c..
                .....cccb3cb3bc.
                ....ffbbbbbbbbc.
                ....ffbbbbbbbbcc
                ...fffcbb1bbb1bc
                ...ffffbbbbbbbbc
                ...bbbccbcbbbcbf
                ...ccccfb1fff1bf
                ...ccbbfbbbbbbf.
                ...cbbccbbbbbfcc
                ..cbbccffffffccc
                .ccccc......ccc.
                cccc.......ccc..
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                .fff........fff.
                .cbbcf.......cff
                ..cbbcf......ccf
                ..cccbf.......fc
                ..ccbbff.....ffc
                ..cbbcbfcc.ccfff
                ..cbccbfcccccfff
                ...cccbcb3cc3cf.
                ...ccccbb3cb3bc.
                ....ccbbbbbbbbcc
                ...cfbbbb1bbb1bc
                ..ccfbbbbbbbbbbf
                ....fbbbbcbbbcbf
                ....fcbbb1fff1f.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `])
            fightext_character.setWalkImage(player3, fightext_character.aniKind.Walk, [img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ...........fff..
                fff........ccfff
                cbbcf...cc..ccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3bff
                .ccbcbfcbbbbbbc.
                .cbbcbbcbbbbbbc.
                .cbcccbbb1bbb1bc
                ..cccccbbbbbbbbc
                ...cfbbbbcbbbcbf
                ..ccfbbbb1fff1bf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ........cc..cc..
                ......ccc3cc3c..
                .....cccb3cb3bc.
                ....ffbbbbbbbbc.
                ....ffbbbbbbbbcc
                ...fffcbb1bbb1bc
                ...ffffbbbbbbbbc
                ...bbbccbcbbbcbf
                ...ccccfb1fff1bf
                ...ccbbfbbbbbbf.
                ...cbbccbbbbbfcc
                ..cbbccffffffccc
                .ccccc......ccc.
                cccc.......ccc..
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                .fff........fff.
                .cbbcf.......cff
                ..cbbcf......ccf
                ..cccbf.......fc
                ..ccbbff.....ffc
                ..cbbcbfcc.ccfff
                ..cbccbfcccccfff
                ...cccbcb3cc3cf.
                ...ccccbb3cb3bc.
                ....ccbbbbbbbbcc
                ...cfbbbb1bbb1bc
                ..ccfbbbbbbbbbbf
                ....fbbbbcbbbcbf
                ....fcbbb1fff1f.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `], 100)
            fightext_character.setAbility(player3, fightext_character.abilityKind.jumpspeed, 150)
        })

        fightext_skill.skillSet("大蝙蝠", function (player3) {
            fightext_skill.setSkill(player3, fightext_skill.SkillKind.A10, 20, function (tempVar, undefined) {
                let temp = fightext_skill.newPosture(player3, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . c c . . c c . .
                    . . . . . . c c c 3 c c 3 c . .
                    . . . . . c c c b 3 c b 3 b c .
                    . . . . f f b b b 2 b b b 2 c .
                    . . . . f f b b 2 2 b b b 2 2 c
                    . . . f f f c b b 2 b b b 2 b c
                    . . . f f f f b b b b b b b b c
                    . . . b b b c c b c b b b c b f
                    . . . c c c c f b 1 f f f 1 b f
                    . . . c c b b f b b b b b b f .
                    . . . c b b c c b b b b b f c c
                    . . c b b c c f f f f f f c c c
                    . c c c c c . . . . . . c c c .
                    c c c c . . . . . . . c c c . .
                    . . . . . . . . . . . . . . . .
                `, 0.8, img`
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                    `)
                fightext_skill.add2(tempVar, "projectile", temp)
                fightext_projectile.bulletInterval(0.1, fightext_skill.getVal2(tempVar, "projectile"), function () {
                    let temp2 = fightext_skill.getVal2(tempVar, "projectile")
                    fightext_projectile.splitshoot(fightext_skill.getVal2(tempVar, "projectile"), "红激光", 0, 1, 180, 75, 2)
                    fightext_projectile.splitshoot(fightext_skill.getVal2(tempVar, "projectile"), "红激光", 0, -2, 180, 75, 5)
                })
            })
            fightext_skill.setSkill(player3, fightext_skill.SkillKind.B, 4, function (tempVar, undefined) {
                fightext_character.atkAction(player3, fightext_character.atkKind.BasicAtkB)
                fightext_skill.shoot2(player3, "音波", player3.x, player3.y, 180, 75, -3)
            })
            fightext_skill.setSkill(player3, fightext_skill.SkillKind.B10, 35, function (tempVar, undefined) {
                fightext_skill.add2(tempVar, "projectile", fightext_skill.newPosture(player3, img`
                    ................
                    ................
                    ................
                    ..........2.....
                    ..........2.....
                    ..........2.....
                    ..........2.....
                    ................
                    ..........2.....
                    ................
                    ................
                    ........cc.cc...
                    ......ccc3cc3f..
                    .....cccb3cb3cf.
                    ....ffbbbbbbbbcf
                    ....ffbbb1bbb1cc
                    ...fffcbbbbbbbbc
                    ...ffffbbc1ff1bc
                    ...bbbccbf1ff1ff
                    ...ccccfbfffffff
                    ..cccbbfbf2222ff
                    ...cbbccb22222f.
                    ..cbbccffb222f..
                    .cccccfffffff...
                    cccc............
                    `, 2.5, img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `))
                fightext_projectile.bulletInterval(0.2, fightext_skill.getVal2(tempVar, "projectile"), function () {
                    fightext_projectile.splitshoot(fightext_skill.getVal2(tempVar, "projectile"), "蝙蝠群", 0, 0, randint(120, 160), 75, 5)
                })
            })
            fightext_skill.setSkill(player3, fightext_skill.SkillKind.B9, 10, function (tempVar, undefined) {
                fightext_skill.run(player3, 120)
                fightext_skill.defend(player3, 0.5)
                fightext_skill.add2(tempVar, "projectile", fightext_skill.newPosture(player3, img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c . c c . . . 
                    . . . . . . c c c 3 c c 3 f . . 
                    . . . . . c c c b 3 c b 3 c f . 
                    . . . . f f b 2 b b b b 2 b c f 
                    . . . . f f b b 2 2 b b b 2 c c 
                    . . . f f f c b b b b b b b b c 
                    . . . f f f f b b c 1 f f 1 b c 
                    . . . b b b c c b f 1 f f 1 f f 
                    . . . c c c c f b f 1 f f 1 f f 
                    . . c c c b b f b f 2 2 2 2 f f 
                    . . . c b b c c b 2 2 2 2 2 f . 
                    . . c b b c c f f b 2 2 2 f . . 
                    . c c c c c f f f f f f f . . . 
                    c c c c . . . . . . . . . . . . 
                    `, 0.5, img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . c 1 f f 1 . . 
                    . . . . . . . . . f 1 f f 1 . . 
                    . . . . . . . . . f 1 f f 1 . . 
                    . . . . . . . . . f 2 2 2 2 . . 
                    . . . . . . . . . 2 2 2 2 2 . . 
                    . . . . . . . . . b 2 2 2 f . . 
                    . . . . . . . . . f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `))
                fightext_projectile.overlapAct(fightext_skill.getVal2(tempVar, "projectile"), fightext_sprites.overlapKind.two, function () {
                    fightext_projectile.splitshoot(fightext_skill.getVal2(tempVar, "projectile"), "回血", 0, 0, 180, 0)
                })
                fightext_projectile.setBullet(fightext_skill.getVal2(tempVar,"projectile"), fightext_projectile.bulletP.damage, 5)
                fightext_projectile.setBullet(fightext_skill.getVal2(tempVar, "projectile"),fightext_projectile.bulletP.hurted, 2)
                fightext_projectile.setBullet2(fightext_skill.getVal2(tempVar, "projectile"),fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet2(fightext_skill.getVal2(tempVar, "projectile"), fightext_projectile.bulletP2.rebound, true)
                fightext_projectile.setBullet(fightext_skill.getVal2(tempVar, "projectile"),fightext_projectile.bulletP.perishTogether,-1)
            })
            fightext_skill.setSkill(player3, fightext_skill.SkillKind.B4, 4, function (tempVar, undefined) {
                fightext_skill.defend(player3, 0.5)
                fightext_skill.add2(tempVar, "projectile", fightext_skill.newPosture(player3, img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c . . c c . . 
                    . . . . . . c c c 3 c c 3 c . . 
                    . . . . . c c c b 3 c b 3 b c . 
                    . . . . f f b b b b b b b b c . 
                    . . . . f f b b 2 b b b b b 2 c 
                    . . . f f f c b b 2 b b b 2 b c 
                    . . . f f f f b b b b b b b b c 
                    . . . b b b c c b c b b b c b f 
                    . . . c c c c f b 1 f f f 1 b f 
                    . . . c c b b f b b b b b b f . 
                    . . . c b b c c b b b b b f c c 
                    . . c b b c c f f f f f f c c c 
                    . c c c c c . . . . . . c c c . 
                    c c c c . . . . . . . c c c . . 
                    . . . . . . . . . . . . . . . . 
                    `, 0.5, img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . c c . . c c . . 
                    . . . . . . c c c 3 c c 3 c . . 
                    . . . . . c c c b 3 c b 3 b c . 
                    . . . . f f b b b b b b b b c . 
                    . . . . f f b b 2 b b b b b 2 c 
                    . . . f f f c b b 2 b b b 2 b c 
                    . . . f f f f b b b b b b b b c 
                    . . . b b b c c b c b b b c b f 
                    . . . c c c c f b 1 f f f 1 b f 
                    . . . c c b b f b b b b b b f . 
                    . . . c b b c c b b b b b f c c 
                    . . c b b c c f f f f f f c c c 
                    . c c c c c . . . . . . c c c . 
                    c c c c . . . . . . . c c c . . 
                    . . . . . . . . . . . . . . . . 
                    `))
                fightext_projectile.setBullet(fightext_skill.getVal2(tempVar,"projectile"), fightext_projectile.bulletP.damage, 5)
                fightext_projectile.setBullet(fightext_skill.getVal2(tempVar, "projectile"),fightext_projectile.bulletP.hurted, 2)
                fightext_projectile.setBullet2(fightext_skill.getVal2(tempVar, "projectile"), fightext_projectile.bulletP2.rebound, true)
                fightext_projectile.setBullet(fightext_skill.getVal2(tempVar, "projectile"),fightext_projectile.bulletP.perishTogether,-1)
            })
            fightext_skill.setSkill(player3, fightext_skill.SkillKind.A3, 15, function (tempVar, undefined) {
                fightext_character.atkAction(player3, fightext_character.atkKind.RushAtkB, 0.5)
                for (let index = 0; index < 4; index++) {
                    fightext_skill.shoot2(player3, "跟踪蝙蝠", player3.x, player3.y, randint(0, 360), randint(25, 45))
                }
            })
        })
        fightext_projectile.setProjectiles("大蝙蝠的弹射物集合", function () {
            fightext_projectile.setProjectile(img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `, "跟踪蝙蝠", function (projectile) {
                projectile.setFlag(SpriteFlag.BounceOnWall, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 5)
                BFanim(projectile)
                fightext_projectile.bulletInterval(0.4, projectile, function () {
                    BFanim(projectile)
                })
                fightext_projectile.bulletInterval(2, projectile, function () {
                    if (Math.percentChance(55)) {
                        fightext_projectile.aimedshot(projectile)
                    } else {
                        fightext_projectile.acceToV(projectile, 0.5, randint(0.8, 2), randint(0.8, 2))
                    }
                })
            })
            fightext_projectile.setProjectile(img`
                ........................................
                ........................................
                ..................................444...
                ..................................4.4...
                .................................4...4..
                ................................4.....4.
                ................................4.....4.
                ................................4.....4.
                ................................4.....4.
                ...............................4.......4
                ...............................4.......4
                ...............................4.......4
                ...............................4.......4
                ...............................4.......4
                ...............................4.......4
                ................................4.....4.
                ................................4.....4.
                ................................4.....4.
                ................................4.....4.
                .................................4...4..
                ..................................4.4...
                ..................................444...
                ........................................
                ........................................
                `, "音波", function (projectile) {
                projectile.lifespan = 400
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 2 2 2 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "红激光", function (projectile) {
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 1)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
            })
            fightext_projectile.setProjectile(img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `, "蝙蝠群", function (projectile) {
                BFanim(projectile)
                projectile.ay = 40
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 5)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.hitrec, 450)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.yspeed, 75)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.bulletInterval(0.4, projectile, function () {
                    BFanim(projectile)
                })
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "回血", function (projectile) {
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,-1)
                projectile.lifespan = 500
                fightext_projectile.bulletInterval(0.1, projectile, function () {
                    fightext_projectile.projectileOwner(projectile).hp += 1
                })
            })
        })

    }
}
