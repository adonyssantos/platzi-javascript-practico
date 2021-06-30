const discountPrice = (price, discount) => {
  const priceWithDiscount = (price * (100 - discount)) / 100;
  return { price, discount, priceWithDiscount };
};

// DOM Printer
const print = (id, data) => (document.getElementById(id).innerHTML = data());

// Get input value
const valueOf = (id) => {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
};

document.getElementById("calculate-discount").addEventListener("click", () => {
  const result = discountPrice(valueOf("price"), valueOf("discount"));
  const { price, discount, priceWithDiscount } = result;
  print("result", () => {
    return `Price: $${price}
	Discount: ${discount}%
	Price with discount: $${priceWithDiscount}`;
  });
});
