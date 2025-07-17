// src/lib/api.js

export const fetchProducts = async () => {
  // Simulando produtos mockados
  return [
    {
      id: 1,
      name: "Tênis Nike Air Max",
      image: "/images/tenis1.jpg",
      price: 399.99,
      category: "calçados",
    },
    {
      id: 2,
      name: "Jaqueta Adidas Essentials",
      image: "/images/jaqueta1.jpg",
      price: 249.9,
      category: "roupas",
    },
    {
      id: 3,
      name: "Bolsa Feminina Couro",
      image: "/images/bolsa1.jpg",
      price: 199.0,
      category: "acessórios",
    },
    // ... adicione mais se quiser
  ];
};
