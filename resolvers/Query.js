exports.Query = {
  products: (parent, { onSale }, { products }) => {
    if (onSale) {
      return products.filter((p) => p.onSale)
    }
    return products
  },
  product: (parent, { id }, { products }) => products.find((product) => product.id === id),

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => categories.find((cat) => cat.id === id),
}
