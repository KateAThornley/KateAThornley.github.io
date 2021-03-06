// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "potato",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 0.99,
  },
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 2.35,
  },
  {
    name: "rice",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 2.99,
  },

  {
    name: "avacados",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 2.99,
  },
  {
    name: "milk",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 4.0,
  },
  {
    name: "carrots",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 4.0,
  },
  {
    name: "cookies",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 4.3,
  },
  {
    name: "eggs",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 5.64,
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 10.0,
  },

  {
    name: "ground beef",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 23.3,
  },

  {
    name: "cake",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 12.0,
  },
  {
    name: "chicken",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 20.89,
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    if (restriction == "None") {
      product_names.push(prods[i].name);
    } else if (restriction == "Vegetarian" && prods[i].vegetarian == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "GlutenFree" && prods[i].glutenFree == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "Organic" && prods[i].organic == true) {
      product_names.push(prods[i].name);
    }
  }

  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
