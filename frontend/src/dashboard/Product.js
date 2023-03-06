import React from "react";
import "../App.css";

function App() {
  // Define a list of items
  const itemList = [
    { name: "Item 1", price: 10.99, category: "Electronics", inStock: true },
    { name: "Item 2", price: 24.99, category: "Home", inStock: false },
    { name: "Item 3", price: 15.49, category: "Books", inStock: true },
    { name: "Item 4", price: 5.99, category: "Beauty", inStock: true },
  ];

  // Map over the items and create a table row for each one
  const itemRows = itemList.map((item) => (
    <tr key={item.name}>
      <td>
        <div className="box">{item.name}</div>
      </td>
      <td>
        <div className="box">{item.price.toFixed(2)}</div>
      </td>
      <td>
        <div className="box">{item.category}</div>
      </td>
      <td>
        <div className={`box ${item.inStock ? "green" : "red"}`}>
          {item.inStock ? "Yes" : "No"}
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="Product-box">
      <table>
        <thead>
          <tr>
            <th>
              <div className="box">Name</div>
            </th>
            <th>
              <div className="box">Price</div>
            </th>
            <th>
              <div className="box">Category</div>
            </th>
            <th>
              <div className="box">In Stock</div>
            </th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>
    </div>
  );
}

export default App;
