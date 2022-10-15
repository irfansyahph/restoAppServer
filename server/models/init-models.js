import Sequelize from "sequelize";
import config from '../config/config'

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _cart_product = require("./cart_product");
const _products = require("./products");
const _users = require("./users");

function initModels(sequelize) {
  const cart = _cart(sequelize, DataTypes);
  const cart_product = _cart_product(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  cart_product.belongsTo(cart, { as: "cart", foreignKey: "cart_id" });
  cart.hasMany(cart_product, { as: "cart_products", foreignKey: "cart_id" });
  cart_product.belongsTo(products, { as: "product", foreignKey: "product_id" });
  products.hasMany(cart_product, { as: "cart_products", foreignKey: "product_id" });
  cart.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(cart, { as: "carts", foreignKey: "user_id" });

  return {
    cart,
    cart_product,
    products,
    users,
  };
}
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

const models = initModels(sequelize);
export default models
export { sequelize }