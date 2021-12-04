const { v4: uuid } = require('uuid')

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input
    const newCategory = {
      id: uuid(),
      name,
    }
    categories.push(newCategory)
    return newCategory
  },

  addProduct: (parent, { input }, { products, categories }) => {
    const { name, image, description, quantity, price, onSale, categoryId } = input
    const newProduct = {
      id: uuid(),
      name,
      image,
      description,
      quantity,
      price,
      onSale,
      categoryId,
    }
    const checkCategoryId = categories.find((c) => c.id === categoryId)
    if (checkCategoryId) {
      products.push(newProduct)
      return newProduct
    }
  },
  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    }
    reviews.push(newReview)
    return newReview
  },
}
