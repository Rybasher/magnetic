"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".menu"),body=document.querySelector("body");burger.addEventListener("click",(function(){burger.classList.toggle("active"),menu.classList.toggle("active"),body.classList.toggle("lock")}));for(var acc=document.getElementsByClassName("accordion"),i=0;i<acc.length;i++)acc[i].addEventListener("click",(function(){this.classList.toggle("active");for(var e=0;e<acc.length;e++)acc[e]!=this&&(acc[e].classList.remove("active"),acc[e].nextElementSibling.style.maxHeight=null);var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}));