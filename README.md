<pre>
## 01-Dom manipulation ##
  //Easy -1//
document.getElementById("main-heading").innerText="My Awesome Shop"
## Output ##
   <img width="899" alt="image" src="https://github.com/user-attachments/assets/92ce3c61-b8ef-4926-b9bd-57ab56c3c22b" />
  //Easy-2//
document.getElementsByClassName("tagline")[0].innerHTML="Find the <strong>best</strong> products here!"
## Output ##
  <img width="899" alt="image" src="https://github.com/user-attachments/assets/8d35b8ef-1240-4af8-a812-68afdeaef98b" />
  //Easy -3//
document.querySelector("footer").textContent="&copy; 2025 Donthula Supriya"
## Output ##
  <img width="934" alt="image" src="https://github.com/user-attachments/assets/9fee8f21-1905-45c3-918a-632deae64b29" />
//Medium-1//
const main=document.getElementById("app-container")
const header2=document.createElement("h2")
header2.textContent="About us"
main.appendChild(header2)
## output ##
<img width="938" alt="image" src="https://github.com/user-attachments/assets/0bac8fe6-10af-4277-af5a-dd18aa4d5862" />

//Medium -2 & Medium -3//

const main2=document.getElementById("app-container")
const footer2=document.createElement("p")
footer2.textContent="We are a small team passionate about quality products."
main2.appendChild(footer2)

 ##Output ##
<img width="932" alt="image" src="https://github.com/user-attachments/assets/8b225b96-603e-4dd9-869d-8fa518b654c2" />

//Hard 1//
const divele=document.createElement("div");
divele.className="Contact-in";
const para1=document.createElement("p")
para1.textContent="Email: contact@awesomeshop.com";
const para2=document.createElement("p");
para2.textContent= "Phone: 123-456-7890";
divele.appendChild(para1);
divele.appendChild(para2);
const footer = document.querySelector('footer');
document.body.insertBefore(divele, footer);
## Output ##
<img width="947" alt="image" src="https://github.com/user-attachments/assets/f1216f28-f887-45ca-9a5a-87e3627e5922" />

## 02-arraymethods ##
//easy1//
const inStockProducts=products.filter((value)=>
{
    return value.inStock===true;
}
);

console.log(inStockProducts);

## output ##
<img width="544" alt="image" src="https://github.com/user-attachments/assets/e193bbd8-8d4a-46b5-9436-7dd633f29ce3" />

//Easy -2//
const bookProducts=products.filter((values)=>
{
    return values.category==="Books";
}
);
console.log(bookProducts);
 ## Output ##
 <img width="241" alt="image" src="https://github.com/user-attachments/assets/db13bfd6-5092-48cb-b002-fcdd3d34e70a" />

  //Medium -1//

const productNames=products.map((names=>
{
    return names.name;
}
));
console.log(productNames);
##Output ##
<img width="181" alt="image" src="https://github.com/user-attachments/assets/4a9b1839-5916-473a-82da-5ff41d1a467e" />

//Medium -2//
const arrayofStrings=products.map((value1)=>
{
    return `${value1.name} ${value1.price}`;
});
console.log(arrayofStrings);
 
## Output ##
<img width="191" alt="image" src="https://github.com/user-attachments/assets/1a4b8355-3183-4502-b196-c3754e37a142" />

 // Hard -1//
 const totalprice =products.reduce((sum,currvalue)=>
 {
    return sum+currvalue.price;
 },0);
 console.log(totalprice);

  ##Output##
<img width="71" alt="image" src="https://github.com/user-attachments/assets/a068d255-1c6c-4dc4-ade9-14929b4cf8fc" />
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
## Output ##
<img width="203" alt="image" src="https://github.com/user-attachments/assets/24dad085-7b1e-48e6-9fe9-8e289e596b9a" />

## 03-d0m and arrays together ##
  //Easy //

const productlist=document.getElementById("product-list");

const prods = products.map(value => `<li>${value.name}</li>`);

productlist.innerHTML=prods.join('');

## Output ##
  <img width="950" alt="image" src="https://github.com/user-attachments/assets/eb74947e-6825-4dee-9587-5bfe3f70938f" />
// Medium //
const productlist1 = document.getElementById("product-list");
const prods1 = products.filter(value => value.inStock);
const items = prods1.map(value =>
  `<li class="product-item">
    <h3>${value.name}</h3>
    <p>$${value.price}</p>
  </li>`
);
productlist1.innerHTML = items.join('');  
## Output ##
<img width="938" alt="image" src="https://github.com/user-attachments/assets/fa7fc6c4-2746-4d1a-ab01-e2b2b67f26ec" />

 // Hard //

const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
      const li = document.createElement("li");
      li.classList.add("product-item");

      const name = document.createElement("h3");
      name.textContent = product.name;

      const price = document.createElement("p");
      price.textContent = `$${product.price}`;

      li.appendChild(name);
      li.appendChild(price);

      if (!product.inStock) {
          li.classList.add("out-of-stock");
      }

      if (product.category.toLowerCase() === "electronics") {
          li.classList.add("category-electronics");
      } else if (product.category.toLowerCase() === "books") {
          li.classList.add("category-books");
      }

      productList.appendChild(li);
  });

  const totalValue = products.reduce((sum, product) => {
      return product.inStock ? sum + product.price : sum;
  }, 0);

  const totalDiv = document.createElement("div");
  totalDiv.textContent = `Total Value of In-Stock Items: $${totalValue}`;
  totalDiv.style.marginTop = "20px";
  totalDiv.style.textAlign = "center";
  totalDiv.style.fontWeight = "bold";

  document.getElementById("app-container").appendChild(totalDiv);

## Output ##
<img width="911" alt="image" src="https://github.com/user-attachments/assets/4a9b2cd4-d826-4b12-83aa-a4664db3dd56" />


     





 



  

</pre>
