import { describe, it, expect } from "vitest";
import { CartReducer } from "../CartReducer";

describe("cartReducer", () => {
  it("should add a product to the cart", () => {
    const initialState = { cart: [] };

    const product = {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "laptop.jpg",
      quantity: 1,
    };

    const newState = CartReducer(initialState, {
      type: "ADD_TO_CART",
      payload: product,
    });

    expect(newState.cart).toHaveLength(1);
    expect(newState.cart[0].name).toBe("Laptop");
    expect(newState.cart[0].quantity).toBe(1);
  });
});
it("should increase quantity when adding the same product", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
    quantity: 1,
  };

  const firstState = CartReducer(
    { cart: [] },
    { type: "ADD_TO_CART", payload: product },
  );

  const secondState = CartReducer(firstState, {
    type: "ADD_TO_CART",
    payload: product,
  });

  expect(secondState.cart).toHaveLength(1);
  expect(secondState.cart[0].quantity).toBe(2);
  console.log("Final cart:", secondState.cart);
});

it("should remove a product from the cart", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
    quantity: 1,
  };

  const state = {
    cart: [product],
  };

  const newState = CartReducer(state, {
    type: "REMOVE_FROM_CART",
    payload: 1,
  });

  expect(newState.cart).toHaveLength(0);
});
it("should increase product quantity", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
    quantity: 1,
  };

  const state = { cart: [product] };

  const newState = CartReducer(state, {
    type: "INCREASE_QUANTITY",
    payload: 1,
  });

  expect(newState.cart[0].quantity).toBe(2);
});
it("should decrease product quantity", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
    quantity: 2,
  };

  const state = { cart: [product] };

  const newState = CartReducer(state, {
    type: "DECREASE_QUANTITY",
    payload: 1,
  });

  expect(newState.cart[0].quantity).toBe(1);
});
it("should not decrease quantity below 1", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
    quantity: 1,
  };

  const state = { cart: [product] };

  const newState = CartReducer(state, {
    type: "DECREASE_QUANTITY",
    payload: 1,
  });

  expect(newState.cart[0].quantity).toBe(1);
});
it("should keep other products unchanged", () => {
  const laptop = {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "laptop.jpg",
    quantity: 1,
  };

  const mobile = {
    id: 2,
    name: "Mobile",
    price: 25000,
    image: "mobile.jpg",
    quantity: 1,
  };

  const state = {
    cart: [laptop, mobile],
  };

  const newState = CartReducer(state, {
    type: "INCREASE_QUANTITY",
    payload: 1,
  });

  expect(newState.cart[0].quantity).toBe(2);
  expect(newState.cart[1].quantity).toBe(1);
});