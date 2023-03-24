const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TagCategory extends Model {}

TagCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tagcategory',
  }
);

module.exports = TagCategory;
