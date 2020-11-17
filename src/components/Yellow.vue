<template>
    <div class="yellow__light">
        <h1 class="color">READY!</h1>
        <div class="red"></div>
        <div class="yellow" :style=" this.$parent.delay < 3 ? 'animation: blink 400ms alternate infinite;' : '' "></div>
        <div class="green"></div>
    </div>
</template>

<style scoped>
    .color{
        color:#fff540;
        }
    .yellow__light{
        display: flex;
        flex-direction:column;
        align-items: center;
        margin: 0 auto;
        width: 100px;
        border-radius: 50%;
        
    }
    .red, .yellow, .green{
        background: #ff4040;
        height: 100px;
        width: 100px;
        margin: 10px;
        border-radius: 50%; 
        border: 5px solid #000;  
    }
    .yellow{
        background: #fff540;
    }
    .green{
        background:#42c950;  
    }
</style>