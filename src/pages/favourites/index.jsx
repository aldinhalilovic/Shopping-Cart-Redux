import { Button } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Itemcard } from "../../components/Itemcard";
import { productAction } from "../../store/productslice";

function Favourites() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const removeProduct = (el) => dispatch(productAction.removeFromCart(el));
  return (
    <div>
      {cartItems.length === 0 ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>There is no Car in your favourite page.</h1>
          <h3>You can go to shop by clicking to this button!</h3>
          <Button onClick={() => navigate("/")} mt={10}>
            Go to shop
          </Button>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                cartItems.length > 2 ? "flex-start" : "space-around",
              alignItems: "center",
              width: "50%",
              overflowX: "auto",
            }}
          >
            {cartItems.map((el) => (
              <Itemcard
                el={el}
                key={el.id}
                removeProduct={() => removeProduct(el)}
              />
            ))}
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "center",
            }}
          >
            <h3>You want to buy this products?</h3>
            <h3>Please go to your custom wishes.</h3>
            <Button onClick={() => navigate("/products")}>
              Custom service
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favourites;
