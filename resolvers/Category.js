exports.Category = {
  products: ({ id }, { filter }, { db }) => {
    const categoryProducts = db.products.filter((p) => p.categoryId === id)
    let filteredCategoryProducts = categoryProducts
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter((p) => p.onSale)
      }
      if (filter.avgRating >= 1 && filter.avgRating <= 5) {
        let threshold = filter.avgRating
        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
          const productReviews = db.reviews.filter((r) => r.productId === product.id)
          let totalRating = productReviews.reduce((init, review) => {
            return init + Number(review.rating)
          }, 0)
          const avg = totalRating / productReviews.length
          return avg >= threshold
        })
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
