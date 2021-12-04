exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((p) => p.onSale)
      }
      if (filter.avgRating >= 1 && filter.avgRating <= 5) {
        let threshold = filter.avgRating
        filteredProducts = filteredProducts.filter((product) => {
          const productReviews = db.reviews.filter((r) => r.productId === product.id)
          let totalRating = productReviews.reduce((init, review) => {
            return init + Number(review.rating)
          }, 0)
          const avg = totalRating / productReviews.length
          return avg >= threshold
        })
      }
    }
    return filteredProducts
  },
  product: (parent, { id }, { db }) => db.products.find((product) => product.id === id),

  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) => db.categories.find((cat) => cat.id === id),
}
