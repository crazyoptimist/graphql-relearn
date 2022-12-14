const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    // it's conventional to name unused params(parent here for example) as underscore
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      const { id, description, price } = args;
      return productsModel.addNewProduct(id, description, price);
    },
    addNewProductReview: (_, args) => {
      const { productId, rating, comment } = args;
      return productsModel.addNewProductReview(productId, rating, comment);
    },
  },
};
