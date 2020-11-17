<template>
    <div class="red__light">
        <h1 class="color">STOP!</h1>
        <div class="red" :style=" this.$parent.delay < 3 ? 'animation: blink 400ms alternate infinite;' : '' "></div>
        <div class="yellow"></div>
        <div class="green"></div>
    </div>
</template>

<style scoped>
    .color{
        color:#ff4040;
    }
    .red__light{
        display: flex;
        flex-direction:column;
        align-items: center;
        width: 100px;
        margin: 0 auto;
        border-radius: 50%;
    }
    .red, .yellow, .green {
        background: #ff4040;
        height: 100px;
        width: 100px; 
        margin: 10px;
        border-radius: 50%;
        border: 5px solid #000  
    }
    .yellow{
        background: #fffb82;   
    }
    .green{
        background:#42c950;   
    } 
</style>