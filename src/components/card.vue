<template>
    <div class="titlecardwrap"><h1 class="titlecard">Карточка обследования пункта ГГС</h1></div>
    <div class="bordercard"><form class="survey-form">
        <div class="inputPair">
            <label>Кем выполнены работы по обследованию</label>
            <input class="inputcard" id="name2">
        </div>
        <div class="inputPair">
            <label for="email2">Дата производства работ</label>
            <input class="inputcard" id="email2" type="date">
        </div>
    </form></div>
    <div class="bordercard">
            <div class="inputPairBig">
                <label for="email2">Субъект Российской Федерации</label>
                <input class="inputcardBig" id="email2">
            </div>
    <form class="survey-form">
        <div class="inputPair">
            <label>№ по каталогу/индексу пункта</label>
            <input class="inputcard" id="name2">
        </div>
        <div class="inputPair">
            <label for="email2">Название пункта, класс, № марки</label>
            <input class="inputcard" id="email2">
        </div>
    </form>
    <form class="survey-form">
        <div class="inputPair">
            <label>Год закладки</label>
            <input class="inputcard" id="name2">
        </div>
        <div class="inputPair">
            <label for="email2">Высота знака (в метрах)</label>
            <input class="inputcard" id="email2">
        </div>
    </form></div>
    <div class="bordercard">
    <form class="survey-form">
        <div class="inputPair">
            <label>Тип центра</label>
            <input class="inputcard" id="name2">
        </div>
        <div class="inputPair">
            <label for="email2">Высота над уровнем моря (в метрах)</label>
            <input class="inputcard" id="email2">
        </div>
    </form>
    <form class="survey-form">
        <div class="inputPair">
            <label>Трапеции</label>
            <input class="inputcard" id="name2">
        </div>
        <div class="inputPair">
            <label for="email2">Координаты</label>
            <input class="inputcard" id="email2">
        </div>
    </form></div>
    <div class="bordercard"><div class="inputPairBig">
        <label for="email2">Примечания</label>
        <input class="inputcardBig" id="email2">
    </div>
    <div class="inputPairBig">
        <label for="email2">Составил(а)</label>
        <input class="inputcardBig" id="email2">
    </div></div>
</template>

<style lang="scss">
@import '/src/assets/scss/main.scss';

.titlecard{
    color: $mainFontColor;
    font-size: 200%;
    text-align: center;
}

.titlecardwrap{
    padding-top: 15%;
}

.survey-form{
    display: flex;
    flex-direction: row;
}

.inputPair {
    color: $mainFontColor;
    display: flex;
    flex-direction: column;
    margin: 3% 3%;
    width: 44%;
}

.inputPairBig{
    width: 94%;
    color: $mainFontColor;
    display: flex;
    flex-direction: column;
    margin: 3% 3% 1.5% 3%;
    
}

.inputcard{
    border-radius: 100px;
    border: 3px solid $grayColor;
    padding: 3%;
}

.inputcardBig{
    border-radius: 100px;
    border: 3px solid $grayColor;
    padding: 1.4%;
}

.bordercard{
    border-bottom: 2px solid $grayColor;
    margin: 2%;
}

</style>