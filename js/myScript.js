"use strict"
alert ("Здравствуй уважаемый клиент. Давай ознакомимся с тем, что я могу предложить?");

let name_type; {
do {name_type = prompt("Какой сайт необходим? Сайт-визитка - 1; Интернет-магазин - 2; Блог - 3.");} 
while (name_type >= 4 && name_type);
}

if (name_type.replace (/\d/g, '').length) {
alert ('Упс, надо было указать цифру!');
do {name_type = prompt("Какой сайт необходим? Сайт-визитка - 1; Интернет-магазин - 2; Блог - 3.");} 
while (name_type >= 4 && name_type)
}

let x;
if (name_type === "1") {
let a = 1;
let b = 10000;
let c = a*b;
x = c;    
} 

if (name_type === "2") {
let a = 2;
let b = 12500;
let c = a*b;
x = c;    
} 

if (name_type === "3") {
let a = 3;
let b = 4000;
let c = a*b;
x = c;    
} 

alert("Идем дальше, осталось еще 2 вопроса!");

let name_design;{
do {name_design = prompt("Какой требуется дизайн? Минимализм - 1; Классика - 2; Hi-tech - 3; Полигональный - 4; Информационный - 5.");} 
while (name_design >= 6 && name_design);
}

if (name_design.replace (/\d/g, '').length) {
alert ('Упс, надо было указать цифру!');
do {name_design = prompt("Какой требуется дизайн? Минимализм - 1; Классика - 2; Hi-tech - 3; Полигональный - 4; Информационный - 5.");} 
while (name_design >= 6 && name_design);
}
    
let y;
if (name_design === "1") {
let a = 1;
let b = 1000;
let c = a*b;
y = c;    
} 

if (name_design === "2") {
let a = 2;
let b = 750;
let c = a*b;
y = c;    
} 

if (name_design === "3") {
let a = 3;
let b = 1700;
let c = a*b;
y = c;    
} 

if (name_design === "4") {
let a = 1;
let b = 1000;
let c = a*b;
y = c;    
} 

if (name_design === "5") {
let a = 1;
let b = 1200;
let c = a*b;
y = c;    
} 

alert("Идем дальше, осталось еще 1 вопрос!");

let name_adaptation; {
do {name_adaptation = prompt("Под что адаптируем сайт? Компьютер - 1; Мобильное устройство - 2; Сайт должен отобразиться на любом утюге =) - 3.");} 
while (name_adaptation >= 4 && name_adaptation);
}

if (name_adaptation.replace (/\d/g, '').length) {
alert ('Упс, надо было указать цифру!');
do {name_adaptation = prompt("Под что адаптируем сайт? Компьютер - 1; Мобильное устройство - 2; Сайт должен отобразиться на любом утюге =) - 3.");} 
while (name_adaptation >= 4 && name_adaptation);
}   
    
let z;
if (name_adaptation === "1") {
let a = 1;
let b = 1000;
let c = a*b;
z = c;    
} 
 
if (name_adaptation === "2") {
let a = 2;
let b = 1000;
let c = a*b;
z = c;    
} 

if (name_adaptation === "3") {
let a = 3;
let b = 1000;
let c = a*b;
z = c;    
} 
 
alert("Подсчитываем приблизительную стоимость...");

let p; 
p = x + y + z;

if(isNaN(p)){
alert("При вводе данных вы допустили ошибку. Попробуйте снова в калькуляторе на сайте. Спасибо!");   
}

if (p>0){
alert("Приблизительная стоимость согласно выбранным параметрам составила " +(p)+ " рос. рублей");   
}


     





