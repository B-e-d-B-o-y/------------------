<template>
    <header>
        <button class="buttonheader">Главная</button>
        <button class="buttonheader">Карточка</button>
        <button class="buttonheader">Помощь</button>
        <button class="buttonheader">Карта</button>
        <button class="buttonheader">Проверка</button>
        <button class="buttonheader">Профиль</button>
    </header>
</template>

<style lang="scss">
@import '/src/assets/scss/main.scss';

header{
    background-color: white;
    position: sticky;
    width: 96%;
    padding: 2%;
    border-bottom: 2px solid $grayColor;
    top: 0%;
}

.buttonheader{
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 2%;
    margin-bottom: 0.5%;
    background: none;
    border: none;
    font-size: $headerFontSize;
    color: $mainFontColor;
    cursor: pointer;
    border-bottom: 2px solid white;
}

.buttonheader:hover{
    color: $greenColor
}

.buttonheader:focus{
    color: $greenColor;
    border-bottom: 2px solid $greenColor;
}

</style>