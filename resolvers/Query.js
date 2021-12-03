exports.Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((p) => p.onSale)
      }
      if (filter.avgRating >= 1 && filter.avgRating <= 5) {
        let threshold = filter.avgRating
        filteredProducts = filteredProducts.filter((product) => {
          const productReviews = reviews.filter((r) => r.productId === product.id)
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
  product: (parent, { id }, { products }) => products.find((product) => product.id === id),

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => categories.find((cat) => cat.id === id),
}
