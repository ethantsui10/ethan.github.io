
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "brocoli",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 1.99
},
{
  name: "bread",
  vegetarian: true,
  glutenFree: false,
  organic: false,
  price: 2.35
},
{
  name: "salmon",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 10.00
},
{
  name: "apples",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 3.75
},
{
  name: "oranges",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 4.50
},
{
  name: "beef",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 12.00
},
{
  name: "chicken",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 9.00
},
{
  name: "turkey",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 8.50
},
{
  name: "yogurt",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 5.50
},
{
  name: "cheese pizza",
  vegetarian: true,
  glutenFree: false,
  organic: false,
  price: 8.00
},
{
  name: "milk",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 7.75
},
{
  name: "eggs",
  vegetarian: false,
  glutenFree: true,
  organic: true,
  price: 11.00
}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];
  let product_prices = [];
  let product_final = [];

  for (let i=0; i<prods.length; i+=1) {
    if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
      product_names.push(prods[i]);
      deciFixed = prods[i].price.toFixed(2);
      product_prices.push(deciFixed);
    }
    else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
      product_names.push(prods[i]);
      deciFixed = prods[i].price.toFixed(2);
      product_prices.push(deciFixed);
    }
    else if ((restriction == "VegAndGluten") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
      product_names.push(prods[i]);
      deciFixed = prods[i].price.toFixed(2);
      product_prices.push(deciFixed);
    }
    else if ((restriction == "Organic") && (prods[i].organic == true)){
      product_names.push(prods[i]);
      deciFixed = prods[i].price.toFixed(2);
      product_prices.push(deciFixed);
    }
    else if (restriction == "None"){
      product_names.push(prods[i]);
      deciFixed = prods[i].price.toFixed(2);
      product_prices.push(deciFixed);
    }
  }

  product_prices.sort(function(a, b){
    return a - b;
  });


  for(let j = 0; j<product_prices.length; j+=1){
    for(let k =0; k<prods.length; k+=1){
      if(prods[k].price == product_prices[j]){
        product_final.push(prods[k].name);
      }
    }
  }

  for(let x = 0; x<product_prices.length; x++){
    product_prices[x] = " " + "$"+product_prices[x];
  }



  prodContain = [product_final, product_prices];

  return prodContain;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
totalPrice = 0;
for (let i=0; i<products.length; i+=1) {
  if (chosenProducts.indexOf(products[i].name) > -1){
    totalPrice += products[i].price;
  }


}

totalPrice = totalPrice.toFixed(2);
return "$"+totalPrice;
}
