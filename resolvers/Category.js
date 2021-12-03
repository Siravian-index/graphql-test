exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    const categoryProducts = products.filter((p) => p.categoryId === id)
    let filteredCategoryProducts = categoryProducts
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter((p) => p.onSale)
      }
    }
    return filteredCategoryProducts
  },
}

//  simple destructure
// exports.Category = {
//   products: (parent, args, context) => {
//     const { products } = context;
//     const { id } = parent;
//     return products.filter((p) => p.categoryId === id);
//   },
// };
