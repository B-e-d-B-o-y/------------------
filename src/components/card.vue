<template>
    <div class="titlecardwrap"><h1 class="titlecard">Карточка обследования пункта ГГС</h1></div>

    <div class="bordercard">
        <form class="survey-form">
            <div class="inputPair">
                <label>Кем выполнены работы по обследованию</label>
                <input class="inputcard" id="username">
            </div>
            <div class="inputPair">
                <label>Дата производства работ</label>
                <input class="inputcard" id="data" type="date">
            </div>
        </form>
    </div>


    <div class="bordercard">
        <div class="inputPairBig">
            <label>Субъект Российской Федерации</label>
            <input class="inputcardBig" id="subjects">
        </div>

        <form class="survey-form">
            <div class="inputPair">
                <label>№ по каталогу/индексу пункта</label>
                <input class="inputcard" id="itemnumber">
            </div>
            <div class="inputPair">
                <label>Название пункта, класс, № марки</label>
                <input class="inputcard" id="titleitem">
            </div>
        </form>

        <form class="survey-form">
            <div class="inputPair">
                <label>Год закладки</label>
                <input class="inputcard" id="yearmark">
            </div>
            <div class="inputPair">
                <label>Высота знака (в метрах)</label>
                <input class="inputcard" id="signheight">
            </div>
        </form>
    </div>


    <div class="bordercard">
        <form class="survey-form">
            <div class="inputPair">
                <label>Тип центра</label>
                <input class="inputcard" id="typecenter">
            </div>
            <div class="inputPair">
                <label>Высота над уровнем моря (в метрах)</label>
                <input class="inputcard" id="heightbysea">
            </div>
        </form>

        <form class="survey-form">
            <div class="inputPair">
                <label>Трапеции</label>
                <input class="inputcard" id="trapezoids">
            </div>
            <div class="inputPair">
                <label>Координаты</label>
                <input class="inputcard" id="coordinates">
            </div>
        </form>
    </div>

    <div class="bordercard">

        <label class="labelcard">Тип знака</label>

        <div class="inputRadioBig">
            <div class="form_radio_btn">
                <input id="signal" type="radio" name="typeofsign" value="1" checked>
                <label for="signal">Сигнал</label>
            </div>
                            
            <div class="form_radio_btn">
                <input id="pyramid" type="radio" name="typeofsign" value="2">
                <label for="pyramid">Пирамида</label>
            </div>
                            
            <div class="form_radio_btn">
                <input id="tripod" type="radio" name="typeofsign" value="3">
                <label for="tripod">Штатив</label>
            </div>
                            
            <div class="form_radio_btn">
                <input id="tour" type="radio" name="typeofsign" value="4">
                <label for="tour">Тур</label>
            </div>
        </div>

        <div class="labelcardwrapper">  
            <label class="labelcard">Опознавательный столб (знак)</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="identificationpole+" type="radio" name="identificationpole" value="1" checked>
                    <label for="identificationpole+">Устанавливается</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="identificationpole-" type="radio" name="identificationpole" value="2">
                    <label for="identificationpole-">Не устанавливается</label>
                </div>
            </div>
        </div>        


        <div class="labelcardwrapper">  
            <label class="labelcard">Монолит I</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="monolith1+" type="radio" name="monolith1" value="1" checked>
                    <label for="monolith1+">Сохранился</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="monolith1-" type="radio" name="monolith1" value="2">
                    <label for="monolith1-">Не сохранился</label>
                </div>
            </div>
        </div>     


        <div class="labelcardwrapper">  
            <label class="labelcard">Монолит II</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="monolith2+" type="radio" name="monolith2" value="1" checked>
                    <label for="monolith2+">Скрывался</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="monolith2-" type="radio" name="monolith2" value="2">
                    <label for="monolith2-">Не скрывался</label>
                </div>
            </div>
        </div>        


        <div class="labelcardwrapper">  
            <label class="labelcard">Монолит III и IV</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="monolith34+" type="radio" name="monolith34" value="1" checked>
                    <label for="monolith34+">Вскрывался</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="monolith34-" type="radio" name="monolith34" value="2">
                    <label for="monolith34-">Не вскрывался</label>
                </div>
            </div>
        </div>    


        <div class="labelcardwrapper">  
            <label class="labelcard">Наружный знак</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="outdoorsign+" type="radio" name="outdoorsign" value="1" checked>
                    <label for="outdoorsign+">Сохранился</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="outdoorsign-" type="radio" name="outdoorsign" value="2">
                    <label for="outdoorsign-">Не сохранился</label>
                </div>
            </div>
        </div>    


        <div class="labelcardwrapper">  
            <label class="labelcard">ОРП I</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="ORP1+" type="radio" name="ORP1" value="1" checked>
                    <label for="ORP1+">Сохранился</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="ORP1-" type="radio" name="ORP1" value="2">
                    <label for="ORP1-">Не сохранился</label>
                </div>
            </div>
        </div>    

        <div class="labelcardwrapper">  
            <label class="labelcard">ОРП II</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="ORP2+" type="radio" name="ORP2" value="1" checked>
                    <label for="ORP2+">Сохранился</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="ORP2-" type="radio" name="ORP2" value="2">
                    <label for="ORP2-">Не сохранился</label>
                </div>
            </div>
        </div>        


        <div class="labelcardwrapper">  
            <label class="labelcard">Окопка</label>

            <div class="inputRadio">
                <div class="form_radio_btn">
                    <input id="trench+" type="radio" name="trench" value="1" checked>
                    <label for="trench+">Читается</label>
                </div>
                            
                <div class="form_radio_btn">
                    <input id="trench-" type="radio" name="trench" value="2">
                    <label for="trench-">Не читается</label>
                </div>
            </div>
        </div>
    </div>


    <div class="bordercard">
        
        <label class="labelcard">Возможность выполненения работ по обследованию</label>

        <div class="inputRadioBig">
            <div class="form_radio_btn">
                <input id="possible" type="radio" name="examinationpossibility " value="1" checked>
                <label for="possible">Возможны</label>
            </div>
                            
            <div class="form_radio_btn">
                <input id="conditionallypossible" type="radio" name="examinationpossibility " value="2">
                <label for="conditionallypossible">Условно возможны</label>
            </div>

            <div class="form_radio_btn">
                <input id="impossible" type="radio" name="examinationpossibility " value="3">
                <label for="impossible">Невозможны</label>
            </div>
        </div>

        <div class="inputPairBig">
            <label>Высота верхней марки(в метрах)</label>
            <input class="inputcardBig" id="subjects">
        </div>
    </div>

    <div class="bordercard">

    <div class="labelcardwrapper">  
        <label class="labelcard">Фотография внешнего оформления(в перспективе)</label>

        <input class="inputphoto" type="file">
    </div>        

    <div class="labelcardwrapper">  
        <label class="labelcard">Фотография марки центра вблизи</label>

        <input class="inputphoto" type="file">
    </div>        
    </div>

    <div class="inputPairBig">
        <label>Примечания</label>
        <input class="inputcardBig" id="notes">
    </div>

    <div class="inputPairBig">
        <label>Составил(а)</label>
        <input class="inputcardBig" id="madeup">
    </div>

    <div style="text-align: center;"><button id="create">Создать</button></div>

</template>

<style lang="scss">
@import '/src/assets/scss/main.scss';

.titlecard{
    color: $mainFontColor;
    font-size: $titleCard;
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

.form_radio_btn {
	display: inline-block;
    padding: 1% 6%;
}

.form_radio_btn input[type=radio] {
	display: none;
}
.form_radio_btn label {
	display: inline-block;
	cursor: pointer;
	border: none;
    font-size: $cardFontSize;
	user-select: none;
    color: $mainFontColor;
}
 
/* Checked */
.form_radio_btn input[type=radio]:checked + label {
	color: $greenColor;
    border-bottom: 2px solid $greenColor;
}
 
/* Hover */
.form_radio_btn label:hover {
	color: $grayColor;
    border-bottom: 2px solid $grayColor;
}
 
/* Disabled */
.form_radio_btn input[type=radio]:disabled + label {
	background: #efefef;
	color: #666;
}

.inputRadioBig{
    border-radius: 100px;
    border: 3px solid $grayColor;
    padding: 1% 1.4%;
    width: 94%;
    margin: 0% 3% 5% 3%;
}

.labelcard{
    color: $mainFontColor;
    display: flex;
    margin: 0% 3%;
}

.inputRadio{
    border-radius: 100px;
    border: 3px solid $grayColor;
    padding: 2% 0%;
}

.labelcardwrapper{
    display: inline-block;
    width: 44%;
    margin: 2% 3%;
}

.inputphoto{
    border-radius: 100px;
    border: 3px solid $grayColor;
    padding: 3%;
    width: 100%;
    color: $mainFontColor;
}

input[type=file]::file-selector-button {
    border: none;
    padding: 1%;
    border-radius: 100px;
    background-color: $grayColor;
    color: white;
}

input[type=file]::file-selector-button:hover {
    background-color: $greenColor;
}

#create{
    background-color: $grayColor;
    color: white;
    border-radius: 100px;
    font-size: $cardFontSize;
    width: 35%;
    padding: 1%;
    margin: 2%;
}

#create:hover{
    background-color: $greenColor;
}


#create:active{
    color: $mainFontColor;
}
</style>