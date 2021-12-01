exports.Category = {
  products: ({ id }, args, { products }) => {
    return products.filter((p) => p.categoryId === id);
  },
};

//  simple destructure
// exports.Category = {
//   products: (parent, args, context) => {
//     const { products } = context;
//     const { id } = parent;
//     return products.filter((p) => p.categoryId === id);
//   },
// };
