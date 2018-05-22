let item = document.getElementsByClassName('products__item'),
  products = document.getElementsByClassName('products')[0],
  itemBttn = document.getElementsByClassName('products__itemBttn'),
  selectElem = document.getElementById('productSort'),
  cart = document.getElementsByClassName('cart')[0],
  cartText = document.getElementsByClassName('cart__text')[0],
  cartBttn = document.getElementsByClassName('cartBttn')[0],
  itemsArr = [],
  singleItem = {},
  itemLen = item.length,
  itemBttnLen = itemBttn.length,
  cartObj = {},
  cartItem = [],
  cartItemElem = document.getElementsByClassName('cart__item');

document.addEventListener("DOMContentLoaded", function () {

  for (var index = 0; index < itemBttnLen; index++) {
    itemBttn[index].addEventListener('click', addToCart, false);
  }
  cartBttn.addEventListener('click', showCart, false);
  selectElem.addEventListener('change', sortItems, false);

  function showCart() {
    if (this.getAttribute('data-switch') === "off") {
      this.textContent = 'Zwiń koszyk';
      this.setAttribute('data-switch', 'on');
      cart.classList.add('cart--open');
    } else {
      this.textContent = 'Rozwiń koszyk';
      this.setAttribute('data-switch', 'off');
      cart.classList.remove('cart--open');
    }
  }

  function addToCart() {
    cartBttn.textContent = 'Zwiń koszyk';
    cartBttn.setAttribute('data-switch', 'on');
    cart.classList.add('cart--open');
    let cartGetItem = [];
    this.classList.add('products__itemBttn--hide');
    cartText.textContent = '';
    cartGetItem.push(this.parentNode);

    for (var index = 0; index < cartGetItem.length; index++) {
      cartObj.img = cartGetItem[index].children[0].getAttribute('style');
      cartObj.name = cartGetItem[index].children[1].innerText;
      cartObj.price = Number(cartGetItem[index].children[2].innerText);
      cartItem.push(cartObj);

      let cartItemElem = document.createElement('div');
      cartItemElem.classList.add('cart__item');
      cartItemElem.innerHTML = '<div class="cart__itemImg" style="' + cartItem[index].img + '"></div><div class="cart__itemName">' + cartItem[index].name + '</div><div class="cart__itemPrice" value="' + cartItem[index].price + '">' + cartItem[index].price + '</div>';
      
      let calc = document.createElement('div');
      calc.classList.add('cart__itemCalc','calc');
      
      let calcBox = document.createElement('div');
      calcBox.classList.add('calc__inputBox');
      
      let calcField = document.createElement('input');
      calcField.classList.add('calc__inputBoxField');
      calcField.setAttribute('value', 1);
      calcField.setAttribute('type', 'number');
      calcField.setAttribute('min', 0);
      
      let calcMore = document.createElement('button');
      calcMore.classList.add('calc__inputBttn', 'calc__inputBttnMore');
      calcMore.textContent = '+';
      calcMore.addEventListener('click', count, false);
      
      let calcLess = document.createElement('button');
      calcLess.classList.add('calc__inputBttn', 'calc__inputBttnLess');
      calcLess.textContent = '-';
      calcLess.addEventListener('click', count, false);

      calcBox.appendChild(calcField);
      calc.appendChild(calcBox);
      calc.appendChild(calcMore);
      calc.appendChild(calcLess);
      cartItemElem.appendChild(calc);
      cart.appendChild(cartItemElem);
      //cart.appendChild(calc);
    }
    console.log(cart);
  }

  // function more() {
  //   let inputField = this.parentNode.children[0].children[0];
  //   let val = inputField.value;
  //   val++;
  //   if(val < 0) {
  //     val = 0;
  //   }
  //   inputField.value = val;
  //   //console.log(inputField);
  // }

  // function less() {
  //   let inputField = this.parentNode.children[0].children[0];
  //   let val = inputField.value;
  //   val--;
  //   if(val < 0) {
  //     val = 0;
  //   }
  //   inputField.value = val;
  //   //console.log(inputField);
  // }

  function count() {
    let inputField = this.parentNode.children[0].children[0];
    let val = inputField.value;
    if(this.classList.contains('calc__inputBttnMore')) {
      val++;
    }
    if(this.classList.contains('calc__inputBttnLess')) {
      val--;
    }
    if(val < 0) {
      val = 0;
    }
    inputField.value = val;
    //console.log(inputField);
  }
  
  function makeItemsArr() {
    itemsArr = [];
    for (var i = 0; i < itemLen; i++) {
      singleItem = {};
      singleItem.img = item[i].children[0].getAttribute('style');
      singleItem.name = item[i].children[1].innerText;
      singleItem.price = Number(item[i].children[2].innerText);
      singleItem.bttn = item[i].children[3].classList;
      itemsArr.push(singleItem);
    }
    console.log(itemsArr);
  }
  //makeItemsArr();

  function sortItems() {
    makeItemsArr();
    if (selectElem.value === 'price') {
      itemsArr.sort(function (a, b) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
      });
    }
    if (selectElem.value === 'name') {
      itemsArr.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      });
    }
    showSorted();
  }

  function showSorted() {
    
    while (item.length > 0) {
      item[0].remove();
    }
    //console.log('>>> czyszczenie skonczone!');

    for (var index = 0; index < itemLen; index++) {
      let divItem = document.createElement('div');
      divItem.classList.add('products__item');
      divItem.innerHTML = '<div class="products__itemImg" style="' + itemsArr[index].img + '"></div><div class="products__itemName">' + itemsArr[index].name + '</div><div class="products__itemPrice">' + itemsArr[index].price + '</div>';
      let itmBttn = document.createElement('button');
      itmBttn.setAttribute('class',itemsArr[index].bttn.value);
      itmBttn.innerText = 'Dodaj do koszyka';
      itmBttn.addEventListener('click', addToCart, false);

      divItem.appendChild(itmBttn);
      products.appendChild(divItem);
    };
    //console.log(' > wstawiono ' + index + ' elementów');
  }

  //DOMContentLoaded end
}, false);