alert("Расчёт стоимости работы! Продолжим?(Прошу без лишних пробелов и в начале с Заглавной буквы)");



var TSITE = prompt("ТИП САЙТА(Одностраничный сайт, Сайт-визитка, Корпоративные сайты, Промо-сайты)");





console.log(TSITE);
if(TSITE == "Одностраничный сайт" || TSITE == "Сайт-визитка" || TSITE == "Корпоративные сайты" || TSITE == "Промо-сайты"){
   	var Activ1 = 1;
	console.log(Activ1);
   }
else
{
	console.log(Activ1);
}





var DIZAIN = prompt("ДИЗАЙН(Свой,Чужой,Не мой)");





console.log(DIZAIN);
if(DIZAIN == "Свой" || DIZAIN == "Чужой" || DIZAIN == "Не мой"){
   	var Activ2 = 1;
	console.log(Activ2);
   }
else
{
	console.log(Activ2);
}




var ADAPTIVITI = prompt("АДАПТИВНОСТЬ(Под компьютеры,Под телефоны, И то и другое)");



console.log(ADAPTIVITI);
if(ADAPTIVITI == "Под компьютеры" || ADAPTIVITI == "Под телефоны" || ADAPTIVITI == "И то и другое"){
   	var Activ3 = 1;
	console.log(Activ3);
   }
else
{
	console.log(Activ3);
}






var CENATSITE = 0;
var CENADIZAIN = 0;
var CENAADAPTIVITI = 0;

var SROKTSITE = 0;
var SROKDIZAIN = 0;
var SROKADAPTIVITI = 0;




if(TSITE == "Одностраничный сайт")
	{
		var CENATSITE = 1000;
		var SROKTSITE = 2;
	}

if(TSITE == "Сайт-визитка")
	{
		var CENATSITE = 2000;
		var SROKTSITE = 4;
	}

if(TSITE == "Корпоративные сайты")
	{
		var CENATSITE = 3000;
		var SROKTSITE = 5;
	}

if(TSITE == "Промо-сайты")
	{
		var CENATSITE = 1500;
		var SROKTSITE = 3;
	}






if(DIZAIN == "Свой")
	{
		var CENADIZAIN = 0;
		var SROKDIZAIN = 0;
	}

if(DIZAIN == "Чужой")
	{
		var CENADIZAIN = 2000;
		var SROKDIZAIN = 2;
	}

if(DIZAIN == "Не мой")
	{
		var CENADIZAIN = 3000;
		var SROKDIZAIN = 3;
	}







if(ADAPTIVITI == "Под компьютеры")
	{
		var CENAADAPTIVITI = 1980;
		var SROKADAPTIVITI = 1;
	}

if(ADAPTIVITI == "Под телефоны")
	{
		var CENAADAPTIVITI = 4000;
		var SROKADAPTIVITI = 2;
	}

if(ADAPTIVITI == "И то и другое")
	{
		var CENAADAPTIVITI = 10000;
		var SROKADAPTIVITI = 4;
	}

console.log("||");
var ActiveDetected = Activ1 + Activ2 + Activ3;

console.log(ActiveDetected);
if(ActiveDetected == 3){

var SUMITOG = CENATSITE + CENADIZAIN + CENAADAPTIVITI;
var SROKITOG = SROKTSITE + SROKDIZAIN + SROKADAPTIVITI;

console.log(".");
console.log("Цена :" , SUMITOG , "Рублей");
console.log("Срок :" , SROKITOG, "Дней");
	}
else
	{
		console.log(".");
		console.log("Вы Наверное написали где-то неправильно или пропустили один из пунктов... Можете перезагрузить сайт и начать заново)");
	}