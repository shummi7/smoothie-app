
var pageArray=["cup_page","liquid_page","base_page","fruit_page","ice_page","shake_page","final_page"];
var loading_page=document.getElementsByClassName('loading_page');
var main_page=document.getElementsByClassName('main_page');
var prepare_page=document.getElementsByClassName('prepare_page');
var fprepare_page=document.getElementsByClassName('fprepare_page');
var mprepare_page=document.getElementsByClassName('mprepare_page');
var reloadCount;
loading_page[0].style.display='';
main_page[0].style.display='none';
fprepare_page[0].style.display='none';
mprepare_page[0].style.display='none';

for(var i=0;i<pageArray.length;i++){
    document.getElementById(pageArray[i]).style.display='none';
}

setTimeout(function(){ 
    main_page[0].style.display='';
    document.getElementById(pageArray[0]).style.display=''; 
    loading_page[0].style.display='none';
}, 2000);
function pageOff(){
    loading_page[0].style.display='none';
    main_page[0].style.display='none';
    fprepare_page[0].style.display='none';
    // mprepare_page[0].style.display='';

for(var i=0;i<pageArray.length;i++){
    document.getElementById(pageArray[i]).style.display='none';
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var smoothie_cup_img=document.getElementsByClassName("smoothie_cup_img");
var shake_smoothie_cup_img=document.getElementsByClassName("shake_smoothie_cup_img")[0];
var final_smoothie_cup_img=document.getElementsByClassName("final_smoothie_cup_img")[0];
var next1=document.getElementsByClassName('next1')[0];
var cup=document.getElementsByClassName('cup');
var cup_name='';

function cupClick(i){

    cup_name=cup[i].className.split(" ")[1];
    var img_name="svgfile/"+cup_name+".svg";
    shake_smoothie_cup_img.src=img_name;
    final_smoothie_cup_img.src=img_name;
    for(var j=0;j<smoothie_cup_img.length;j++){
        smoothie_cup_img[j].src=img_name;
    }
   
    if(i===0){
    cup[1].style.border='none';
    }
    if(i===1){
    cup[0].style.border='none';
    }
    cup[i].style.border='2px dashed rgb(248, 125, 135)';
    next1.style.background='white';
}

function cupFunc(cupitem, i) {
cupitem.addEventListener('click',function(){
cupClick(i);
});
}

Array.from(cup).forEach(cupFunc);
next1.addEventListener('click',function(){
    if(next1.style.background==='white'){
        document.getElementById('cup_page').style.display='none';
        document.getElementById('liquid_page').style.display='';
    }
});


////////////////////////////////////////////////////////////////////
var next2=document.getElementsByClassName('next2')[0];
var rectangle1=document.getElementsByClassName('rectangle1');
var liquid_color=['#B0DCFF','#F3F192','#EAD8E8','#FACDA5'];
var liquid=document.getElementsByClassName('liquid');
var liquid_name='';

function liquidClick(i){
    liquid_name=liquid[i].className;
    rectangle1[0].style.background = liquid_color[i];
    rectangle1[0].classList.add('active0');
    for(var j=1;j<5;j++){
        rectangle1[j].style.background = liquid_color[i];
        rectangle1[j].classList.add('active_0');
    }
    next2.style.background='white';
}

function liquidFunc(liquiditem, i) {
liquiditem.addEventListener('click',function(){
liquidClick(i);
});
}

Array.from(liquid).forEach(liquidFunc);
next2.addEventListener('click',function(){
    if(rectangle1[0].style.background === ''){
        next2.style.background='rgba(255, 255, 255, 0.644)';
    }
    else{
        document.getElementById('liquid_page').style.display='none';
        document.getElementById('base_page').style.display='';
    }
});

///////////////////////////////////////////////////////////////////

var next3=document.getElementsByClassName('next3')[0];
var rectangle2=document.getElementsByClassName('rectangle2');
var base_color=['#91E24F','#FFFC6C','#D3E67E','#FFA029'];
var base=document.getElementsByClassName('base');
var base_name='';
var base_num;

function baseClick(i){
    base_name=base[i].className;
    base_num= base_name.replace( /^\D+/g, '');
    rectangle2[0].style.background = base_color[i];
    rectangle2[0].classList.add('active1');
    for(var j=0;j<4;j++){
        rectangle2[j].style.background = base_color[i];
        rectangle2[j].classList.add('active_1');
    }
    next3.style.background='white';
}

function baseFunc(baseitem, i){
baseitem.addEventListener('click',function(){
baseClick(i);
});
}

Array.from(base).forEach(baseFunc);
next3.addEventListener('click',function(){
    if(rectangle2[0].style.background === ''){
        next3.style.background='rgba(255, 255, 255, 0.644)';
    }
    else{
        document.getElementById('base_page').style.display='none';
        document.getElementById('fruit_page').style.display='';
    }
});

///////////////////////////////////////////////////////////////////

var next4=document.getElementsByClassName('next4')[0];
var rectangle3=document.getElementsByClassName('rectangle3');
var fruit_color=['#C73C48','#6A8C50','#B72CD4','#F07DA7'];
var fruit=document.getElementsByClassName('fruit');
var fruit_name='';
var fruit_num; 

function fruitClick(i){
    fruit_name=fruit[i].className;
    fruit_num= fruit_name.replace( /^\D+/g, '');
    rectangle3[0].style.background = fruit_color[i];
    rectangle3[0].classList.add('active2');
    for(var j=0;j<3;j++){
        rectangle3[j].style.background = fruit_color[i];
        rectangle3[j].classList.add('active_2');
    }
    next4.style.background='white';
}

function fruitFunc(fruititem, i) {
fruititem.addEventListener('click',function(){
fruitClick(i);
});
}

Array.from(fruit).forEach(fruitFunc);
next4.addEventListener('click',function(){
    if(rectangle3[0].style.background === ''){
        next4.style.background='rgba(255, 255, 255, 0.644)';
    }
    else{
        document.getElementById('fruit_page').style.display='none';
        document.getElementById('ice_page').style.display='';
    }
});

///////////////////////////////////////////////////////////////////////

var next5=document.getElementsByClassName('next5')[0];
var answer=document.getElementsByClassName('answer');
var ice_img=document.getElementsByClassName('ice_img')[0];
var ice_name='';

function ansClick(i){
    next5.style.background='white';
    if(i === 0){
        ice_name="Ice";
    ice_img.classList.remove("active4");
    ice_img.classList.add('active3');
    }
    if(i === 1){
        ice_name="No Ice";
    }
    if(i === 1 && ice_img.className === "ice_img active3"){
    ice_img.classList.remove("active3");
    ice_img.classList.add('active4');
    }
}

function ansFunc(ansitem, i){
ansitem.addEventListener('click',function(){
ansClick(i);
});
}

Array.from(answer).forEach(ansFunc);
next5.addEventListener('click',function(){
    if(rectangle3[0].style.background === ''){
        next5.style.background='rgba(255, 255, 255, 0.644)';
    }
    else{
        document.getElementById('ice_page').style.display='none';
        document.getElementById('shake_page').style.display='';
    }
});

////////////////////////////////////////////////////////////////////

var next6=document.getElementsByClassName('next6')[0];
var rectangle4=document.getElementsByClassName('rectangle4');
var smoothiecolor1=["#C95548","#8CAB33","#A24AC8","#FF6AB0"];
var smoothiecolor2=["#f58460","#a2c400","#a27ac8","#ff8eb0"];
var ingredients=["195 Calories, 4 g Fat, 1 g Saturated Fat, 55 mg Sodium, 35 g Carbs, 5g Fiber, 8g Protein.","274 Calories per serving. 58 grams Carbs, 5 grams Fat, 6 grams Protein. 22 grams Fiber.","Calories: 351, Fat: 1g (gram), Protein: 5.9g, Carbs: 92.1g, Calcium: 13%, Vitamin A: 86%, Vitamin C: 118%","Calories 258, Fat 4.5g 7%, Saturated Fat 3.6g 18%, Cholesterol 5mg 2%, Sodium 30.5mg 1%, Protein 5.9g 12%"];
var shake_smoothie_cup=document.getElementsByClassName('shake_smoothie_cup')[0];
var ing=document.getElementsByClassName('ing');
var fcolor='';

function fsmoothiFunc(){
    shake_smoothie_cup.classList.add('shakesmoothie_active');
    if(base_num === '1' || base_num === '3'){
        var sel1=parseInt(fruit_num);
        fcolor=smoothiecolor1[sel1-1];        
    }
    if(base_num === '2' || base_num === '4'){
        var sel2=parseInt(fruit_num);
        fcolor=smoothiecolor2[sel2-1];  
    }
    rectangle4[0].classList.add('mix');
    document.getElementsByClassName('mix')[0].style.background=fcolor;
    rectangle4[1].style.background=fcolor;
    next6.style.background='white';

    ing[0].innerHTML=liquid_name.replace( /\d/g, '').split(" ")[1];
    ing[1].innerHTML=base_name.replace( /\d/g, '').split(" ")[1];
    ing[2].innerHTML=fruit_name.replace( /\d/g, '').split(" ")[1];
    ing[3].innerHTML=ice_name;
    ing[4].innerHTML= ingredients[parseInt(fruit_num)-1];
}

shake_smoothie_cup.addEventListener('click',fsmoothiFunc)
next6.addEventListener('click',function(){
    if(rectangle4[0].style.background === ''){
        next6.style.background='rgba(255, 255, 255, 0.644)';
    }
    else{
        document.getElementById('shake_page').style.display='none';
        document.getElementById('final_page').style.display='';
    }
});

/////////////////////////////////////////////////////////////////

var next7=document.getElementsByClassName('next7')[0];
next7.style.background='rgba(255, 255, 255)';
next7.addEventListener('click',function(){
    alert('Thank You');
});

////////////////////////////////////////////////////////////////////

var more_recipe=document.getElementsByClassName('more_recipe')[0];

function morerecipeFunc(){
mprepare_page[0].style.display='';
}
more_recipe.addEventListener('click',morerecipeFunc);

var header_home=document.getElementsByClassName('header_home')[0];
function header_homeFunc(){
window.location.reload();
}
header_home.addEventListener('click',header_homeFunc);

/////////////////////////////////////////////////////////////////////



