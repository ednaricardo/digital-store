// src/lib/formatPrice.js
export const formatPrice = (value) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
