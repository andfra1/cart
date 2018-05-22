document.addEventListener("DOMContentLoaded", function () {
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
    cartItemElem = document.getElementsByClassName('cart__item'),
    sum = document.getElementsByClassName('cart__itemSum')[0];

  //cart show/hide toggle
  function showCart(e) {
    if (this.getAttribute('data-switch') === "off") {
      this.textContent = 'Zwiń koszyk';
      this.setAttribute('data-switch', 'on');
      cart.classList.add('cart--open');
    } else {
      this.textContent = 'Rozwiń koszyk';
      this.setAttribute('data-switch', 'off');
      cart.classList.remove('cart--open');
    }
    e.preventDefault();
  }

  //adding to cart
  function addToCart(e) {
    //changing values of existing elements
    cartBttn.textContent = 'Zwiń koszyk';
    cartBttn.setAttribute('data-switch', 'on');
    cart.classList.add('cart--open');
    let cartGetItem = [];
    this.classList.add('products__itemBttn--hide');
    cartText.style.display = 'none';
    cartGetItem.push(this.parentNode);

    //makes an object with items (products)
    for (var index = 0; index < cartGetItem.length; index++) {
      cartObj.img = cartGetItem[index].children[0].getAttribute('style');
      cartObj.name = cartGetItem[index].children[1].innerText;
      cartObj.price = Number(cartGetItem[index].children[2].innerText);
      cartItem.push(cartObj);

      let cartItemElem = document.createElement('div');
      cartItemElem.classList.add('cart__item');
      cartItemElem.innerHTML = '<div class="cart__itemImg" style="' + cartItem[index].img + '"></div><div class="cart__itemName">' + cartItem[index].name + '</div>';

      let calc = document.createElement('div');
      calc.classList.add('cart__itemCalc', 'calc');

      let calcBox = document.createElement('div');
      calcBox.classList.add('calc__inputBox');

      let calcField = document.createElement('input');
      calcField.classList.add('calc__inputBoxField');
      calcField.setAttribute('value', 1);
      calcField.setAttribute('min', 0);
      calcField.addEventListener('keyup', inptVal, false);

      let calcMore = document.createElement('button');
      calcMore.classList.add('calc__inputBttn', 'calc__inputBttnMore');
      calcMore.textContent = '+';
      calcMore.addEventListener('click', count, false);

      let calcLess = document.createElement('button');
      calcLess.classList.add('calc__inputBttn', 'calc__inputBttnLess');
      calcLess.textContent = '-';
      calcLess.addEventListener('click', count, false);

      let calcPrice = document.createElement('div');
      calcPrice.classList.add('cart__itemPrice');
      calcPrice.textContent = cartItem[index].price;
      calcPrice.setAttribute('value', cartItem[index].price);

      let cartRemove = document.createElement('button');
      cartRemove.classList.add('cart__itemRemove');
      cartRemove.textContent = '+';
      cartRemove.addEventListener('click', removeFromCart, false);

      calcBox.appendChild(calcField);
      calc.appendChild(calcBox);
      calc.appendChild(calcMore);
      calc.appendChild(calcLess);
      calc.appendChild(calcPrice);
      cartItemElem.appendChild(calc);
      cartItemElem.appendChild(cartRemove);
      cart.insertBefore(cartItemElem, cart.childNodes[cart.childElementCount]);
    }
    //check sum
    result();
    e.preventDefault();
  }

  //remove items from cart
  function removeFromCart(e) {
    this.parentNode.children[2];
    for(var i = 0; i < item.length; i++) {
      //checking removed item and returns back 'add to cart' button in products
      if(item[i].children[1].innerText === this.parentNode.children[1].textContent) {
       item[i].children[3].classList.remove('products__itemBttn--hide');
      }
    }
    //remove item
    this.parentNode.outerHTML = '';

    //if cart empty, return defaults
    if(!cart.children[1].classList.contains('cart__item')) {
      cartBttn.textContent = 'Rowiń koszyk';
      cartBttn.setAttribute('data-switch', 'off');
      cart.classList.remove('cart--open');
      cartText.style.display = 'block';
    }
    //check sum
    result();
    e.preventDefault();
  }

  //counts prices when input has directly changed value
  function inptVal() {
    let _this = this;
    let val = _this.value;
    let getPrice = this.parentNode.parentNode.lastChild;
    let getPriceVal = Number(getPrice.getAttribute('value'));
    getPriceVal = getPriceVal * val;
    val = val;
    getPrice.innerHTML = getPriceVal;
    result();
  }

  //set amout and multiply price by it
  function count(e) {
    let inputField = this.parentNode.firstChild.children[0];
    let val = inputField.value;
    let getPrice = this.parentNode.lastChild;
    let getPriceVal = Number(getPrice.getAttribute('value'));
    if (this.classList.contains('calc__inputBttnMore')) {
      val++;
      this.classList.add('calc__inputBttnMore--anim');
    }
    if (this.classList.contains('calc__inputBttnLess')) {
      val--;
      this.classList.add('calc__inputBttnLess--anim');
    }
    if (val < 0) {
      val = 0;
    }
    getPriceVal = getPriceVal * val;
    inputField.value = val;
    getPrice.innerHTML = getPriceVal;
    result();
    e.preventDefault();
  }

  //counting all prices in sum element
  function result() {
    sum.innerHTML = '';
    let suma = 0;
    let prices = document.getElementsByClassName('cart__itemPrice');
    for (var index = 0; index < prices.length; index++) {
      let itemPrice = Number(prices[index].textContent);
      suma += itemPrice;
      sum.innerHTML = suma;
    }
  }

  //makes an array with items (products) when it need to
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
  }

  function sortItems(e) {
    makeItemsArr(); //make an array then sort it
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
    e.preventDefault();
  }

  function showSorted() {
    //removes all displayed element form HTML DOM
    item[0].parentElement.innerHTML = '';

    //displays sorted array 'itemsArr';
    for (var index = 0; index < itemLen; index++) {
      let divItem = document.createElement('div');
      divItem.classList.add('products__item');
      divItem.innerHTML = '<div class="products__itemImg" style="' + itemsArr[index].img + '"></div><div class="products__itemName">' + itemsArr[index].name + '</div><div class="products__itemPrice">' + itemsArr[index].price + '</div>';

      let itmBttn = document.createElement('button');
      itmBttn.setAttribute('class', itemsArr[index].bttn.value);
      itmBttn.innerText = 'Dodaj do koszyka';
      itmBttn.addEventListener('click', addToCart, false);

      divItem.appendChild(itmBttn);
      products.appendChild(divItem);
    };
  }

  //global event litsteners
  for (var index = 0; index < itemBttnLen; index++) {
    itemBttn[index].addEventListener('click', addToCart, false);
  }
  cartBttn.addEventListener('click', showCart, false);
  selectElem.addEventListener('change', sortItems, false);

  //DOMContentLoaded end
}, false);