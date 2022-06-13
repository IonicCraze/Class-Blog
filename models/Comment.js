const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
     },
     comment_body: {
         type: DataTypes.TEXT,
         allowNull: false,
     },
 },
 {
     sequelize,
     timestamps: true,
     freezeTableName: false,
     underscored: false,
     modelName: 'comment',
});





module.exports = Comment;