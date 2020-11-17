<template>
    <div>
        <div class="container"> 
            <h1 :style="{ color: currentColor}">Timer: {{ delay }} sec</h1>
            <div class="ligths">
                <transition name="flip" mode="out-in">
                <screen-red v-if="currentColor === colors.red.code"></screen-red>
                <screen-yellow v-else-if="currentColor === colors.yellow.code"></screen-yellow>
                <screen-green v-else-if="currentColor === colors.green.code"></screen-green>
                </transition>
            </div>
         </div>
    </div>
</template>

<script>
    import Red from './Red.vue';
    import Yellow from './Yellow.vue';
    import Green from './Green.vue';
    import { setInterval } from 'timers';
    
    export default {
            components: {
                'screen-red': Red,
                'screen-yellow': Yellow,
                'screen-green': Green
            },

            data () {
                return {
                    colors: {
                        red: {
                            code: '#ff4040',
                            delay: 10,
                            path: '/red'
                        },
                        yellow: {
                            code: '#fff540',
                            delay: 3,
                            path: '/yellow'
                        },
                        green: {
                            code: '#42c950',
                            delay: 15,
                            path: '/green'
                        },
                    },
                    currentColor: '',
                    prevColor: '',
                    delay: 0,
                    max: 0
                }
            },

            methods: {
                switchNext() {
                    if(this.currentColor === this.colors.red.code) {
                        this.prevColor = this.currentColor;
                        this.setColor(this.colors.yellow);
                    }
                    else if(this.currentColor === this.colors.green.code) {
                        this.prevColor = this.currentColor;
                        this.setColor(this.colors.yellow);
                    }
                    else {
                        if(this.prevColor === this.colors.green.code) {
                            this.prevColor = this.currentColor;
                            this.setColor(this.colors.red)
                        }
                        else {
                            this.prevColor = this.currentColor;
                            this.setColor(this.colors.green)
                        }
                    }
                    
                },
                setColor(color) {
                    this.delay = color.delay;
                    this.max = color.delay;
                    this.currentColor = color.code;
                    this.$router.push({ path: color.path }).catch(err => {});
                },
                counter(){
                    Math.sign(this.delay) !== 0  ? this.delay-- : this.switchNext();
                }
            },

            beforeMount() {
                if (this.$router.currentRoute.path === '/red') { this.setColor(this.colors.red); } 
                if (this.$router.currentRoute.path === '/yellow') { this.setColor(this.colors.yellow); }
                if (this.$router.currentRoute.path === '/green') { this.setColor(this.colors.green); }
                setInterval(this.counter, 1000);
            }
    }
</script>

<style>
    .container {
        margin: 0 auto;
        width: 200px;
    }
    .ligths {
        margin: 100px auto 0;
        height: 500px;
        border-radius: 5vh;
        background: #545454;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 10px solid #000
    }
    @keyframes blink {
        from { opacity: 1; }
        to { opacity: 0;  }
    }
</style>