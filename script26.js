let products = [];

const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  products = await res.json();
  console.log(products);
};

const displayProducts = (array) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; // clear the container before adding new products
  array.map((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;
    productImage.style.maxWidth = "100%";
    productImage.style.maxHeight = "100%";

    const productTitle = document.createElement("h3");
    productTitle.innerText = product.category;

    const productPrice = document.createElement("h4");
    productPrice.innerText = `Rs ${product.price}`;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);
    productContainer.appendChild(productDiv);
  });
};

const filterByCategory = () => {
  const categoryFilter = document.getElementById("category-filter").value;
  const filteredProducts =
    categoryFilter === "allCategory"
      ? products
      : products.filter((product) => product.category === categoryFilter);
  displayProducts(filteredProducts);
};

const filterByPrice = () => {
  const priceFilter = document.getElementById("price-filter").value;
  let filteredProducts = [];
  if (priceFilter === "all") {
    filteredProducts = products;
  } else if (priceFilter === "less-than-100") {
    filteredProducts = products.filter((product) => product.price < 100);
  } else if (priceFilter === "less-than-200") {
    filteredProducts = products.filter((product) => product.price < 200);
  } else if (priceFilter === "less-than-300") {
    filteredProducts = products.filter((product) => product.price < 300);
  } else if (priceFilter === "less-than-400") {
    filteredProducts = products.filter((product) => product.price < 400);
  } else if (priceFilter === "less-than-500") {
    filteredProducts = products.filter((product) => product.price < 500);
  } else if (priceFilter === "more-than-500") {
    filteredProducts = products.filter((product) => product.price > 500);
  }
  displayProducts(filteredProducts);
};

// React refernce of above code snippet
import { useEffect, useState } from "react";

const ProductComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("allCategory");
  const [priceFilter, setPriceFilter] = useState("all");

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    setData(products);
    setFilteredData(products);
    console.log(products);
  };

  const filterProducts = () => {
    let filtered = data;

    if (categoryFilter !== "allCategory") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    if (priceFilter !== "all") {
      if (priceFilter === "less-than-100") {
        filtered = filtered.filter((product) => product.price < 100);
      } else if (priceFilter === "less-than-200") {
        filtered = filtered.filter((product) => product.price < 200);
      } else if (priceFilter === "less-than-300") {
        filtered = filtered.filter((product) => product.price < 300);
      } else if (priceFilter === "less-than-400") {
        filtered = filtered.filter((product) => product.price < 400);
      } else if (priceFilter === "less-than-500") {
        filtered = filtered.filter((product) => product.price < 500);
      } else if (priceFilter === "more-than-500") {
        filtered = filtered.filter((product) => product.price > 500);
      }
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [categoryFilter, priceFilter]);

  return (
    <>
      <div id="outer-box">
        <div id="filter-box">
          <label id="by-category">
            Filter By Category:
            <select
              id="category-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="allCategory">All Category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </label>
          <label id="by-prize">
            Filter By Price:
            <select
              id="price-filter"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="less-than-100">Rs 0-100</option>
              <option value="less-than-200">Rs 100-200</option>
              <option value="less-than-300">Rs 200-300</option>
              <option value="less-than-400">Rs 300-400</option>
              <option value="less-than-500">Rs 400-500</option>
              <option value="more-than-500">More than Rs 500</option>
            </select>
          </label>
        </div>
        <div id="product-container">
          {filteredData.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductComponent;

document
  .getElementById("category-filter")
  .addEventListener("change", filterByCategory);

document
  .getElementById("price-filter")
  .addEventListener("change", filterByPrice);

fetchData();
