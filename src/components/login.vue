<template>
    <div class="login">
    <img class="fingerprint" src="/src/assets/image/fingerprint.png"/>

    <div v-if="activePage === 1">
        <h1 class="titlelogin">Войти в аккаунт</h1>
        <input id="login" class="inputlogin" placeholder="Логин">
        <input id="password" type="password" class="inputlogin" placeholder="Пароль">
        <button id="buttonpassword" class="buttonlogin">Войти</button>
        <div class="rectangle"><span>ИЛИ</span></div>
        <button @click.prevent = "activePage = 2" id="buttonregistration" class="buttonlogin">Зарегистрироваться</button>
    </div>

    <div v-else-if="activePage === 3">
        <h1 class="titlelogin">Код подтверждения</h1>
        <div class="text">Код подтверждения отправлен вам на почту, если код не пришел, проверьте правильность написания почты.</div>
        <input id="confirmation" type="number" class="inputlogin" max="9" placeholder="Введите код подтверждения">
        <button id="buttonconfirmation" class="buttonlogin">Подтвердить</button>
    </div>

    <div v-else="activePage === 2">
        <h1 class="titlelogin">Создать аккаунт</h1>
        <input id="email" class="inputlogin" placeholder="Email">
        <input id="newlogin" class="inputlogin" placeholder="Логин">
        <input id="newpassword" type="password" class="inputlogin" placeholder="Пароль">
        <input id="reapetpassword" type="password" class="inputlogin" placeholder="Повторить пароль">
        <button id="registration" class="buttonlogin" @click.prevent = "activePage = 3">Зарегистрироваться</button>
    </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const activePage = ref(1)
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
.titlelogin{
    text-align: center;
    font-size: 200%;
    margin-top: 3%;
    margin-bottom: 3%;
}

.inputlogin{
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

.buttonlogin{
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

.buttonlogin:hover{
    background-color: $greenColor;
}

.inputlogin:hover{
    border: 3px solid $greenColor;
}

.inputlogin:focus{
    border: 3px solid $greenColor;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.text{
    font-family: sans-serif;
    text-align: center;
    font-size: 100%;
    margin-bottom: 5%;
    font-weight: 100;
}
</style>