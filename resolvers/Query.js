exports.Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((p) => p.onSale)
      }
    }
    return filteredProducts
  },
  product: (parent, { id }, { products }) => products.find((product) => product.id === id),

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => categories.find((cat) => cat.id === id),
}
