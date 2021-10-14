new Vue({
    el: '#exercise',
    data: {
        game_is_on: false,
        game_started : true,
        mHealthWidth: 100,
        yHealthWidth: 100,
        logs: []
    },
    methods: {
        attack: function () {
            let point = Math.ceil(Math.random() * 10);
            this.mHealthWidth -= point
            this.monsterAttack()
            this.add_to_logs({turn: "P", text:  "Player attack (" + point + ")"  })
        },
        specialAttack: function () {
            let point = Math.ceil(Math.random() * 20);

            this.mHealthWidth -= point
            this.monsterAttack()
            this.add_to_logs({turn: "P", text:  "Special attack (" + point + ")"  })
        },
        firstAid: function () {
            let point = Math.ceil(Math.random() * 20);

            this.yHealthWidth += 25
            this.monsterAttack()
            this.add_to_logs({turn: "P", text:  "First aid (" + point + ")"  })
        },
        giveUp: function () {
            this.yHealthWidth = 0
            this.add_to_logs({turn: "P", text: "player gave up" })
        },
        monsterAttack: function (){
            let point = Math.ceil(Math.random() * 15)
            this.yHealthWidth-=point
            this.add_to_logs({turn: "M", text:  "Monster attack (" + point + ")"  })
        },
        add_to_logs: function (value){-
            this.logs.push(value)
        }

    },
    watch:  {
        yHealthWidth: function (value) {
            if (value <= 0) {
                this.yHealthWidth = 0;
                if(confirm('You lose, do you want to  play again?')){
                    this.yHealthWidth = 100;
                    this.mHealthWidth = 100;
                    this.logs = []
                }
                else{
                    alert('done')
                }
            }
            else if (value >= 100) {
                this.yHealthWidth = 100;

            }
        },
        mHealthWidth: function (value) {
            if (value<=0) {
                this.mHealthWidth = 0;
                if(confirm('You won, do you want to  play again?')){
                    this.yHealthWidth = 100;
                    this.mHealthWidth = 100;
                    this.logs = []
                }
            }
        }
    }
});