!function a(r,s,c){function d(n,t){if(!s[n]){if(!r[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(l)return l(n,!0);throw new Error("Cannot find module '"+n+"'")}var i=s[n]={exports:{}};r[n][0].call(i.exports,function(t){var e=r[n][1][t];return d(e||t)},i,i.exports,a,r,s,c)}return s[n].exports}for(var l="function"==typeof require&&require,t=0;t<c.length;t++)d(c[t]);return d}({1:[function(t,e,n){document.addEventListener("DOMContentLoaded",function(){var i=document.getElementsByClassName("products__item"),a=document.getElementsByClassName("products")[0],t=document.getElementsByClassName("products__itemBttn"),e=document.getElementById("productSort"),u=document.getElementsByClassName("cart")[0],m=document.getElementsByClassName("cart__text")[0],p=document.getElementsByClassName("cartBttn")[0],r=[],n={},s=i.length,c=t.length,v={},h=[],d=(document.getElementsByClassName("cart__item"),document.getElementsByClassName("cart__itemSum")[0]);function l(t){p.textContent="Zwiń koszyk",p.setAttribute("data-switch","on"),u.classList.add("cart--open");var e=[];this.classList.add("products__itemBttn--hide"),m.style.display="none",e.push(this.parentNode);for(var n=0;n<e.length;n++){v.img=e[n].children[0].getAttribute("style"),v.name=e[n].children[1].innerText,v.price=Number(e[n].children[2].innerText),h.push(v);var i=document.createElement("div");i.classList.add("cart__item"),i.innerHTML='<div class="cart__itemImg" style="'+h[n].img+'"></div><div class="cart__itemName">'+h[n].name+"</div>";var a=document.createElement("div");a.classList.add("cart__itemCalc","calc");var r=document.createElement("div");r.classList.add("calc__inputBox");var s=document.createElement("input");s.classList.add("calc__inputBoxField"),s.setAttribute("value",1),s.setAttribute("min",0),s.addEventListener("keyup",f,!1);var c=document.createElement("button");c.classList.add("calc__inputBttn","calc__inputBttnMore"),c.textContent="+",c.addEventListener("click",L,!1);var d=document.createElement("button");d.classList.add("calc__inputBttn","calc__inputBttnLess"),d.textContent="-",d.addEventListener("click",L,!1);var l=document.createElement("div");l.classList.add("cart__itemPrice"),l.textContent=h[n].price,l.setAttribute("value",h[n].price);var o=document.createElement("button");o.classList.add("cart__itemRemove"),o.textContent="+",o.addEventListener("click",_,!1),r.appendChild(s),a.appendChild(r),a.appendChild(c),a.appendChild(d),a.appendChild(l),i.appendChild(a),i.appendChild(o),u.insertBefore(i,u.childNodes[u.childElementCount])}C(),t.preventDefault()}function _(t){this.parentNode.children[2];for(var e=0;e<i.length;e++)i[e].children[1].innerText===this.parentNode.children[1].textContent&&i[e].children[3].classList.remove("products__itemBttn--hide");this.parentNode.outerHTML="",u.children[1].classList.contains("cart__item")||(p.textContent="Rowiń koszyk",p.setAttribute("data-switch","off"),u.classList.remove("cart--open"),m.style.display="block"),C(),t.preventDefault()}function f(){var t=this.value,e=this.parentNode.parentNode.lastChild,n=Number(e.getAttribute("value"));n*=t,t=t,e.innerHTML=n,C()}function L(t){var e=this.parentNode.firstChild.children[0],n=e.value,i=this.parentNode.lastChild,a=Number(i.getAttribute("value"));this.classList.contains("calc__inputBttnMore")&&(n++,this.classList.add("calc__inputBttnMore--anim")),this.classList.contains("calc__inputBttnLess")&&(n--,this.classList.add("calc__inputBttnLess--anim")),n<0&&(n=0),a*=n,e.value=n,i.innerHTML=a,C(),t.preventDefault()}function C(){d.innerHTML="";for(var t=0,e=document.getElementsByClassName("cart__itemPrice"),n=0;n<e.length;n++){t+=Number(e[n].textContent),d.innerHTML=t}}for(var o=0;o<c;o++)t[o].addEventListener("click",l,!1);p.addEventListener("click",function(t){"off"===this.getAttribute("data-switch")?(this.textContent="Zwiń koszyk",this.setAttribute("data-switch","on"),u.classList.add("cart--open")):(this.textContent="Rozwiń koszyk",this.setAttribute("data-switch","off"),u.classList.remove("cart--open")),t.preventDefault()},!1),e.addEventListener("change",function(t){!function(){r=[];for(var t=0;t<s;t++)(n={}).img=i[t].children[0].getAttribute("style"),n.name=i[t].children[1].innerText,n.price=Number(i[t].children[2].innerText),n.bttn=i[t].children[3].classList,r.push(n)}(),"price"===e.value&&r.sort(function(t,e){return t.price<e.price?-1:t.price>e.price?1:void 0}),"name"===e.value&&r.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:void 0}),function(){i[0].parentElement.innerHTML="";for(var t=0;t<s;t++){var e=document.createElement("div");e.classList.add("products__item"),e.innerHTML='<div class="products__itemImg" style="'+r[t].img+'"></div><div class="products__itemName">'+r[t].name+'</div><div class="products__itemPrice">'+r[t].price+"</div>";var n=document.createElement("button");n.setAttribute("class",r[t].bttn.value),n.innerText="Dodaj do koszyka",n.addEventListener("click",l,!1),e.appendChild(n),a.appendChild(e)}}(),t.preventDefault()},!1)},!1)},{}]},{},[1]);