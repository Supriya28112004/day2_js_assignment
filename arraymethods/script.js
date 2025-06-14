// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];
//easy1//
const inStockProducts=products.filter((value)=>
{
    return value.inStock===true;
}
);

console.log(inStockProducts);


/*Output*/
/*
[
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
    inStock: true
  },
  {
    id: 3,
    name: 'The Great Gatsby',
    category: 'Books',
    price: 15,
    inStock: true
  },
  {
    id: 4,
    name: 'Coffee Maker',
    category: 'Home Goods',
    price: 60,
    inStock: true
  },
  {
    id: 6,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 250,
    inStock: true
  }
]*/

//Easy -2//
const bookProducts=products.filter((values)=>
{
    return values.category==="Books";
}
);
console.log(bookProducts);

//Output//
/*
[
  {
    id: 3,
    name: 'The Great Gatsby',
    category: 'Books',
    price: 15,
    inStock: true
  },
  {
    id: 5,
    name: 'To Kill a Mockingbird',
    category: 'Books',
    price: 12,
    inStock: false
  }
]*/
//Medium -1//

const productNames=products.map((names=>
{
    return names.name;
}
));
console.log(productNames);

/*Output
[
  'Laptop',
  'Headphones',
  'The Great Gatsby',
  'Coffee Maker',
  'To Kill a Mockingbird',
  'Smart Watch'
]*/


//Medium -2//
const arrayofStrings=products.map((value1)=>
{
    return `${value1.name} ${value1.price}`;
});
console.log(arrayofStrings);

/*Output 
[
  'Laptop 1200',
  'Headphones 150',
  'The Great Gatsby 15',
  'Coffee Maker 60',
  'To Kill a Mockingbird 12',
  'Smart Watch 250'
] */

  

 // Hard -1//
 const totalprice =products.reduce((sum,currvalue)=>
 {
    return sum+currvalue.price;
 },0);
 console.log(totalprice);

 /*Output
 1687 */


//Hard -2//

const namesofelectronics=products.filter((product)=>
{
    return product.category==="Electronics" && product.inStock===true
}).map((product)=>
{
    return product.name;
}
);
console.log(namesofelectronics);


/*Output


[ 'Laptop', 'Smart Watch' ]*/

