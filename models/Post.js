const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    blog_title: {
        type: DataTypes.TEXT
    },
    blog_content: {
        type: DataTypes.TEXT
    },
    },
{
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'post'
});





module.exports = Post;