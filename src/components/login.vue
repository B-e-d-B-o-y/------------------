<template>
    <div class="login">
    <img class="fingerprint" src="/src/assets/image/fingerprint.png"/>
    <slot></slot>
    </div>
</template>

<script setup>
</script>

<style lang="scss">

@import '/src/assets/scss/main.scss';

body{
  background-image: url("C:\Users\Igor\Documents\Геодезический сайт\src\assets\image\background_reg.png");
  background-repeat: no-repeat;
}

.login{
    margin-top: 8%;
    margin-left: 50%;
    border-radius: 50px;
    border: 2px solid $grayColor;
    display: inline-block;
    width: 25%;
    padding: 2%;
    background: white;
}
.title{
    text-align: center;
    font-size: 200%;
    margin-top: 3%;
    margin-bottom: 3%;
}

.input{
    display: flex;
    border-radius: 100px;
    border: 3px solid $grayColor;
    width: 100%;
    font-size: 150%;
    margin-bottom: 10%;
    padding-top: 3%;
    padding-bottom: 3%;
    cursor: auto;
    justify-content: center;
    align-items: center;
}

.button{
    display: flex;
    border: none;
    border-radius: 100px;
    width: 100.5%;
    font-size: 150%;
    padding-top: 3%;
    padding-bottom: 3%;
    text-align: center;
    background: $grayColor;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
}

.rectangle{
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.5;
    text-align: center;
    position: relative;
}

.rectangle span {
    font-family: sans-serif;
    background: #fff;
    display: inline-block;
    padding: 0 18px;
    position: relative;
    color: $grayColor;
}

.rectangle:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px; /* ширина линии */
    background: $grayColor; /* цвет линии */
}

.fingerprint{
    width: 10%;
    margin-left: 45%;
}

.text{
    font-family: sans-serif;
    text-align: center;
    font-size: 100%;
    margin-bottom: 5%;
    font-weight: 100;
}
</style>
