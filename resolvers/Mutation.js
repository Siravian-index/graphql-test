const { v4: uuid } = require('uuid')

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input
    const newCategory = {
      id: uuid(),
      name,
    }
    db.categories.push(newCategory)
    return newCategory
  },

  addProduct: (parent, { input }, { db }) => {
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
    db.products.push(newProduct)
    return newProduct
  },
  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    }
    db.reviews.push(newReview)
    return newReview
  },
  deleteCategory: (parent, { id }, { db }) => {
    if (!id) {
      return false
    }
    db.categories = db.categories.filter((c) => c.id !== id)
    db.products = db.products.map((p) => {
      if (p.categoryId === id) {
        const updatedProduct = {
          ...p,
          categoryId: null,
        }
        return updatedProduct
      } else {
        return p
      }
    })
    return true
  },
  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((p) => p.id !== id)
    db.reviews = db.reviews.filter((r) => r.productId !== id)
    return true
  },
  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((r) => r.id !== id)
    return true
  },
}
