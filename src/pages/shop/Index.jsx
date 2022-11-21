import React from "react";
import { useDispatch } from "react-redux";
import { Itemcard } from "../../components/Itemcard";
import { productAction } from "../../store/productslice";
import items from "../../storageProducts/storageProducts.json";
import "./shop.css";

function Shop() {
  const dispatch = useDispatch();
  const addingToCart = (el) => dispatch(productAction.addToCart(el));
  const removingFromCart = (el) => dispatch(productAction.removeFromCart(el));
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="main">
        {items.map((el) => (
          <div
            style={{
              margin: "30px",
            }}
            key={el.id}
          >
            <Itemcard
              el={el}
              addProduct={() => addingToCart(el)}
              removeProduct={() => removingFromCart(el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
