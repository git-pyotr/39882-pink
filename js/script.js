!function(){function a(a){var b=a.parentElement;a.addEventListener("tap",function(a){a.preventDefault,b.parentElement.removeChild(b);var d=parseInt(m.value,10);m.value=--d+" чел",0==d&&c(g[1])})}function b(a,b){var c=[2,0,1,1,1,2];return b[a%100>4&&20>a%100?2:c[5>a%10?a%10:5]]}function c(a){a.classList.add("contest-form__number-change-btn--disable"),a.classList.remove("contest-form__number-change-btn--minus")}function d(a){a.classList.remove("contest-form__number-change-btn--disable"),a.classList.add("contest-form__number-change-btn--minus")}function e(a,b){var c=new XMLHttpRequest,d=(new Date).getTime();c.open("post","https://echo.htmlacademy.ru/adaptive?"+d),c.addEventListener("readystatechange",function(){4==c.readyState&&b(c.responseText)}),c.send(a)}var f=document.querySelector(".main-menu__icon"),g=document.querySelectorAll(".contest-form__number-change-btn--minus"),h=document.querySelectorAll(".contest-form__number-change-btn--plus"),i=document.querySelectorAll(".contest-form__delete"),j=document.querySelector(".contest-form__fieldset--companions").firstElementChild,k=document.querySelector("#companion-name-input").innerHTML;f.addEventListener("tap",function(a){a.preventDefault(),this.parentNode.parentNode.classList.toggle("main-menu--closed")});var l=g[0].nextElementSibling;g[0].addEventListener("tap",function(a){a.preventDefault();var e=parseInt(l.value,10);e>2?(l.value=--e+b(e,[" день"," дня"," дней"]),this.classList.contains("contest-form__number-change-btn--disable")&&d(this)):(l.value="1 день",c(this))}),h[0].addEventListener("tap",function(a){a.preventDefault();var e=parseInt(l.value,10);e>=1?(l.value=++e+b(e,[" день"," дня"," дней"]),g[0].classList.contains("contest-form__number-change-btn--disable")&&d(g[0])):(l.value="1 день",c(g[0]))});for(var m=g[1].nextElementSibling,n=0;n<i.length;n++)a(i[n]);if(g[1].addEventListener("tap",function(a){a.preventDefault();var b=parseInt(m.value,10);b>1?m.value=--b+" чел":(m.value="0 чел",c(this)),b>0&&j.removeChild(j.lastElementChild)}),h[1].addEventListener("tap",function(b){b.preventDefault();var c=parseInt(m.value,10);m.value=++c+" чел",g[1].classList.contains("contest-form__number-change-btn--disable")&&d(g[1]);var e=j.lastElementChild.querySelector(".contest-form__companion-number");e=e?parseInt(e.innerHTML)+1:c;var f=Mustache.render(k,{number:e});j.insertAdjacentHTML("beforeEnd",f),i=document.querySelectorAll(".contest-form__delete"),a(i[i.length-1])}),"FormData"in window){var o=document.querySelector(".contest-form");o.addEventListener("submit",function(a){a.preventDefault();var b=new FormData(o);e(b,function(a){console.log(a)})})}}();