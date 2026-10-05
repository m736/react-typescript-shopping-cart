import React from "react";
import { usetheme } from "../context/ThemeContext";
import Card from "../components/Card";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { theme } = usetheme();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-6">
          Current theme:<span className="font-semibold">{theme}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <Card
          title="React Router"
          description="Navigation between pages using nested routes."
        />

        <Card
          title="Context API"
          description="Global theme management across the application."
        />

        <Card
          title="Tailwind CSS"
          description="Utility-first styling for responsive layouts."
        /> */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default Home;
