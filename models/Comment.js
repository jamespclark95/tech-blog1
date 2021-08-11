const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    text: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Comment;