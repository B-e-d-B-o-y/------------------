<template>
    <header>
                <div class="form_radio_btn_header">
                    <input id="radioheader_main" type="radio" name="radioheader" value="1" checked>
                    <label for="radioheader_main">Главная</label>
                </div>
                        
                <div class="form_radio_btn_header">
                    <input id="radioheader_card" type="radio" name="radioheader" value="2">
                    <label for="radioheader_card">Карточка</label>
                </div>
                        
                <div class="form_radio_btn_header">
                    <input id="radioheader_remember" type="radio" name="radioheader" value="3">
                    <label for="radioheader_remember">Помощь</label>
                </div>
                        
                <div class="form_radio_btn_header">
                    <input id="radioheader_map" type="radio" name="radioheader" value="4">
                    <label for="radioheader_map">Карта</label>
                </div>
                <div class="form_radio_btn_header">
                    <input id="radioheader_check" type="radio" name="radioheader" value="5">
                    <label for="radioheader_check">Проверка</label>
                </div>
                        
                <div class="form_radio_btn_header">
                    <input id="radioheader_profile" type="radio" name="radioheader" value="6">
                    <label for="radioheader_profile">Профиль</label>
                </div>
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

.form_radio_btn_header {
	display: inline-block;
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
.form_radio_btn_header input[type=radio] {
	display: none;
}
.form_radio_btn_header label {
	display: inline-block;
	cursor: pointer;
	border: none;
	user-select: none;
    color: $mainFontColor;
}
 
/* Checked */
.form_radio_btn_header input[type=radio]:checked + label {
	color: $greenColor;
    border-bottom: 2px solid $greenColor;
}
 
/* Hover */
.form_radio_btn_header label:hover {
    color: $greenColor
}

</style>