const cart = new Cart($('#cartModal'));
const productList = new ProductList('https://raw.githubusercontent.com/koldovsky/lv338set/master/products.json', $('.products-container'), cart);
