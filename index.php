<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Koszyk - Macopedia - Franciszek Andruszkiewicz</title>
  <link rel="stylesheet" href="dist/css/main.css">
</head>

<body>
  <?php
  $cart = [
    'name' => 'Koszyk',
    'text' => 'Koszyk jest pusty!',
    'bttnText' => 'Rozwiń koszyk'
  ];

  $products = [
    'name' => 'Produkty',
    'sort' => [
      'default' => 'Sortuj',
      'price' => 'Cena',
      'name' => 'Nazwa'
    ],
    'bttnText' => 'Dodaj do koszyka',
    'items' =>
    [
      [
        'img' => './img/rower1.jpg',
        'name' => 'ROWER SKŁADANY TILT 500 XS B-Twin',
        'price' => '1309'
      ],
      [
        'img' => './img/rower2.jpg',
        'name' => 'Damski Rower miejski Goetze STYLE 28',
        'price' => '649'
      ],
      [
        'img' => './img/rower3.jpg',
        'name' => 'Rower triathlonowy Argon 18 E-119 TRI+',
        'price' => '1199'
      ],
      [
        'img' => './img/rower4.jpg',
        'name' => 'Rower BMX Flybikes Omega 2016',
        'price' => '1599'
      ],
      [
        'img' => './img/rower5.jpg',
        'name' => 'ARKUS ROMET SAFARI 28 ROWER CROSS',
        'price' => '2345'
      ],
      [
        'img' => './img/rower6.jpg',
        'name' => 'BOARDMAN Rower szosowy SLR',
        'price' => '3999'
      ],
      [
        'img' => './img/rower7.jpg',
        'name' => 'rower trójkołowy',
        'price' => '150'
      ],
      [
        'img' => './img/rower8.jpg',
        'name' => 'rower elektryczny SEATTLE 60 V 3000',
        'price' => '983'
      ]
    ]
  ];
  ?>

    <section>
      <div class="wrapper">
        <h1>
          <?= $cart['name']; ?>
        </h1>
        <button class="cartBttn" data-switch="off">
          <?= $cart['bttnText']?>
        </button>
        <div class="cart">
          <p class="cart__text">
          <?= $cart['text']?>
          </p>
          <div class="cart__itemSum"></div>
        </div>
      </div>
    </section>

    <section class="productsSection">
      <div class="wrapper">
        <h1>
          <?= $products['name']?>
        </h1>
        <select name="productSort" id="productSort" class="productSort">
          <?php
            foreach($products['sort'] as $name => $text) :
          ?>
          <option value="<?= $name; ?>">
            <?= $text; ?>
          </option>
          <?php
            endforeach;
          ?>
        </select>
        <div class="products">
          <?php
        foreach($products['items'] as $product) :
      ?>
            <div class="products__item">
              <div class="products__itemImg" style="background-image:url(<?= $product['img']; ?>)">
              </div>
              <div class="products__itemName">
                <?= $product['name']; ?>
              </div>
              <div class="products__itemPrice">
                <?= $product['price']; ?>
              </div>
              <button class="products__itemBttn">
                <?= $products['bttnText']?>
              </button>
            </div>
            <?php
        endforeach;
      ?>
        </div>
      </div>
    </section>

    <script src="dist/js/main.js"></script>

</body>

</html>