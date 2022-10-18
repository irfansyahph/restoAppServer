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
const _detail_order = require("./detail_order");
const _products = require("./products");
const _users = require("./users");

function initModels(sequelize) {
  const detail_order = _detail_order(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  detail_order.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(detail_order, { as: "detail_orders", foreignKey: "product_id"});

  return {
    detail_order,
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
