let totalPrice = 0;
let totalPoint = 0;
const PRODUCT_LIST = [
  { id: 'p1', productName: '상품1', price: 10000, stock: 50 },
  { id: 'p2', productName: '상품2', price: 20000, stock: 30 },
  { id: 'p3', productName: '상품3', price: 30000, stock: 20 },
  { id: 'p4', productName: '상품4', price: 15000, stock: 0 },
  { id: 'p5', productName: '상품5', price: 25000, stock: 10 },
];

function main() {
  renderContent();
}

const renderContent = () => {
  const root = document.getElementById('app');
  const wrap = document.createElement('div');
  const content = document.createElement('div');
  const contentTitle = document.createElement('h1');
  const cartLists = document.createElement('div');
  const totalPriceWrap = document.createElement('div');
  const productOptions = document.createElement('select');
  const addProductBtn = document.createElement('button');
  const stockInfo = document.createElement('div');

  content.setAttribute('id', 'card-wrap');
  cartLists.setAttribute('id', 'card-items');
  totalPriceWrap.setAttribute('id', 'card-total');
  productOptions.setAttribute('id', 'product-select');
  addProductBtn.setAttribute('id', 'add-to-cart');
  stockInfo.setAttribute('id', 'stock-status');

  wrap.setAttribute('class', 'bg-gray-100 p-8');
  content.setAttribute('class', 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8');
  contentTitle.setAttribute('class', 'text-2xl font-bold mb-4');
  totalPriceWrap.setAttribute('class', 'text-xl font-bold my-4');
  productOptions.setAttribute('class', 'border rounded p-2 mr-2');
  addProductBtn.setAttribute('class', 'bg-blue-500 text-white px-4 py-2 rounded');
  stockInfo.setAttribute('class', 'text-sm text-gray-500 mt-2');

  contentTitle.textContent = '장바구니';
  addProductBtn.textContent = '추가';

  content.appendChild(contentTitle);
  content.appendChild(cartLists);
  content.appendChild(totalPriceWrap);
  content.appendChild(productOptions);
  content.appendChild(addProductBtn);
  content.appendChild(stockInfo);
  wrap.appendChild(content);
  root.appendChild(wrap);

  renderTotalPriceAndPoint(totalPriceWrap);
  renderProductsOptions(PRODUCT_LIST);
};

const renderTotalPriceAndPoint = (totalPriceWrap) => {
  const cartTotalPrice = document.createElement('span');
  const cartTotalPoints = document.createElement('span');

  cartTotalPrice.setAttribute('id', 'total-price');
  cartTotalPoints.setAttribute('id', 'loyalty-points');
  cartTotalPoints.setAttribute('class', 'text-blue-500 ml-2');

  cartTotalPrice.innerHTML = `총액: ${Math.round(totalPrice)}원`;
  cartTotalPoints.innerHTML = `(포인트: ${totalPoint})`;

  totalPriceWrap.appendChild(cartTotalPrice);
  totalPriceWrap.appendChild(cartTotalPoints);
};

const renderProductsOptions = (PRODUCT_LIST) => {
  const productOptions = document.getElementById('product-select');
  productOptions.innerHTML = '';

  PRODUCT_LIST.map((product) => {
    const option = document.createElement('option');
    option.value = product.id;

    option.textContent = `${product.productName} - ${product.price}원`;

    if (product.stock === 0) {
      option.disabled = true;
    }

    productOptions.appendChild(option);
  });
};

const addProductToCart = () => {
  const select = document.getElementById('product-select');
  const option = select.options[select.selectedIndex];
  const cartProductWrap = document.createElement('div');
  const cartProductTitle = document.createElement('span');
  const increaseProductAmountBtn = document.createElement('button');
  const decreaseProductAmountBtn = document.createElement('button');
  const deleteCartProductBtn = document.createElement('button');

  cartProductWrap.setAttribute('id', option.value);

  increaseProductAmountBtn.setAttribute('class', 'quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1');
  decreaseProductAmountBtn.setAttribute('class', 'quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1');
  deleteCartProductBtn.setAttribute('class', 'remove-item bg-red-500 text-white px-2 py-1 rounded');

  cartProductWrap.appendChild(cartProductTitle);
  cartProductWrap.appendChild(increaseProductAmountBtn);
  cartProductWrap.appendChild(decreaseProductAmountBtn);
  cartProductWrap.appendChild(deleteCartProductBtn);

  document.getElementById('card-items').appendChild(cartProductWrap);
};

main();

document.getElementById('card-wrap').addEventListener('click', function (e) {
  if (e.target.matches('#add-to-cart')) {
    addProductToCart();
  }
});
