<template>
    <h1 class="maintitle">Государственная геодезическая сеть</h1>
    <div class="informationmain"><b>Государственная геодезическая сеть</b> (ГГС) представляет собой систему пунктов с <u>известными координатами</u>, которая используется для определения местоположения объектов на земле. Эти пункты обычно помечены <i>специальными марками</i> или <u>стойками</u>, которые фиксируются на постоянных <br> <br>местах и имеют точно измеренные координаты широты, долготы и высоты.</div>
    <div class="RoleGGS">ГГС играет <u>важную роль</u> в различных областях, таких как:<br> <u>картография</u>,<br> <u>строительство</u>,<br> <u>геодезия</u>,<br> <u>навигация</u>,<br> <u>геоинформационные системы и другие</u>. <br><br> Она обеспечивает основу для создания карт различного масштаба, позволяет определять точные координаты объектов и контролировать их перемещение.</div>
    <img class="imagemountain" src="/src/assets/image/imagemountain.png">
    <img class="imagestone" src="/src/assets/image/stoneimage.png">
    <div class="asistGGS1"><div class="asistGGS2"><div class="asistGGS3">Для обеспечения надежности и актуальности ГГС необходимо регулярно обследовать и поддерживать ее пункты. Это включает в себя проведение террестрических и космических измерений, корректировку координат, обновление баз данных и мониторинг состояния марок. Поддержание ГГС в хорошем состоянии обеспечивает точность геопространственной информации и эффективное использование ее в различных областях человеческой деятельности.</div></div></div>
    <div class="sirclemain">Учитывая, что всего на территории России расположено несколько сотен тысяч (!) геодезических пунктов и их роль в решении различных производственных, военных и научных задач чрезвычайно высока, проблема скорейшего обследования ГГС имеет <u>важнейшее государственное значение!</u> <br><br> Внесите свой вклад в решение этой задачи!<br><img src="/src/assets/image/way.png"></div>
</template>

<script>
</script>

<style lang="scss">

@import '/src/assets/scss/main.scss';

    .maintitle{
        color: $mainFontColor;
        font-size: 200%;
        width: 43%;
        float: left;
        margin-left: 2%;
        padding: 2% 4%;
        border-bottom: 2px solid $grayColor;
    }

    .informationmain{
        border: 1px solid $grayColor;
        color: $mainFontColor;
        padding: 4%;
        width: 50%;
        float: right;
        margin-top: 3%;
        margin-right: 2%;
        border-radius: 10px;
        background-color: $greenBackgroundColor;
    }

    .imagemountain{
        margin: 4% 1% 15% 6% ;
        width: 30%;
    }

    .RoleGGS{
        color: $mainFontColor;
        float: right;
        width: 50%;
        margin-top: 5%;
        margin-right: 10%;
        background-color: $grayColor;
        padding: 3% 5%;
        border-radius: 10px;
    }

    .imagestone{
        float: right;
        width: 30%;        
        padding-right: 2%;
        padding-top: 1%;
        margin-top: -4%;
    }

    .asistGGS1{
        background-color: $grayColor;
        border-radius: 10px;
        width: 50%;
        float: left;
        padding: 6% 1%;
        margin: -1% 5%;
    } 

    .asistGGS2{
        border-bottom: 2px solid $mainFontColor;
        border-top: 2px solid $mainFontColor;
        padding: 5% 0%;
    }

    .asistGGS3{
        color: $mainFontColor;
        border: 1px solid white;
        padding: 0% 2%;
        border-radius: 10px;
    }

    .sirclemain{
        float: left;
        width: 50%;
        background-color: $mainFontColor;
        color: white;
        padding: 3%;
        border-radius: 10px;
        padding: 3% 5%;
        margin-top: 5%;
        margin-left: 15%;
    }
</style>