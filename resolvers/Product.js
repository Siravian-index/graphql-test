exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((c) => c.id === categoryId);
  },
};
